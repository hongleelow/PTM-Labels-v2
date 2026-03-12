import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/ui/StaggerGroup";

const processSteps = [
  {
    number: 1,
    name: "Brief",
    description:
      "Share your requirements and we'll recommend the right approach",
  },
  {
    number: 2,
    name: "Design",
    description:
      "Our studio develops your artwork or refines your supplied designs",
  },
  {
    number: 3,
    name: "Proof",
    description: "Review a printed proof before full production begins",
  },
  {
    number: 4,
    name: "Print",
    description:
      "Production on our flexo, digital, or letterpress lines with inline QC",
  },
  {
    number: 5,
    name: "Deliver",
    description:
      "Packed, inspected, and shipped to your facility nationwide",
  },
];

const testimonials = [
  {
    quote:
      "PTM Labels delivers consistent quality every time. Their attention to detail on our food labels is exceptional.",
    attribution: "F&B Manufacturer",
  },
  {
    quote:
      "Reliable turnaround and excellent print quality. They handle our pharmaceutical labelling with precision.",
    attribution: "Pharma Company",
  },
  {
    quote:
      "The team helped us choose the right materials for our cosmetics line. Professional and responsive throughout.",
    attribution: "Cosmetics Brand",
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const featuredIndustries = industries.slice(0, 4);

  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-ptm-navy min-h-[85vh] flex items-center">
        <div className="container-main text-center">
          <FadeIn direction="up" duration={0.6}>
            <h1 className="text-display-xl text-white max-w-4xl mx-auto mb-6">
              {siteConfig.tagline}
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.15} duration={0.6}>
            <p className="text-body-lg text-ptm-gray max-w-3xl mx-auto mb-10">
              ISO-certified Malaysian manufacturer with 20+ years of experience.
              Self-adhesive labels, shrink sleeves, and specialty printing for
              F&B, pharma, cosmetics, and logistics.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button variant="primary" size="lg" href="/quote">
                Request a Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/products"
                className="border-white text-white hover:border-ptm-accent hover:text-ptm-accent"
              >
                Explore Our Products
              </Button>
            </div>
          </FadeIn>
          <FadeIn direction="none" delay={0.5} duration={0.6}>
            <div className="flex items-center justify-center gap-3 text-body-sm text-ptm-gray">
              <span>ISO 9001</span>
              <span className="text-ptm-slate-light">&middot;</span>
              <span>ISO 14001</span>
              <span className="text-ptm-slate-light">&middot;</span>
              <span>20+ Years</span>
              <span className="text-ptm-slate-light">&middot;</span>
              <span>24/7 Production</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Stats Bar */}
      <section className="bg-white border-t border-b border-ptm-gray-light">
        <div className="container-main py-12 lg:py-16">
          <StaggerGroup stagger={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StaggerItem>
              <div className="text-display-md text-ptm-blue font-heading font-bold">
                {siteConfig.stats.yearsInBusiness}
              </div>
              <div className="text-body-sm text-ptm-slate-light mt-1">
                Years Experience
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-display-md text-ptm-blue font-heading font-bold">
                {siteConfig.stats.googleRating} ★
              </div>
              <div className="text-body-sm text-ptm-slate-light mt-1">
                Google Rating
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-display-md text-ptm-blue font-heading font-bold">
                {siteConfig.stats.googleReviews}
              </div>
              <div className="text-body-sm text-ptm-slate-light mt-1">
                Client Reviews
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-display-md text-ptm-blue font-heading font-bold">
                {siteConfig.stats.production}
              </div>
              <div className="text-body-sm text-ptm-slate-light mt-1">
                Production Capacity
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Section 2b: Client Logo Bar */}
      <section className="bg-white py-10 lg:py-12">
        <div className="container-main">
          <FadeIn direction="none">
            <p className="text-center text-body-sm text-ptm-slate-light uppercase tracking-widest mb-8">
              Trusted by companies across industries
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {/* Replace these placeholders with real client logos */}
              {[
                "Client Logo 1",
                "Client Logo 2",
                "Client Logo 3",
                "Client Logo 4",
                "Client Logo 5",
                "Client Logo 6",
              ].map((logo) => (
                <div
                  key={logo}
                  className="h-10 w-28 rounded bg-ptm-ice flex items-center justify-center text-caption text-ptm-gray"
                >
                  {logo}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: Product Capabilities */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              label="What We Manufacture"
              title="Every Label Type, Under One Roof"
            />
          </FadeIn>
          <StaggerGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <div className="bg-white rounded-card-lg shadow-card hover:shadow-card-hover transition-shadow duration-200 p-6 h-full">
                  <h3 className="text-heading-md font-bold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-body-sm text-ptm-slate-light mb-4">
                    {product.description}
                  </p>
                  <div>
                    <span className="text-body-sm font-semibold text-ptm-navy mb-2 block">
                      Best for:
                    </span>
                    <ul className="space-y-1">
                      {product.bestFor.map((item) => (
                        <li
                          key={item}
                          className="text-body-sm text-ptm-slate-light flex items-start gap-2"
                        >
                          <span className="text-ptm-blue mt-1.5 shrink-0">
                            &bull;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/products"
                className="text-body-md text-ptm-blue font-semibold hover:text-ptm-blue-light transition-colors"
              >
                View All Products & Capabilities &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: Industries */}
      <section className="bg-ptm-ice section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              label="Industries We Serve"
              title="Labels Built for Your Industry"
            />
          </FadeIn>
          <StaggerGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredIndustries.map((industry) => (
              <StaggerItem key={industry.id}>
                <div className="bg-white rounded-card-lg shadow-card p-8 h-full">
                  <h3 className="text-heading-lg font-bold mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-body-md text-ptm-slate-light mb-5">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.labelTypes.map((label) => (
                      <span
                        key={label}
                        className="inline-flex bg-ptm-blue/10 text-ptm-blue text-caption rounded-full px-3 py-1"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Section 5: How We Work */}
      <section className="section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              label="Our Process"
              title="From Concept to Delivery"
            />
          </FadeIn>
          <StaggerGroup stagger={0.12} className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.number} className="flex items-center flex-1 w-full md:w-auto">
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-10 h-10 rounded-full bg-ptm-blue text-white flex items-center justify-center font-heading font-bold text-body-md mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-heading-sm font-bold mb-1">
                    {step.name}
                  </h3>
                  <p className="text-body-sm text-ptm-slate-light max-w-[180px]">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block border-t-2 border-dashed border-ptm-gray-light flex-1 min-w-[24px] mt-[-2rem]" />
                )}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Section 6: Social Proof */}
      <section className="bg-ptm-navy section-padding">
        <div className="container-main">
          <FadeIn>
            <SectionHeading
              dark
              label="What Our Clients Say"
              title="Trusted by Businesses Across Malaysia"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-center mb-12">
              <div className="text-display-md text-white font-heading font-bold">
                5.0{" "}
                <span className="text-ptm-accent">★★★★★</span>
              </div>
              <p className="text-body-lg text-ptm-gray mt-2">
                from {siteConfig.stats.googleReviews} Google Reviews
              </p>
            </div>
          </FadeIn>
          <StaggerGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.attribution}>
                <div className="bg-ptm-navy-light rounded-card-lg p-6 border border-white/10 h-full">
                  <p className="text-body-md text-ptm-gray mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <span className="text-body-sm text-ptm-accent font-semibold">
                    &mdash; {testimonial.attribution}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Section 7: CTA Banner */}
      <section className="bg-ptm-blue py-section-sm">
        <div className="container-main text-center">
          <FadeIn>
            <h2 className="text-display-md text-white font-bold mb-4">
              Ready to Discuss Your Labelling Needs?
            </h2>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-8">
              Tell us about your project and we&apos;ll recommend the best label
              solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/quote">
                Request a Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={siteConfig.contact.whatsappHref}
                className="border-white text-white hover:border-ptm-accent hover:text-ptm-accent"
              >
                WhatsApp Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
