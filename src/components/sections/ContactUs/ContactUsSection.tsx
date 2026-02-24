"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import FadeInAnimation from "@/components/ui/FadeInAnimation";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const ContactUsSection = () => {
  // state of the form is empty here
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // state for submission status
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // handle input on change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields.");
      }

      // form api endpoint
      const FORM_API_ENDPOINT = "https://formspree.io/f/mzbnnlrv";

      // api endpoint
      const response = await fetch(`${FORM_API_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });

        // reset the success message after 10 seconds
        setTimeout(() => setStatus("idle"), 10000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 10000);
    }
  };

  return (
    <main className="w-full lg:max-h-[60rem] bg-white">
      <div className="max-w-[90rem] mx-auto px-4 pt-32 pb-20 lg:pt-40">
        <FadeInAnimation>
          <div className="flex flex-col items-center justify-center mb-16 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl text-brand-navy">
              Contact Us
            </h1>
            <p className="max-w-2xl font-medium text-md text-slate-600">
              Kindly direct all complaints & enquiries to our team of competent
              executives for prompt assistance.
            </p>
          </div>
        </FadeInAnimation>

        <FadeInAnimation stagger={0.1}>
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-semibold text-brand-navy"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 transition-all border rounded-lg outline-none border-slate-200 placeholder:text-slate-300 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-semibold text-brand-navy"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your e-mail address"
                    className="w-full px-4 py-3 transition-all border rounded-lg outline-none border-slate-200 placeholder:text-slate-300 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="font-semibold text-brand-navy"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter the subject"
                  className="w-full px-4 py-3 transition-all border rounded-lg outline-none border-slate-200 placeholder:text-slate-300 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-semibold text-brand-navy"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Start typing here"
                  className="w-full px-4 py-3 transition-all border rounded-lg outline-none resize-none border-slate-200 placeholder:text-slate-300 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                />
              </div>

              {/* status message */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-4 text-green-700 border border-green-200 rounded-lg bg-green-50">
                  <CheckCircle size={20} />
                  <span>
                    Message sent successfully! We will get back to you soon.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-4 text-red-700 border border-red-200 rounded-lg bg-red-50">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}

              <div className="mt-4">
                <Button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  size="lg"
                  className="w-full px-10 py-6 text-lg font-semibold text-white rounded-lg shadow-lg bg-brand-navy hover:bg-brand-navy/90 md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" /> Sending...
                    </span>
                  ) : status === "success" ? (
                    "Sent!"
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </FadeInAnimation>
      </div>
    </main>
  );
};

export default ContactUsSection;
