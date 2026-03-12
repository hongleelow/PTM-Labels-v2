import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Facilities & Technology",
  description:
    "Explore PTM Labels' advanced manufacturing facility in Johor. Flexographic, digital, and letterpress printing with automated quality inspection on every run.",
};

const capabilities = [
  {
    id: "flexographic",
    title: "Flexographic Printing",
    description:
      "Three 9-color flexographic presses form the backbone of our production. Each press handles inline cold/hot foil stamping, laminating, and die-cutting in a single pass \u2014 reducing handling and improving consistency.",
    specs: [
      "3 x 9-color stations",
      "Water-based and UV inks",
      "Inline finishing (foil, laminate, die-cut)",
      "Ideal for runs of 10,000+ labels",
    ],
  },
  {
    id: "digital",
    title: "Digital Printing",
    description:
      "Our Screen Truepress Jet L350UV+ handles short runs without plate costs. CMYK plus White and Orange inks deliver up to 90% Pantone gamut coverage at speeds up to 60m/min.",
    specs: [
      "No plate or tooling costs",
      "CMYK + White + Orange",
      "90% Pantone coverage",
      "Ideal for runs under 10,000 labels",
    ],
  },
  {
    id: "letterpress",
    title: "Letterpress",
    description:
      "Intermittent-feed letterpress for specialty work requiring complex multi-process printing, embossing, and hot foil stamping with lower tooling costs.",
    specs: [
      "Multi-process inline",
      "Hot foil stamping",
      "Embossing/debossing",
      "Lower tooling costs",
    ],
  },
];

const qualityPoints = [
  {
    title: "Inline Inspection",
    description: "Real-time defect detection during printing",
  },
  {
    title: "Automated Stops",
    description: "Rewinder stops automatically at defect points",
  },
  {
    title: "Colour Consistency",
    description: "On-site ink kitchen with densitometer for Pantone matching",
  },
];

const supportSystems = [
  {
    title: "Ink Kitchen",
    description:
      "On-site colour matching facility with densitometer ensuring every print matches international Pantone standards. We mix and verify colours before production begins.",
  },
  {
    title: "Environmental Systems",
    description:
      "Fully automated vacuum waste handling reduces energy costs and improves worker safety. Water-based inks and ISO 14001 practices minimize environmental impact.",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-ptm-navy py-section-sm">
        <div className="container-main">
          <SectionHeading
            dark
            label="Facilities"
            title="Advanced Manufacturing, Rigorous Quality Control"
          />
          <p className="text-body-lg text-ptm-gray text-center max-w-2xl mx-auto -mt-8">
            Our Johor facility runs 24/7 with flexographic, digital, and
            letterpress lines &mdash; backed by automated inspection on every
            run.
          </p>
        </div>
      </section>

      {/* Section 2: Production Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            label="Production Floor"
            title="What Our Factory Can Do For You"
            align="left"
          />

          <div className="space-y-0">
            {capabilities.map((cap, index) => (
              <div
                key={cap.id}
                className={`pb-12 mb-12 ${
                  index !== capabilities.length - 1
                    ? "border-b border-ptm-gray-light"
                    : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left: Heading + Description */}
                  <div>
                    <h3 className="text-heading-lg font-bold text-ptm-navy mb-4">
                      {cap.title}
                    </h3>
                    <p className="text-body-lg text-ptm-slate-light">
                      {cap.description}
                    </p>
                  </div>

                  {/* Right: Specs List */}
                  <div>
                    <ul className="space-y-3">
                      {cap.specs.map((spec) => (
                        <li
                          key={spec}
                          className="text-body-md text-ptm-slate flex items-start gap-3"
                        >
                          <span className="text-ptm-blue font-bold mt-0.5">
                            &#10003;
                          </span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Quality Systems */}
      <section className="bg-ptm-ice section-padding-sm">
        <div className="container-main">
          <SectionHeading
            label="Quality Assurance"
            title="Defect Detection on Every Run"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Description */}
            <div>
              <p className="text-body-lg text-ptm-slate-light">
                Every print run passes through our AVT automated defect
                detection system. The system identifies print defects in
                real-time and automatically stops the rewinder at defect
                locations &mdash; ensuring only inspected, verified labels reach
                your facility.
              </p>
            </div>

            {/* Right: Quality Points */}
            <div className="space-y-6">
              {qualityPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-white rounded-card p-6 shadow-card"
                >
                  <h4 className="text-heading-sm font-bold text-ptm-navy mb-2">
                    {point.title}
                  </h4>
                  <p className="text-body-md text-ptm-slate-light">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Support Systems */}
      <section className="bg-white section-padding-sm">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportSystems.map((system) => (
              <div
                key={system.title}
                className="bg-ptm-ice rounded-card-lg p-8"
              >
                <h3 className="text-heading-lg font-bold text-ptm-navy mb-4">
                  {system.title}
                </h3>
                <p className="text-body-md text-ptm-slate-light">
                  {system.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-ptm-navy section-padding-sm">
        <div className="container-main text-center">
          <h2 className="text-display-md font-bold text-white mb-8">
            See How We Can Handle Your Project
          </h2>
          <Button variant="primary" href="/quote">
            Request a Quote
          </Button>
        </div>
      </section>
    </>
  );
}
