import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PTM Labels. Call, WhatsApp, or email us for quotes, enquiries, or to arrange a factory visit in Johor, Malaysia.",
};

const contactMethods = [
  {
    icon: "\uD83D\uDCDE",
    title: "Call Us",
    detail: siteConfig.contact.phone,
    sub: "Mon\u2013Fri 8AM\u20135PM, Sat 8AM\u20131PM",
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: "\uD83D\uDCAC",
    title: "WhatsApp",
    detail: siteConfig.contact.whatsapp,
    sub: "Quick responses for enquiries",
    href: siteConfig.contact.whatsappHref,
  },
  {
    icon: "\u2709\uFE0F",
    title: "Email",
    detail: siteConfig.contact.email,
    sub: "We reply within 1 business day",
    href: `mailto:${siteConfig.contact.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-ptm-navy py-section-sm">
        <div className="container-main">
          <SectionHeading
            dark
            label="Contact"
            title="Get in Touch"
          />
          <p className="text-body-lg text-ptm-gray text-center max-w-2xl mx-auto -mt-8">
            Whether you need a quote, have a question, or want to visit our
            facility &mdash; we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Section 2: Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className="bg-ptm-ice rounded-card-lg p-8 text-center hover:shadow-card transition block"
              >
                <span className="text-3xl mb-4 block">{method.icon}</span>
                <h3 className="text-heading-md font-bold text-ptm-navy mb-2">
                  {method.title}
                </h3>
                <p className="text-body-md text-ptm-slate font-medium mb-1">
                  {method.detail}
                </p>
                <p className="text-body-md text-ptm-slate-light">
                  {method.sub}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Location */}
      <section className="bg-ptm-ice section-padding-sm">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Address & Hours */}
            <div>
              <h2 className="text-heading-lg font-bold text-ptm-navy mb-6">
                Visit Our Factory
              </h2>

              <div className="mb-6">
                <p className="text-body-md text-ptm-slate-light leading-relaxed">
                  {siteConfig.location.address}
                  <br />
                  {siteConfig.location.area}
                  <br />
                  {siteConfig.location.postcode} {siteConfig.location.city},{" "}
                  {siteConfig.location.state}
                  <br />
                  {siteConfig.location.country}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-heading-sm font-bold text-ptm-navy mb-3">
                  Operating Hours
                </h3>
                <ul className="space-y-1.5 text-body-md text-ptm-slate-light">
                  <li>{siteConfig.hours.weekdays}</li>
                  <li>{siteConfig.hours.saturday}</li>
                  <li>{siteConfig.hours.sunday}</li>
                </ul>
              </div>

              <p className="text-body-sm text-ptm-slate-light italic">
                Factory visits available by appointment.
              </p>
            </div>

            {/* Right: Google Maps Embed */}
            <div className="rounded-card-lg overflow-hidden aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3!2d103.79!3d1.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da7106cbd4a3a7%3A0x45fe4e30e4d1c3a8!2sPTM%20Labels%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PTM Labels factory location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="bg-ptm-blue section-padding-sm">
        <div className="container-main text-center">
          <h2 className="text-display-md font-bold text-white mb-4">
            Need a Quote?
          </h2>
          <p className="text-body-lg text-white/80 mb-8">
            Skip the back-and-forth &mdash; use our structured quote form.
          </p>
          <Button variant="primary" href="/quote">
            Request a Quote
          </Button>
        </div>
      </section>
    </>
  );
}
