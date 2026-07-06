import Link from "next/link";

const systems = [
  { name: "TPO Membrane", desc: "Energy-efficient, reflective single-ply roofing built for Florida heat and UV." },
  { name: "PVC Membrane", desc: "Chemical- and wind-resistant membrane ideal for restaurants and industrial sites." },
  { name: "EPDM", desc: "Durable rubber roofing with proven long-term performance on flat roofs." },
  { name: "Metal & Standing Seam", desc: "High-wind-rated metal systems engineered for hurricane country." },
  { name: "Roof Coatings", desc: "Restore and extend roof life with seamless reflective coating systems." },
  { name: "BUR / Mod-Bit", desc: "Time-tested multi-ply asphalt systems for heavy commercial demands." },
];

const stats = [
  { value: "40+", label: "Years of Roofing" },
  { value: "15+", label: "Markets Served" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "In-House Crews" },
];

const verticals = [
  "Hospitality", "Education", "Federal", "Multi-Family", "Aviation",
  "Retail", "Healthcare", "Warehousing & Logistics", "Manufacturing",
  "Food Processing", "Sports & Recreation", "Technology",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ideogram.ai/api/images/ephemeral/bAWSCH3pX12Xr109FwSoWw.png?exp=1783393242&sig=ffa3bdd6c6f9a9b50fbfdec0ffff62abb4906d2bf157e28b8bdca6bda971a418')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl animate-fadeUp">
            <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
              A JR&amp;CO Branch · Serving All of Florida
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
              Commercial Roofing Built for{" "}
              <span className="gradient-text">Florida Weather</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Four decades of industrial and commercial roofing expertise, now
              protecting Florida properties. Wind-rated systems, in-house crews,
              and a free, no-obligation roof inspection on every project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand-red px-7 py-3 font-semibold text-white transition hover:bg-red-600"
              >
                Get a Free Inspection
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/25 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Roof Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-brand-dark">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold gradient-text">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Systems */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Commercial Roof Systems We Install
          </h2>
          <p className="mt-4 text-white/60">
            From single-ply membranes to high-wind metal, we install and maintain
            the full range of commercial roofing systems trusted across Florida.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((sys) => (
            <div
              key={sys.name}
              className="glass group rounded-2xl p-8 transition hover:-translate-y-1 hover:border-brand-red/50"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-brand-red transition-all group-hover:w-16" />
              <h3 className="text-xl font-bold text-white">{sys.name}</h3>
              <p className="mt-3 text-sm text-white/60">{sys.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image band */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ideogram.ai/api/images/ephemeral/G67GRwJXU4KGllyRJIxc_Q.png?exp=1783393224&sig=c53eedb157fb50d94746e245a3375cd8c98909e7b7dfc54f7d4168b9999bb366')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Safety &amp; Quality You Can Trust
          </h2>
          <p className="mt-5 text-white/70">
            Our highly skilled in-house crews set us apart. With extensive
            training, dedicated on-site supervision, and daily quality control
            checks, we uphold the highest standards on every Florida job.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block rounded-full border border-white/25 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Why JR&amp;CO
          </Link>
        </div>
      </section>

      {/* Verticals */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Industries We Serve
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {verticals.map((v) => (
            <span
              key={v}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80"
            >
              {v}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass rounded-3xl px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Protect Your Property Before the Next Storm
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Schedule your free, no-obligation roof inspection and evaluation
            report today. No pressure, just a clear picture of your roof.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Request Service
          </Link>
        </div>
      </section>
    </>
  );
}
