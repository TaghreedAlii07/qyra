"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      projectType: formData.get("projectType")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you! Your message has been sent successfully.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" required />
      </label>

      <label>
        Email
        <input name="email" type="email" placeholder="your@email.com" required />
      </label>

      <label>
        Project Type
        <select name="projectType" defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          <option>Corporate Website</option>
          <option>E-Commerce Solution</option>
          <option>UI / UX Design</option>
          <option>Business System</option>
          <option>Data Solution</option>
        </select>
      </label>

      <label>
        Message
        <textarea
          name="message"
          placeholder="Tell us about your project"
          rows={5}
          required
        />
      </label>

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {message && (
        <p className={status === "success" ? "form-success" : "form-error"}>
          {message}
        </p>
      )}
    </form>
  );
}