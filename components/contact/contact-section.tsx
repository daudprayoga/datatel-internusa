"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
    website_url: "", // Honeypot
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatusMessage(null)

    // Validation
    if (!formData.name.trim()) {
      setStatusMessage({ type: "error", text: "Please enter your name." })
      return
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatusMessage({ type: "error", text: "Please provide a valid email address." })
      return
    }
    if (!formData.subject) {
      setStatusMessage({ type: "error", text: "Please select a subject." })
      return
    }
    if (!formData.message.trim()) {
      setStatusMessage({ type: "error", text: "Please enter your message." })
      return
    }
    if (!formData.agree) {
      setStatusMessage({ type: "error", text: "You must agree to terms and policy before submitting." })
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
          website_url: formData.website_url,
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          agree: false,
          website_url: "",
        })
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Failed to send message. Please try again or contact us directly.",
        })
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
      setStatusMessage({
        type: "error",
        text: "A network error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="wrapper bg-light py-14 py-md-16 bg-slate-50/60">
      <div className="container py-14 py-md-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="row">
          <div className="col-xl-10 mx-auto max-w-6xl">
            <div className="row gy-10 gx-lg-8 gx-xl-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              
              {/* Left Column: Form */}
              <div className="col-lg-8 lg:col-span-8">
                <form
                  className="contact-form needs-validation"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Honeypot field for bot spam prevention */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website_url}
                      onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                    />
                  </div>

                  {/* Feedback Message */}
                  {statusMessage && (
                    <div className="messages mb-6">
                      <div
                        className={`p-4 rounded-xl flex items-start gap-3 text-sm ${
                          statusMessage.type === "success"
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : "bg-rose-50 text-rose-800 border border-rose-200"
                        }`}
                      >
                        {statusMessage.type === "success" ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <div>{statusMessage.text}</div>
                      </div>
                    </div>
                  )}

                  <div className="row gx-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Your Name */}
                    <div className="col-md-6 sm:col-span-1">
                      <div className={`form-floating mb-4 ${formData.name ? "has-value" : ""}`}>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                        <label htmlFor="form_name">Your Name *</label>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6 sm:col-span-1">
                      <div className={`form-floating mb-4 ${formData.email ? "has-value" : ""}`}>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="jane.doe@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                        <label htmlFor="form_email">Email *</label>
                      </div>
                    </div>

                    {/* Subject Dropdown */}
                    <div className="col-12 sm:col-span-2">
                      <div className="form-select-wrapper mb-4">
                        <select
                          className={`form-select ${!formData.subject ? "text-[#95aac9]" : "text-[#343f52]"}`}
                          id="form-select"
                          name="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        >
                          <option value="" disabled className="text-[#95aac9]">
                            Select a subject *
                          </option>
                          <option value="Business Development" className="text-[#343f52]">
                            Business Development
                          </option>
                          <option value="Information" className="text-[#343f52]">
                            Information
                          </option>
                          <option value="Support" className="text-[#343f52]">
                            Support
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="col-12 sm:col-span-2">
                      <div className={`form-floating mb-4 ${formData.message ? "has-value" : ""}`}>
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Your message"
                          style={{ height: "160px" }}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                        <label htmlFor="form_message">Message *</label>
                      </div>
                    </div>

                    {/* Terms & Policy Checkbox */}
                    <div className="col-12 sm:col-span-2">
                      <div className="form-check mb-5 flex items-center gap-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="invalidCheck"
                          checked={formData.agree}
                          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                          required
                        />
                        <label className="form-check-label text-sm text-[#60697b]" htmlFor="invalidCheck">
                          I agree to{" "}
                          <a href="/terms" className="hover text-[#3f78e0] underline">
                            terms and policy
                          </a>
                          .
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 sm:col-span-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary rounded-pill btn-send mb-3 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3f78e0] hover:bg-[#3264c1] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all disabled:opacity-60 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending message...</span>
                          </>
                        ) : (
                          <span>Send message</span>
                        )}
                      </button>
                      <p className="text-muted text-xs text-[#aab0bc]">
                        <strong className="text-rose-500">*</strong> These fields are required.
                      </p>
                    </div>

                  </div>
                </form>
              </div>

              {/* Right Column: Contact Info */}
              <div className="col-lg-4 lg:col-span-4 space-y-7 pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200/80 lg:pl-10">
                
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#eaf2fc] text-[#3f78e0] flex items-center justify-center shrink-0 shadow-xs border border-[#3f78e0]/15 group-hover:bg-[#3f78e0] group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5 text-[#3f78e0] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="mb-1 text-base font-bold text-[#343f52]">Address</h5>
                    <address className="not-italic text-sm text-[#60697b] leading-relaxed">
                      Jl. Penjernihan I No.30<br />
                      Bendungan Hilir, Jakarta 10210<br />
                      Indonesia
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#eaf2fc] text-[#3f78e0] flex items-center justify-center shrink-0 shadow-xs border border-[#3f78e0]/15 group-hover:bg-[#3f78e0] group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5 text-[#3f78e0] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="mb-1 text-base font-bold text-[#343f52]">Phone</h5>
                    <p className="text-sm text-[#60697b] leading-relaxed">
                      <a href="tel:+622157901453" className="hover:text-[#3f78e0] transition-colors font-medium">
                        +62 21 5790 1453
                      </a>
                      <br />
                      <span className="text-[#60697b]">+62 21 5790 2213 (Fax)</span>
                    </p>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#eaf2fc] text-[#3f78e0] flex items-center justify-center shrink-0 shadow-xs border border-[#3f78e0]/15 group-hover:bg-[#3f78e0] group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5 text-[#3f78e0] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h5 className="mb-1 text-base font-bold text-[#343f52]">E-mail</h5>
                    <p className="mb-0 text-sm text-[#60697b]">
                      <a
                        href="mailto:sales@datatel-internusa.com"
                        className="hover:text-[#3f78e0] transition-colors font-medium"
                      >
                        sales@datatel-internusa.com
                      </a>
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
