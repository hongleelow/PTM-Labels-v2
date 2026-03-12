"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

const labelTypes = [
  "Self-Adhesive Labels",
  "Shrink Sleeve Labels",
  "Peel & Reveal Labels",
  "Pop-Up Labels",
  "Variable Data Printing",
  "Not Sure",
];

const quantityRanges = [
  "Under 5,000",
  "5,000 - 10,000",
  "10,000 - 50,000",
  "50,000 - 100,000",
  "100,000+",
];

const materials = ["Paper", "Film / Synthetic", "Metallic", "Not Sure"];

const finishingOptions = [
  "Hot Foil",
  "Cold Foil",
  "Embossing",
  "Laminating",
  "UV Coating",
  "None / Not Sure",
];

const artworkStatuses = [
  "Artwork Ready",
  "Need Design Help",
  "No Artwork Yet",
];

const inputStyles =
  "w-full border border-ptm-gray-light rounded-button px-4 py-3 text-body-md focus:outline-none focus:ring-2 focus:ring-ptm-blue/30 focus:border-ptm-blue transition";

const labelStyles = "text-body-sm font-medium text-ptm-navy mb-1.5 block";

export default function QuotePage() {
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);

  function toggleFinish(finish: string) {
    setSelectedFinishes((prev) =>
      prev.includes(finish)
        ? prev.filter((f) => f !== finish)
        : [...prev, finish]
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string | string[]> = {};
    formData.forEach((value, key) => {
      data[key] = value as string;
    });
    data.finishing = selectedFinishes;
    console.log("Quote form submitted:", data);
  }

  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-ptm-navy py-16">
        <div className="container-main text-center">
          <h1 className="text-display-lg font-bold text-white mb-4">
            Request a Quote
          </h1>
          <p className="text-body-lg text-ptm-gray max-w-2xl mx-auto">
            Tell us about your labelling needs and we&apos;ll get back to you
            within one business day.
          </p>
        </div>
      </section>

      {/* Section 2: Form */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              {/* Company Name — full width */}
              <div className="md:col-span-2">
                <label htmlFor="companyName" className={labelStyles}>
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className={inputStyles}
                />
              </div>

              {/* Contact Person */}
              <div>
                <label htmlFor="contactPerson" className={labelStyles}>
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  className={inputStyles}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelStyles}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={inputStyles}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className={labelStyles}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={inputStyles}
                />
              </div>

              {/* Label Type */}
              <div>
                <label htmlFor="labelType" className={labelStyles}>
                  Label Type
                </label>
                <select
                  id="labelType"
                  name="labelType"
                  className={inputStyles}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select label type...
                  </option>
                  {labelTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Estimated Quantity */}
              <div>
                <label htmlFor="quantity" className={labelStyles}>
                  Estimated Quantity
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  className={inputStyles}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select quantity range...
                  </option>
                  {quantityRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Label Size / Dimensions */}
              <div>
                <label htmlFor="labelSize" className={labelStyles}>
                  Label Size / Dimensions
                </label>
                <input
                  type="text"
                  id="labelSize"
                  name="labelSize"
                  placeholder="e.g. 80mm x 50mm"
                  className={inputStyles}
                />
              </div>

              {/* Material Preference */}
              <div>
                <label htmlFor="material" className={labelStyles}>
                  Material Preference
                </label>
                <select
                  id="material"
                  name="material"
                  className={inputStyles}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select material...
                  </option>
                  {materials.map((mat) => (
                    <option key={mat} value={mat}>
                      {mat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Finishing — checkboxes, full width */}
              <div className="md:col-span-2">
                <span className={labelStyles}>Finishing</span>
                <div className="flex flex-wrap gap-3 mt-1">
                  {finishingOptions.map((finish) => {
                    const isSelected = selectedFinishes.includes(finish);
                    return (
                      <label
                        key={finish}
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => toggleFinish(finish)}
                      >
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition ${
                            isSelected
                              ? "bg-ptm-blue border-ptm-blue"
                              : "border-ptm-gray-light bg-white"
                          }`}
                        >
                          {isSelected && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-body-md text-ptm-slate">
                          {finish}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Artwork Status */}
              <div>
                <label htmlFor="artworkStatus" className={labelStyles}>
                  Artwork Status
                </label>
                <select
                  id="artworkStatus"
                  name="artworkStatus"
                  className={inputStyles}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select artwork status...
                  </option>
                  {artworkStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className={labelStyles}>
                  Timeline
                </label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  placeholder="e.g. 2 weeks, end of month"
                  className={inputStyles}
                />
              </div>

              {/* Additional Details — full width */}
              <div className="md:col-span-2">
                <label htmlFor="details" className={labelStyles}>
                  Additional Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Any specific requirements, colours, or questions..."
                  className={inputStyles}
                />
              </div>

              {/* Submit Button — full width */}
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Submit Quote Request
                </Button>
              </div>
            </div>
          </form>

          {/* Note below form */}
          <p className="text-body-sm text-ptm-slate-light text-center mt-8">
            We typically respond within 1 business day. For urgent requests,
            WhatsApp us at{" "}
            <a
              href="https://wa.me/60167333229"
              className="text-ptm-blue font-medium hover:underline"
            >
              +6016-733 3229
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
