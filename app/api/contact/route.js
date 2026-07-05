import { ConfidentialClientApplication } from "@azure/msal-node";

export async function POST(request) {
  try {
    const { name, email, projectType, message } = await request.json();

    if (!name || !email || !projectType || !message) {
      return Response.json(
        { success: false, error: "Please fill all fields." },
        { status: 400 }
      );
    }

    const tenantId = process.env.MICROSOFT_TENANT_ID;
    const clientId = process.env.MICROSOFT_CLIENT_ID;
    const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;

    if (!tenantId || !clientId || !clientSecret || !mailFrom || !mailTo) {
      return Response.json(
        { success: false, error: "Missing server email configuration." },
        { status: 500 }
      );
    }

    const cca = new ConfidentialClientApplication({
      auth: {
        clientId,
        authority: `https://login.microsoftonline.com/${tenantId}`,
        clientSecret,
      },
    });

    const tokenResponse = await cca.acquireTokenByClientCredential({
      scopes: ["https://graph.microsoft.com/.default"],
    });

    const emailHtml = `
      <h2>New message from QYRA website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    const graphResponse = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mailFrom)}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenResponse.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: `New QYRA Website Inquiry - ${projectType}`,
            body: {
              contentType: "HTML",
              content: emailHtml,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: mailTo,
                },
              },
            ],
            replyTo: [
              {
                emailAddress: {
                  address: email,
                  name,
                },
              },
            ],
          },
          saveToSentItems: true,
        }),
      }
    );

    if (!graphResponse.ok) {
      const errorText = await graphResponse.text();
      console.error("Microsoft Graph error:", errorText);

      return Response.json(
        { success: false, error: "Failed to send message." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}