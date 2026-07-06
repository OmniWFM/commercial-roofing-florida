import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Roofing Services",
  description:
    "TPO, PVC, EPDM, metal, coatings and BUR/Mod-Bit commercial roofing systems across Florida. Installation, repair and maintenance from JR&CO's Florida branch.",
};

const services = [
  {
    name: "TPO Membrane",
    desc: "A reflective, energy-efficient single-ply system that reduces cooling costs and stands up to Florida's intense sun and UV exposure.",
    img: "https://ideogram.ai/api/images/ephemeral/G67GRwJXU4KGllyRJIxc_Q.png?exp=1783393224&sig=c53eedb157fb50d94746e245a3375cd8c98909e7b7dfc54f7d4168b9999bb366",
  },
  {
    name: "PVC Membrane",
    desc: "Superior chemical and wind resistance, making it the go-to choice for restaurants, hospitals and industrial facilities with rooftop exhaust.",
    img: "https://ideogram.ai/api/images/ephemeral/QXdQgjGCVY2UqwrhkTFObQ.png?exp=1783393224&sig=c1ef5277b6f865abb8dc00c1564e2af5867d05fdbbd35d0f8e2f7c6352ec6521",
  },
  {
    name: "Metal & Standing Seam",
    desc: "High-wind-rated metal roof systems engineered for hurricane country, delivering decades of durability and a clean architectural finish.",
    img: "https://ideogram.ai/api/images/ephemeral/rvar0TrcW36ITU-FL5xyyw.png?exp=1783393224&sig=209d73dfdadf0a2ea753c3f5e6fc3943c30fc6806414f15a89ea9563a7e9033b",
  },
  {
    name: "Roof Coatings & Restoration",
    desc: "Seamless reflective coating systems that restore aging roofs, stop leaks and extend service life without a full tear-off.",
    img: "https://ideogram.ai/api/images/ephemeral/wZ6PBlceVkeLC-FoMQlzlA.png?exp=1783393224&sig=e315f844b6690508691df25b2cceb8faefa92c11041be96d8aae59c1ef413116",
  },
];

const extras = [
  { name: "EPDM Rubber Roofing", desc: "Proven long-term performance for large flat commercial roofs." },
  { name: "BUR / Mod-Bit", desc: "Multi-ply asphalt systems built for heavy-duty commercial demands." },
  { name: "Repair & Service", desc: "Fast leak repairs and emergency response, 24/7 across Florida." },
  { name: "Preventative Maintenance", desc: "Scheduled inspections and upkeep to maximize roof lifespan." },
];

export default function Services() {
  return (
    <>
      <section className="px-6 pt-36 pb-16">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            Our Capabilities
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
            Commercial &amp; Industrial Roofing Systems
          </h1>
          <p className="mt-6 max-w-2xl text-white/60">
            JR&amp;CO is certified in installing, repairing and maintaining a wide
            range of commercial roof systems. Every project starts with a free,
            no-obligation inspection and evaluation report.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.name} className="glass overflow-hidden rounded-2xl">
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${s.img}')` }}
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">{s.name}</h3>
                <p className="mt-3 text-white/60">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-white">More Services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {extras.map((e) => (
            <div key={e.name} className="glass rounded-2xl p-6">
              <div className="mb-4 h-1 w-10 rounded-full bg-brand-red" />
              <h3 className="text-lg font-bold text-white">{e.name}</h3>
              <p className="mt-2 text-sm text-white/60">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass rounded-3xl px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Not Sure Which System You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Our team will assess your building and recommend the right roofing
            solution for your budget, timeline and Florida's climate.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            Book Your Free Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
