"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "darrell2645@gmail.com",
    href: "mailto:darrell2645@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
    href: "",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let&apos;s Work <span>Together</span>
          </h2>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {/* Left: Info */}
          <div className={styles.infoCol}>
            <h3 className={styles.infoHeading}>
              Have a project in mind?
            </h3>
            <p className={styles.infoDesc}>
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let&apos;s build something
              amazing together.
            </p>

            <div className={styles.contacts}>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>{label}</span>
                    <span className={styles.contactValue}>{value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Decorative */}
            <div className={styles.decorBox}>
              <div className={styles.decorLine} />
              <span className={styles.decorText}>Ready to start?</span>
              <div className={styles.decorLine} />
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Asep Mekanik"
                    className={styles.input}
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="asep@example.com"
                    className={styles.input}
                    required
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-subject" className={styles.label}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project discussion"
                  className={styles.input}
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${styles.input} ${styles.textarea}`}
                  rows={6}
                  required
                  disabled={status === "loading"}
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className={`${styles.alert} ${styles.alertSuccess}`}>
                  <CheckCircle size={18} />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className={`${styles.alert} ${styles.alertError}`}>
                  <AlertCircle size={18} />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className={styles.spinner} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
