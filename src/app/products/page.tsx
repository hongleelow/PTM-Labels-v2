import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  products,
  printingTechnologies,
  finishingOptions,
} from "@/data/products";

export const metadata = {
  title: "Products & Capabilities",
  description:
    "Explore PTM Labels' full range of label types, printing technologies, and finishing options. Self-adhesive labels, shrink sleeves, flexographic and digital printing, all under one roof.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-ptm-navy py-section-sm">
        <div className="container-main">
          <SectionHeading
            dark
            label="Products & Capabilities"
            title="Every Label Type, Printing Method, and Finishing Option — Under One Roof"
          />
          <p className="text-body-lg text-ptm-gray text-center max-w-2xl mx-auto -mt-8">
            From self-adhesive labels to shrink sleeves, flexographic to digital
            printing, with inline finishing and automated quality control.
          </p>
        </div>
      </section>

      {/* Section 2: Label Types */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            label="Label Types"
            title="The Right Label for Every Application"
            align="left"
          />

          <div className="space-y-0">
            {products.map((product, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={product.id}
                  className={`py-12 ${
                    index !== products.length - 1
                      ? "border-b border-ptm-gray-light"
                      : ""
                  }`}
                >
                  <div
                    className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Side */}
                    <div className="flex-1">
                      <h3 className="text-display-md font-bold text-ptm-navy mb-4">
                        {product.name}
                      </h3>
                      <p className="text-body-lg text-ptm-slate-light mb-6">
                        {product.description}
                      </p>

                      <div className="mb-6">
                        <p className="font-semibold text-ptm-navy mb-2">
                          Best for:
                        </p>
                        <ul className="space-y-1.5">
                          {product.bestFor.map((item) => (
                            <li
                              key={item}
                              className="text-body-md text-ptm-slate-light flex items-start gap-2"
                            >
                              <span className="text-ptm-blue mt-0.5">
                                &bull;
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.industries.map((industry) => (
                          <span
                            key={industry}
                            className="inline-block px-3 py-1 text-body-sm font-medium text-ptm-blue bg-ptm-ice rounded-full"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>

                      <Button variant="ghost" href="/quote">
                        Get a Quote for This
                      </Button>
                    </div>

                    {/* Placeholder Side */}
                    <div className="flex-1 w-full">
                      <div className="bg-ptm-ice rounded-card-lg aspect-video flex items-center justify-center">
                        <span className="text-ptm-gray text-body-lg">
                          Product Image
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Printing Technologies */}
      <section className="bg-ptm-ice section-padding">
        <div className="container-main">
          <SectionHeading
            label="Printing Technologies"
            title="Matched to Your Run Length and Finish"
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {printingTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-card-lg shadow-card p-8"
              >
                <h3 className="text-heading-lg font-bold text-ptm-navy mb-3">
                  {tech.name}
                </h3>
                <p className="text-body-md text-ptm-slate-light mb-5">
                  {tech.description}
                </p>
                <p className="font-semibold text-ptm-blue text-body-md mb-3">
                  Best for: {tech.bestFor}
                </p>
                <ul className="space-y-2">
                  {tech.specs.map((spec) => (
                    <li
                      key={spec}
                      className="text-body-md text-ptm-slate-light flex items-start gap-2"
                    >
                      <span className="text-ptm-blue font-bold mt-0.5">
                        &#10003;
                      </span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Finishing Options */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <SectionHeading
            label="Finishing Options"
            title="Premium Finishes for Shelf Impact"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {finishingOptions.map((option) => (
              <div
                key={option.id}
                className="border border-ptm-gray-light rounded-card p-6 hover:border-ptm-blue transition"
              >
                <h3 className="text-heading-sm font-bold text-ptm-navy mb-2">
                  {option.name}
                </h3>
                <p className="text-body-sm text-ptm-slate-light">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-ptm-blue section-padding-sm">
        <div className="container-main text-center">
          <h2 className="text-display-md font-bold text-white mb-4">
            Not sure which label type or printing method suits your product?
          </h2>
          <p className="text-body-lg text-white/80 mb-8">
            Our team will help you choose the right combination.
          </p>
          <Button variant="primary" href="/quote">
            Talk to Our Team
          </Button>
        </div>
      </section>
    </>
  );
}
