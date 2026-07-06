"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="px-6 pt-36 pb-12">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            Get In Touch
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Request Your Free Roof Inspection
          </h1>
          <p className="mt-6 max-w-2xl text-white/60">
            Tell us about your property and we'll schedule a free, no-obligation
            inspection and evaluation report anywhere in Florida.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {sent ? (
              <div className="glass rounded-2xl p-10 text-center">
                <h3 className="text-2xl font-bold text-white">Thank you!</h3>
                <p className="mt-3 text-white/60">
                  Your request has been received. Our team will reach out within
                  one business day to schedule your inspection.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="glass rounded-2xl p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-white/70">Full Name</label>
                    <input required className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-white/70">Company</label>
                    <input className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-white/70">Email</label>
                    <input required type="email" className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-white/70">Phone</label>
                    <input type="tel" className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/70">Property Location</label>
                    <input className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" placeholder="City, FL" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm text-white/70">How can we help?</label>
                    <textarea rows={4} className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-brand-red px-8 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Request Free Inspection
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">Call Us</h3>
              <p className="mt-2 text-lg font-bold text-white">833-JRCO-USA</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">Email</h3>
              <p className="mt-2 text-white/80">info@commercialroofingflorida.net</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">Service Area</h3>
              <p className="mt-2 text-white/80">Orlando · Tampa · Fort Myers · Tallahassee · statewide Florida</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">Emergency Service</h3>
              <p className="mt-2 text-white/80">24/7 storm and leak response</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
