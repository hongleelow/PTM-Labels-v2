import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "PTM Labels manufactures custom labels for food & beverage, pharmaceuticals, cosmetics, and logistics industries. ISO-certified quality for every sector.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ptm-navy py-section-sm">
        <div className="container-main">
          <SectionHeading
            dark
            label="Industries"
            title="Labels Built for Your Industry"
            description="Every industry has unique labelling requirements. We match the right materials, adhesives, and printing methods to your specific needs."
          />
        </div>
      </section>

      {/* Industry Details */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          className={`section-padding-sm ${
            index % 2 === 0 ? "bg-white" : "bg-ptm-ice"
          }`}
        >
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Column 1: Overview */}
              <div>
                <h2 className="text-display-md font-bold text-ptm-navy mb-4">
                  {industry.name}
                </h2>
                <p className="text-body-lg text-ptm-slate-light mb-6">
                  {industry.description}
                </p>

                <h3 className="text-heading-sm font-semibold text-ptm-navy mb-3">
                  Key requirements:
                </h3>
                <ul className="space-y-2 mb-8">
                  {industry.needs.map((need) => (
                    <li
                      key={need}
                      className="flex items-start gap-2 text-body-md text-ptm-slate"
                    >
                      <span className="text-ptm-blue mt-1 shrink-0">
                        &bull;
                      </span>
                      {need}
                    </li>
                  ))}
                </ul>

                <Button variant="secondary" href="/quote">
                  Get a Quote
                </Button>
              </div>

              {/* Column 2: Label Types & Considerations */}
              <div>
                <h3 className="text-heading-sm font-semibold text-ptm-navy mb-3">
                  Label types we provide:
                </h3>
                <ul className="space-y-2 mb-8">
                  {industry.labelTypes.map((labelType) => (
                    <li
                      key={labelType}
                      className="bg-ptm-ice rounded-button px-4 py-2 text-body-md text-ptm-navy font-medium inline-block mr-2 mb-2"
                    >
                      {labelType}
                    </li>
                  ))}
                </ul>

                <h3 className="text-heading-sm font-semibold text-ptm-navy mb-3">
                  Important considerations:
                </h3>
                <ul className="space-y-2">
                  {industry.considerations.map((consideration) => (
                    <li
                      key={consideration}
                      className="flex items-start gap-2 text-body-md text-ptm-slate"
                    >
                      <span className="text-ptm-accent mt-1 shrink-0">
                        &bull;
                      </span>
                      {consideration}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-ptm-navy section-padding-sm">
        <div className="container-main text-center">
          <h2 className="text-display-md font-bold text-white mb-4">
            Don&apos;t see your industry?
          </h2>
          <p className="text-body-lg text-ptm-gray mb-8">
            We work across sectors. Tell us about your requirements.
          </p>
          <Button variant="primary" href="/contact">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
