import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <span className="text-xl font-extrabold text-white">
            JR<span className="text-brand-red">&amp;</span>CO Florida
          </span>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Industrial and commercial roofing across Florida. Four decades of
            craftsmanship, backed by the JR&amp;CO name.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>TPO &amp; PVC Membrane</li>
            <li>Metal &amp; Standing Seam</li>
            <li>Roof Coatings</li>
            <li>Repair &amp; Maintenance</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>833-JRCO-USA</li>
            <li>info@commercialroofingflorida.net</li>
            <li>Serving Orlando, Tampa,<br />Fort Myers &amp; Tallahassee</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Commercial Roofing Florida — a JR&amp;CO branch. All rights reserved.
      </div>
    </footer>
  );
}
