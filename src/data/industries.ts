export interface Industry {
  id: string;
  name: string;
  description: string;
  needs: string[];
  labelTypes: string[];
  considerations: string[];
  image: string;
}

export const industries: Industry[] = [
  {
    id: "food-beverage",
    name: "Food & Beverage",
    description:
      "Labels that withstand refrigeration, moisture, and handling while meeting food safety regulations. From nutritional panels to full-body shrink sleeves for shelf impact.",
    needs: [
      "Moisture and cold-resistant adhesives",
      "FDA-compliant materials and inks",
      "Nutritional information panels",
      "High visual impact for shelf competition",
    ],
    labelTypes: ["Self-Adhesive Labels", "Shrink Sleeve Labels", "Peel & Reveal Labels"],
    considerations: [
      "Material selection for refrigeration and freezer exposure",
      "Water-based ink options for food-safe compliance",
      "Squeeze and condensation resistance",
    ],
    image: "/images/industries/food-beverage.jpg",
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceuticals & Healthcare",
    description:
      "Precision labelling for regulatory compliance, serialization, and tamper evidence. Multi-layer labels provide space for mandatory information without cluttering the pack.",
    needs: [
      "Regulatory compliance labelling",
      "Tamper-evident seals",
      "Serialization and traceability",
      "Multi-language information panels",
    ],
    labelTypes: ["Peel & Reveal Labels", "Self-Adhesive Labels", "Variable Data Printing"],
    considerations: [
      "Serialized numbering for track-and-trace",
      "Booklet labels for extensive compliance text",
      "Clean-room compatible materials where required",
    ],
    image: "/images/industries/pharmaceutical.jpg",
  },
  {
    id: "cosmetics",
    name: "Cosmetics & Personal Care",
    description:
      "Premium-finish labels that convey quality and brand identity. Foil stamping, embossing, and specialty substrates create a luxury look and feel on shelf.",
    needs: [
      "Premium finish and tactile quality",
      "Resistance to oils, moisture, and handling",
      "Ingredient listing in limited space",
      "Brand consistency across product ranges",
    ],
    labelTypes: ["Self-Adhesive Labels", "Shrink Sleeve Labels", "Pop-Up Labels"],
    considerations: [
      "Oil and chemical resistance for product contact",
      "Foil stamping and embossing for premium feel",
      "Clear-on-clear labels for a no-label look",
    ],
    image: "/images/industries/cosmetics.jpg",
  },
  {
    id: "logistics",
    name: "Logistics & Warehousing",
    description:
      "Durable labels built for scanning, tracking, and identification across the supply chain. Variable data printing enables unique barcodes and serial numbers on every unit.",
    needs: [
      "Barcode and QR code readability",
      "Adhesion to corrugated and rough surfaces",
      "Durability through shipping and handling",
      "High-speed application compatibility",
    ],
    labelTypes: ["Self-Adhesive Labels", "Variable Data Printing"],
    considerations: [
      "Permanent or removable adhesive options",
      "Direct thermal or thermal transfer compatibility",
      "Bulk ordering and fast turnaround for high volumes",
    ],
    image: "/images/industries/logistics.jpg",
  },
];
