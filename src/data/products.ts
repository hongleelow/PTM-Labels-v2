export interface Product {
  id: string;
  name: string;
  description: string;
  details: string;
  bestFor: string[];
  industries: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "self-adhesive",
    name: "Self-Adhesive Labels",
    description:
      "Pressure-sensitive labels that adhere to virtually any surface — paper, plastic, glass, or metal. Available on rolls or sheets in any shape and size.",
    details:
      "Our most versatile label type, produced on flexographic or digital presses with options for paper or film substrates. Ideal for high-volume production runs with consistent quality across millions of units.",
    bestFor: [
      "Product branding and identification",
      "Nutritional and ingredient panels",
      "Barcode and compliance labelling",
      "Promotional and seasonal labels",
    ],
    industries: ["Food & Beverage", "Pharmaceuticals", "Cosmetics", "Logistics"],
    image: "/images/products/self-adhesive.jpg",
  },
  {
    id: "shrink-sleeve",
    name: "Shrink Sleeve Labels",
    description:
      "Full 360-degree coverage that conforms to any container shape. Heat-applied film wraps around bottles, cans, and jars for maximum shelf impact.",
    details:
      "Printed on shrinkable film using rotogravure or digital methods, then heat-applied to conform precisely to your container. Provides tamper evidence and allows printing on the entire surface area.",
    bestFor: [
      "Full-body bottle decoration",
      "Irregularly shaped containers",
      "Tamper-evident packaging",
      "Maximum brand visibility on shelf",
    ],
    industries: ["Food & Beverage", "Cosmetics", "Household Products"],
    image: "/images/products/shrink-sleeve.jpg",
  },
  {
    id: "peel-reveal",
    name: "Peel & Reveal Labels",
    description:
      "Multi-layer labels that open like a booklet, providing extra space for regulatory information, instructions, or multilingual content without increasing package size.",
    details:
      "Constructed with multiple layers that peel open and reseal. Perfect for products that require extensive information in limited space — common in pharmaceutical and chemical industries where compliance text is mandatory.",
    bestFor: [
      "Pharmaceutical compliance information",
      "Multilingual product details",
      "Promotional content with limited space",
      "Safety data and handling instructions",
    ],
    industries: ["Pharmaceuticals", "Chemicals", "Food & Beverage"],
    image: "/images/products/peel-reveal.jpg",
  },
  {
    id: "pop-up",
    name: "Pop-Up Labels",
    description:
      "Extended content labels with a resealable flap that pops up for easy reading. Ideal for products requiring detailed instructions or legal information.",
    details:
      "Similar to peel & reveal but with a pop-up mechanism for easier user interaction. The label stays attached and can be opened and closed multiple times without losing adhesion.",
    bestFor: [
      "Detailed usage instructions",
      "Extended regulatory content",
      "Recipe or preparation guides",
      "Multi-page product information",
    ],
    industries: ["Pharmaceuticals", "Food & Beverage", "Chemicals"],
    image: "/images/products/pop-up.jpg",
  },
  {
    id: "variable-data",
    name: "Variable Data Printing",
    description:
      "Every label unique — sequential numbering, barcodes, QR codes, and serialized data printed inline. Essential for traceability and anti-counterfeiting.",
    details:
      "Using digital inkjet technology integrated into our flexo lines, we print unique data on every label without slowing production. Supports sequential numbering, 1D/2D barcodes, QR codes, and random serialization.",
    bestFor: [
      "Serial number and lot tracking",
      "Barcode and QR code generation",
      "Anti-counterfeiting measures",
      "Logistics and inventory labels",
    ],
    industries: ["Pharmaceuticals", "Logistics", "Electronics", "Food & Beverage"],
    image: "/images/products/variable-data.jpg",
  },
];

export interface PrintingTech {
  id: string;
  name: string;
  description: string;
  bestFor: string;
  specs: string[];
}

export const printingTechnologies: PrintingTech[] = [
  {
    id: "flexographic",
    name: "Flexographic Printing",
    description:
      "Our primary production method. Three 9-color flexo presses handle medium to high-volume runs with inline finishing — foil stamping, laminating, and die-cutting in a single pass.",
    bestFor: "High-volume production runs (10,000+ labels)",
    specs: [
      "3 x 9-color flexo presses",
      "Inline cold/hot foil stamping",
      "Inline laminating and die-cutting",
      "Water-based and UV-curable inks",
      "AVT automated defect detection",
    ],
  },
  {
    id: "digital",
    name: "Digital Printing",
    description:
      "Screen Truepress Jet L350UV+ for short-run jobs and rapid prototyping. No plate costs, fast setup, and up to 90% Pantone gamut coverage with CMYK + White + Orange.",
    bestFor: "Short runs, prototypes, and variable data (under 10,000 labels)",
    specs: [
      "Screen Truepress Jet L350UV+",
      "CMYK + White + Orange",
      "90% Pantone gamut coverage",
      "Up to 60m/min print speed",
      "No plate or tooling costs",
    ],
  },
  {
    id: "letterpress",
    name: "Letterpress Printing",
    description:
      "Intermittent-feed letterpress for specialty work requiring complex multi-process printing, embossing, and hot foil stamping with lower tooling costs than flexo.",
    bestFor: "Specialty labels, embossing, and short-to-medium runs",
    specs: [
      "Multi-process inline capability",
      "Hot foil stamping",
      "Embossing and debossing",
      "Lower tooling costs than flexo",
      "Ideal for textured and tactile finishes",
    ],
  },
];

export interface FinishingOption {
  id: string;
  name: string;
  description: string;
}

export const finishingOptions: FinishingOption[] = [
  {
    id: "hot-foil",
    name: "Hot Foil Stamping",
    description: "Metallic or holographic foil for premium branding and shelf appeal.",
  },
  {
    id: "cold-foil",
    name: "Cold Foil Stamping",
    description: "Cost-effective foil application inline with flexo printing.",
  },
  {
    id: "embossing",
    name: "Embossing / Debossing",
    description: "Raised or recessed textures for a tactile premium feel.",
  },
  {
    id: "laminating",
    name: "Laminating",
    description: "Gloss or matte film overlay for durability and enhanced appearance.",
  },
  {
    id: "uv-coating",
    name: "UV Coating",
    description: "Spot or full UV coating for gloss highlights and surface protection.",
  },
  {
    id: "varnish",
    name: "Varnish",
    description: "Protective coating for scuff resistance and moisture barrier.",
  },
];
