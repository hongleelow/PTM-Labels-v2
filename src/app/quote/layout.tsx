import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get a free quote for custom labels and stickers from PTM Labels. Tell us about your project — label type, quantity, size, and finishing — and we'll respond within 1 business day.",
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
