export interface Client {
  name: string;
  stack: string[];
  templateUrl: string;
  services: string[];
}
export const SHOWCASE_IMAGES = [
  "/showcase-bizadvisor-hero.png",
  "/showcase-ai-hero.png",
  "/showcase-breinkhier-hero.png",
  "/showcase-breinkhier-benifits.png",

  "/showcase-fintech-awards.png",
  "/showcase-stride-hero.png",
  "/showcase-gt-hero.png",
  "/showcase-dashboard-2.png",

  "/showcase-enera-hero.png",
  "/showcase-dashboard-1.png",
  "/showcase-stride-cta.png",
  "/showcase-breinkhier-locations.png",
];

export const CLIENTS: Client[] = [
  {
    name: "Stride",
    stack: ["shopify"],
    templateUrl: "/template-stride.png",
    services: ["UX", "funnel", "checkout", "optimization", "A/B testing"],
  },
  {
    name: "Bizadvisor",
    stack: ["shopify", "next.js"],
    templateUrl: "/template-bizadvisor.png",
    services: ["storefront", "optimization", "SEO", "product comparison"],
  },
  {
    name: "Enera",
    stack: ["shopify"],
    templateUrl: "/template-enera.png",
    services: [
      "UX Redesign",
      "focused flows",
      "email strategy",
      "shopify features",
    ],
  },
  {
    name: "Breinkhier",
    stack: ["custom"],
    templateUrl: "/template-breinkhier.png",
    services: ["Ux Redesign", "checkout", "vendor framework"],
  },
  {
    name: "GT Fintech",
    stack: ["custom"],
    templateUrl: "/template-gt.png",
    services: ["UX"],
  },
];
