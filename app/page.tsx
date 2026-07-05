import SplashScreen from "./components/SplashScreen";
import Image from "next/image";
import CursorGlow from "./components/CursorGlow";
import ScrollReveal from "./components/ScrollReveal";
import { Headset } from "lucide-react";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <CursorGlow />
      <ScrollReveal />


      <main className="site-hero">
        <video className="hero-video" src="/videos/hero.mp4" autoPlay muted loop playsInline />

        <div className="hero-video-overlay" />
        <div className="bg-grid" />
        <div className="bg-glow" />
        <div className="bg-dots" />
        <div className="digital-wave" />

        <header className="navbar">
          <a href="#" className="logo" aria-label="QYRA Home">
            <Image
              src="/images/logo-dark.png"
              alt="QYRA Technologies"
              width={220}
              height={80}
              priority
              className="logo-image"
            />
          </a>

          <input type="checkbox" id="menu-toggle" className="menu-toggle" />

          <label htmlFor="menu-toggle" className="menu-btn" aria-label="Open menu">
            <span />
            <span />
            <span />
          </label>

          <nav className="nav-links">
            <a className="active" href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="quote-btn">Start Your Project</a>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <h1>
              Transforming
              <br />
              Businesses
              <br />
              Through <span>Technology.</span>
            </h1>

            <p className="hero-text">
              We help businesses transform through technology, design, and
              intelligent digital solutions.
            </p>

            <div className="hero-actions">
              <a href="#services" className="primary-btn">
                <span>View Services</span>
              </a>

              <a href="#contact" className="secondary-btn">
                <span>Start Your Project</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <section id="services" className="services-section">
        <div className="services-bg-grid" />

        <div className="section-header reveal">
          <p className="section-kicker">OUR SERVICES</p>
          <h2>
            What We Build
            <br />
            <span>For Modern Businesses.</span>
          </h2>
          <p>Websites, apps, systems, and data solutions built to perform.</p>
        </div>

        <div className="services-grid">
          <article className="service-card reveal">
            <div className="service-top">
              <span>01</span>
              <small>Website Development</small>
            </div>
            <h3>Corporate Websites</h3>
            <p>Premium websites for companies, institutions, organizations, and service providers that need a strong digital presence.</p>
            <div className="service-tags">
              <span>Corporate</span>
              <span>Responsive</span>
              <span>SEO Ready</span>
            </div>
          </article>

          <article className="service-card reveal">
            <div className="service-top">
              <span>02</span>
              <small>Commerce</small>
            </div>
            <h3>E-Commerce Solutions</h3>
            <p>Modern online stores built for smooth shopping experiences, product discovery, and scalable growth.</p>
            <div className="service-tags">
              <span>Shopify</span>
              <span>Salla</span>
              <span>Zid</span>
            </div>
          </article>

          <article className="service-card reveal">
            <div className="service-top">
              <span>03</span>
              <small>Experience Design</small>
            </div>
            <h3>UI / UX Design</h3>
            <p>Clean, intuitive, and conversion-focused interfaces designed to make every interaction feel effortless.</p>
            <div className="service-tags">
              <span>Figma</span>
              <span>Web Design</span>
              <span>UX Flow</span>
            </div>
          </article>

          <article className="service-card reveal">
            <div className="service-top">
              <span>04</span>
              <small>Systems</small>
            </div>
            <h3>Business Systems</h3>
            <p>Booking systems, dashboards, CRM tools, and internal platforms that help teams work faster and smarter.</p>
            <div className="service-tags">
              <span>CRM</span>
              <span>Dashboards</span>
              <span>Automation</span>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-bg-grid" />

        <div className="section-header reveal">
          <p className="section-kicker">FEATURED PROJECTS</p>
          <h2>
            Digital Experiences
            <br />
            <span>Designed To Scale.</span>
          </h2>
          <p>A glimpse of the platforms and systems we create for growth.</p>
        </div>

        <div className="projects-grid">
          <article className="project-card reveal">
            <div className="project-preview">
              <span>01</span>
              <div className="project-lines" />
            </div>
            <div className="project-content">
              <small>Corporate Website</small>
              <h3>Premium Brand Presence</h3>
              <p>A modern website experience designed to build trust, improve credibility, and convert visitors into opportunities.</p>
            </div>
          </article>

          <article className="project-card reveal">
            <div className="project-preview">
              <span>02</span>
              <div className="project-dashboard" />
            </div>
            <div className="project-content">
              <small>Business System</small>
              <h3>Smart Operations Dashboard</h3>
              <p>Internal dashboards and workflows that help teams monitor, manage, and automate business operations.</p>
            </div>
          </article>

          <article className="project-card reveal">
            <div className="project-preview">
              <span>03</span>
              <div className="project-mobile" />
            </div>
            <div className="project-content">
              <small>Mobile Experience</small>
              <h3>Application Interface</h3>
              <p>Clean app interfaces focused on usability, performance, and seamless digital customer journeys.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-bg-grid" />

        <div className="about-container">
          <div className="about-copy reveal">
            <p className="section-kicker">ABOUT QYRA</p>

            <h2>
              Built To Help Businesses
              <br />
              <span>Grow Smarter.</span>
            </h2>

            <p>
              QYRA Technologies is a digital solutions company helping businesses
              build modern websites, applications, systems, and data-driven experiences.
            </p>
          </div>

          <div className="about-cards">
            <article className="about-card reveal">
              <span>01</span>
              <h3>Strategy</h3>
              <p>We align solutions with clear business goals.</p>
            </article>

            <article className="about-card reveal">
              <span>02</span>
              <h3>Design</h3>
              <p>We craft clean digital experiences that feel premium.</p>
            </article>

            <article className="about-card reveal">
              <span>03</span>
              <h3>Technology</h3>
              <p>We build secure, scalable, and high-performing systems.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-bg-grid" />

        <div className="contact-container">
          <div className="contact-copy reveal">
            <p className="section-kicker">CONTACT US</p>

            <h2>
              Ready To Build
              <br />
              <span>Something Powerful?</span>
            </h2>

            <p>
              Tell us about your project, and we’ll help you turn your idea into a
              modern digital solution.
            </p>

            <div className="contact-info">
              <a href="mailto:info@qyratech.io">info@qyratech.io</a>
              <a href="tel:+966508344011">+966 508344011</a>
            </div>
          </div>

          <form className="contact-form reveal">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>

            <label>
              Email
              <input type="email" placeholder="your@email.com" />
            </label>

            <label>
              Project Type
              <select defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Corporate Website</option>
                <option>E-Commerce Solution</option>
                <option>UI / UX Design</option>
                <option>Business System</option>
                <option>Data Solution</option>
              </select>
            </label>

            <label>
              Message
              <textarea placeholder="Tell us about your project" rows={5} />
            </label>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <Image
            src="/images/logo-dark.png"
            alt="QYRA Technologies"
            width={180}
            height={70}
            className="footer-logo"
          />

          <p>© 2026 QYRA Technologies. All rights reserved.</p>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
      <a
  href="https://wa.me/966508344011"
  target="_blank"
  rel="noopener noreferrer"
  className="floating-support"
  aria-label="Chat with us"
>
  <Headset size={26} strokeWidth={2.2} />
  <span>Chat with us</span>
</a>
    </>
  );
}