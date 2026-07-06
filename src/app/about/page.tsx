import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Commercial Roofing Florida is the Florida branch of JR&CO, a commercial roofing contractor with more than four decades of experience and in-house crews across 15+ markets.",
};

const values = [
  { title: "Four Decades of Experience", desc: "JR&CO has installed roofs across nearly every market sector for over 40 years, bringing that depth of experience to Florida." },
  { title: "In-House Crews", desc: "We never subcontract the work that matters. Our trained, supervised crews handle every project start to finish." },
  { title: "Safety First", desc: "Daily quality control checks, on-site supervision and rigorous safety training keep every job site protected." },
  { title: "Built for Florida", desc: "Wind-rated systems and storm-ready service designed specifically for hurricanes, heat and heavy rain." },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-36 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ideogram.ai/api/images/ephemeral/rvar0TrcW36ITU-FL5xyyw.png?exp=1783393224&sig=209d73dfdadf0a2ea753c3f5e6fc3943c30fc6806414f15a89ea9563a7e9033b')",
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            About Us
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            The JR&amp;CO Name, Now in Florida
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            With more than four decades of experience installing roofs across
            diverse market sectors, our team is skilled and prepared to deliver
            the best value and solutions — no matter how complex the project.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Our Story</h2>
            <p className="mt-5 text-white/60">
              JR&amp;CO built its reputation as a commercial roofing leader across
              the Midwest and beyond, serving markets from Omaha and Kansas City
              to Fort Myers, Orlando and Tallahassee. Commercial Roofing Florida
              extends that same craftsmanship and reliability to businesses
              throughout the Sunshine State.
            </p>
            <p className="mt-4 text-white/60">
              Choosing the right commercial roofer is crucial to avoid costly
              interior and exterior damage. Our expertise across every major
              roofing system ensures your property is protected with durable,
              high-performance solutions.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-6">
                <div className="mb-4 h-1 w-10 rounded-full bg-brand-red" />
                <h3 className="text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-white/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass rounded-3xl px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Let's Talk About Your Roof
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Partner with a roofing team that treats your property like their own.
            Reach out for a free inspection anywhere in Florida.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
