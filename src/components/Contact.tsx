import React, { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Twitter, Send, CheckCircle2, Phone } from "lucide-react";
import Reveal from "./Reveal";

// Placeholder for your Web3Forms Access Key
// REMINDER: Make sure to replace this with your actual Web3Forms Access Key from https://web3forms.com
const ACCESS_KEY = "b20fe9f6-d92a-4656-8842-2ae798ed97e3";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully directly to Femi.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Failed to transmit message. Please confirm your Web3Forms Access Key is active.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please check your network connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const nameMap: Record<string, string> = {
      "user-name": "name",
      "user-email": "email",
      "user-message": "message"
    };
    const fieldName = nameMap[id] || id;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/webkingif",
      icon: Github,
      label: "webkingif on GitHub",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/femi-idowu-3472ab324",
      icon: Linkedin,
      label: "Idowu Oluwafemi Femi on LinkedIn",
    },
    {
      name: "Twitter / X",
      href: "https://x.com/Webkingif",
      icon: Twitter,
      label: "webkingif on Twitter / X",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-cleanWhite dark:bg-[#0F172A] border-t border-gray-100 dark:border-slate-805 scroll-mt-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Title Section */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primaryDark dark:text-cleanWhite">
              Get In Touch
            </h2>
            <div className="h-1.5 w-16 bg-accentBlue mx-auto rounded-full"></div>
            <p className="text-mutedGray dark:text-gray-400 font-sans text-base sm:text-lg">
              Let's build something exceptional together. Reach out for projects, collaboration, or job opportunities.
            </p>
          </div>
        </Reveal>

        {/* 2-Column Responsive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Direct contact details and brand socials */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <Reveal delay={0.15}>
              <div className="space-y-8 lg:pr-8">
                <div className="space-y-4">
                  <h3 className="font-display font-extrabold text-2xl text-primaryDark dark:text-cleanWhite">
                    Let's Connect
                  </h3>
                  <p className="text-mutedGray dark:text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
                    I am ready to help amplify your digital project under the brand <strong className="text-primaryDark dark:text-cleanWhite">Webkingif</strong>. Reach out through any of these communication platforms, or use the direct contact form.
                  </p>
                </div>

                {/* Direct Contact Media Nodes */}
                <div className="space-y-4">
                  <a
                    id="contact-email-link"
                    href="mailto:webkingif@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-slate-800 bg-neutralLight dark:bg-[#1E293B] hover:border-accentBlue/30 dark:hover:border-accentBlue/40 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div className="h-11 w-11 bg-accentBlue/10 dark:bg-accentBlue/20 text-accentBlue dark:text-sky-400 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-mutedGray dark:text-gray-450 tracking-wider">Email Me Direct</div>
                      <div className="text-sm font-semibold text-primaryDark dark:text-cleanWhite font-mono">webkingif@gmail.com</div>
                    </div>
                  </a>

                  <div
                    id="contact-location-node"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-105 dark:border-slate-800 bg-neutralLight dark:bg-[#1E293B]"
                  >
                    <div className="h-11 w-11 bg-accentBlue/10 dark:bg-accentBlue/20 text-accentBlue dark:text-sky-400 rounded-xl flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-mutedGray dark:text-gray-450 tracking-wider">Workplace Location</div>
                      <div className="text-sm font-semibold text-primaryDark dark:text-cleanWhite font-sans">Lagos, Nigeria / Remote</div>
                    </div>
                  </div>

                  <div
                    id="contact-workrange-node"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-105 dark:border-slate-800 bg-neutralLight dark:bg-[#1E293B]"
                  >
                    <div className="h-11 w-11 bg-accentBlue/10 dark:bg-accentBlue/20 text-accentBlue dark:text-sky-400 rounded-xl flex items-center justify-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-mutedGray dark:text-gray-450 tracking-wider">Availability Timeline</div>
                      <div className="text-sm font-semibold text-primaryDark dark:text-cleanWhite font-sans">Full-time, Contract, Advisory</div>
                    </div>
                  </div>
                </div>

                {/* Premium Social Media Icons Links */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-mutedGray dark:text-gray-400">Find Me Online</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          id={`contact-social-btn-${social.name.toLowerCase().replace(/\s+/g, "-")}`}
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.label}
                          className="h-11 w-11 rounded-xl bg-neutralLight dark:bg-[#1E293B] border border-gray-150 dark:border-slate-800 flex items-center justify-center text-mutedGray dark:text-gray-400 hover:text-cleanWhite hover:bg-accentBlue hover:border-accentBlue active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accentBlue/40 cursor-pointer"
                        >
                          <IconComponent className="h-5 w-5" />
                        </a>
                      );
                    })}

                  </div>
                  <div>
                    <a
                      href="https://wa.me/2348085604124"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5  "
                    >
                      <img src="/chatonwhatsapp.png" alt="contact us on whatsapp" className="max-w-44" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Custom Interactive Form */}
          <div className="lg:col-span-7 w-full">
            <Reveal delay={0.25}>
              <div className="bg-neutralLight dark:bg-[#1E293B] p-6 sm:p-10 rounded-2xl border border-gray-150 dark:border-slate-800 shadow-sm relative overflow-hidden transition-colors">

                <form id="direct-contact-webform" onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Name field */}
                    <div className="space-y-2">
                      <label htmlFor="user-name" className="text-[10px] uppercase tracking-wider font-bold text-mutedGray dark:text-gray-400 block">
                        Your Name
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Idowu Oluwafemi"
                        disabled={isSubmitting}
                        className="w-full bg-cleanWhite dark:bg-[#11161B] border border-gray-250 dark:border-slate-800 focus:border-accentBlue focus:ring-1 focus:ring-accentBlue rounded-xl px-4 py-3 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm font-sans text-primaryDark dark:text-cleanWhite focus:outline-none transition-all duration-150 disabled:bg-gray-50 disabled:opacity-50 dark:disabled:bg-slate-900"
                      />
                    </div>

                    {/* Email address field */}
                    <div className="space-y-2">
                      <label htmlFor="user-email" className="text-[10px] uppercase tracking-wider font-bold text-mutedGray dark:text-gray-400 block">
                        Email Address
                      </label>
                      <input
                        id="user-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@domain.com"
                        disabled={isSubmitting}
                        className="w-full bg-cleanWhite dark:bg-[#11161B] border border-gray-250 dark:border-slate-800 focus:border-accentBlue focus:ring-1 focus:ring-accentBlue rounded-xl px-4 py-3 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm font-sans text-primaryDark dark:text-cleanWhite focus:outline-none transition-all duration-150 disabled:bg-gray-50 disabled:opacity-50 dark:disabled:bg-slate-900"
                      />
                    </div>

                  </div>

                  {/* Message text environment */}
                  <div className="space-y-2">
                    <label htmlFor="user-message" className="text-[10px] uppercase tracking-wider font-bold text-mutedGray dark:text-gray-450 block text-left">
                      Detailed Message
                    </label>
                    <textarea
                      id="user-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can Femi help bring your vision to life under Webkingif?"
                      disabled={isSubmitting}
                      className="w-full bg-cleanWhite dark:bg-[#11161B] border border-gray-250 dark:border-slate-800 focus:border-accentBlue focus:ring-1 focus:ring-accentBlue rounded-xl px-4 py-3 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm font-sans text-primaryDark dark:text-cleanWhite focus:outline-none transition-all duration-150 resize-none disabled:bg-gray-50 disabled:opacity-50 dark:disabled:bg-slate-900"
                    ></textarea>
                  </div>

                  {/* Status message rendered directly below the form fields */}
                  {status.type !== "idle" && (
                    <div
                      id="contact-status-feedback"
                      className={`p-4 rounded-xl text-sm font-sans font-medium text-left transition-all duration-200 ${status.type === "success"
                        ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-405 border border-emerald-100 dark:border-emerald-900/30"
                        : "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-405 border border-red-100 dark:border-red-900/30"
                        }`}
                    >
                      <div className="flex items-start gap-2.5">
                        {status.type === "success" ? (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                        ) : (
                          <span className="text-lg shrink-0 mt-0.5">⚠️</span>
                        )}
                        <span>{status.message}</span>
                      </div>
                    </div>
                  )}

                  {/* Submit button layout with loading state */}
                  <button
                    id="contact-form-submit-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accentBlue hover:bg-accentBlue/90 active:scale-[0.98] disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed text-cleanWhite px-6 py-3.5 rounded-xl font-sans font-bold text-sm shadow-md shadow-accentBlue/20 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-cleanWhite/30 border-t-cleanWhite rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                </form>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
