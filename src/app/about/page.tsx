import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About PTM Labels",
  description:
    "Malaysia's trusted label manufacturer since 2002. ISO 9001 & 14001 certified, 20+ years of experience, serving clients across Southeast Asia from our Johor facility.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ptm-navy py-section-sm">
        <div className="container-main">
          <SectionHeading
            dark
            label="About Us"
            title="Malaysia's Trusted Label Manufacturer Since 2002"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Column 1: Story */}
            <div className="lg:col-span-3">
              <h2 className="text-display-md font-bold text-ptm-navy mb-6">
                Who We Are
              </h2>
              <p className="text-body-lg text-ptm-slate-light mb-4">
                PTM Labels was founded in 2002 in Johor, Malaysia, starting as a
                small label printer with a single press and a commitment to
                getting every job right. From the beginning, we believed that
                labels are more than decoration &mdash; they are a critical part
                of how products communicate with consumers.
              </p>
              <p className="text-body-lg text-ptm-slate-light mb-4">
                Over two decades, we have grown into a full-scale manufacturing
                facility equipped with three flexographic printing lines, a
                digital press, and letterpress capabilities. Today we serve
                businesses of every size, from entrepreneurs launching their
                first product to multinationals managing thousands of SKUs
                across the region.
              </p>
              <p className="text-body-lg text-ptm-slate-light">
                Everything we do is guided by our &ldquo;To Care&rdquo;
                philosophy. It means genuinely understanding each client&apos;s
                product, market, and labelling challenges before recommending
                solutions. We do not push the most expensive option &mdash; we
                recommend the right one.
              </p>
            </div>

            {/* Column 2: Placeholder Image */}
            <div className="lg:col-span-2">
              <div className="bg-ptm-ice rounded-card-lg aspect-[3/4] flex items-center justify-center">
                <span className="text-ptm-slate-light text-body-md font-medium">
                  Factory Photo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What "To Care" Means */}
      <section className="bg-ptm-ice section-padding-sm">
        <div className="container-main">
          <SectionHeading
            align="center"
            label="Our Philosophy"
            title="What 'To Care' Means in Practice"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-card-lg p-8 shadow-card">
              <h3 className="text-heading-md font-bold text-ptm-navy mb-3">
                Understanding Your Product
              </h3>
              <p className="text-body-md text-ptm-slate-light">
                We study your packaging, your market, and your application
                environment before recommending materials and methods.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-card-lg p-8 shadow-card">
              <h3 className="text-heading-md font-bold text-ptm-navy mb-3">
                Getting the Details Right
              </h3>
              <p className="text-body-md text-ptm-slate-light">
                From colour matching to adhesive selection, we sweat the details
                that affect how your label performs in the real world.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-card-lg p-8 shadow-card">
              <h3 className="text-heading-md font-bold text-ptm-navy mb-3">
                Standing Behind Our Work
              </h3>
              <p className="text-body-md text-ptm-slate-light">
                AVT automated inspection on every run. If it doesn&apos;t meet
                spec, it doesn&apos;t ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white section-padding-sm">
        <div className="container-main">
          <SectionHeading
            label="Certifications"
            title="Quality and Environmental Standards"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ISO 9001 */}
            <div className="border-2 border-ptm-blue/20 rounded-card-lg p-8">
              <h3 className="text-heading-md font-bold text-ptm-navy mb-3">
                ISO 9001:2015 &mdash; Quality Management
              </h3>
              <p className="text-body-md text-ptm-slate-light">
                Our quality management certification means consistent output on
                every order, documented processes that eliminate guesswork, and a
                culture of continuous improvement. For our clients, it
                translates to fewer reprints, reliable delivery schedules, and
                labels that meet specification every time.
              </p>
            </div>

            {/* ISO 14001 */}
            <div className="border-2 border-ptm-blue/20 rounded-card-lg p-8">
              <h3 className="text-heading-md font-bold text-ptm-navy mb-3">
                ISO 14001:2015 &mdash; Environmental Management
              </h3>
              <p className="text-body-md text-ptm-slate-light">
                Our environmental management certification reflects a genuine
                commitment to sustainability. We prioritise water-based inks
                where possible, actively reduce material waste throughout
                production, and maintain responsible sourcing practices. For
                brands that value environmental responsibility, we are a partner
                who shares that commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ptm-blue section-padding-sm">
        <div className="container-main text-center">
          <h2 className="text-display-md font-bold text-white mb-8">
            Want to See Our Factory in Action?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="/facilities">
              View Our Facilities
            </Button>
            <Button variant="ghost" href="/quote" className="text-white">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
