import { Clients } from "@/components/sections/clients";
import { Hero } from "@/components/sections/hero";
import { Showcase } from "@/components/sections/showcase";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <Clients />
      <Showcase />
    </ReactLenis>
  );
}
