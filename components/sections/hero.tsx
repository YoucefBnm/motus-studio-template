"use client";
import { motion, MotionConfig, stagger } from "motion/react";
import { HeroShowcase } from "../hero-showcase";
import { ANIMATION_VARIANTS } from "@/lib/animation-variants";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const animation_variants = ANIMATION_VARIANTS["default"];

function HeroText() {
  return (
    <motion.div
      className="relative max-w-2xl z-2 space-y-6 px-8 text-white place-content-center h-screen"
      transition={{ delayChildren: stagger(0.2) }}
      initial="hidden"
      animate="visible"
    >
      <MotionConfig transition={{ duration: 0.4, ease: "easeOut" }}>
        <motion.h1
          variants={animation_variants}
          className="text-5xl font-medium tracking-tight leading-none text-balance"
        >
          Build, optimize and scale high performing ecommerce experiences
        </motion.h1>
        <motion.p
          variants={animation_variants}
          className="text-sm text-muted text-balance"
        >
          partners with eCommerce teams to design, build, and optimize
          storefronts that drive measurable revenue growth. From UX and CRO to
          headless architecture and performance optimization, we deliver fast,
          secure, and scalable commerce experiences.
        </motion.p>

        <motion.div variants={animation_variants} className="flex gap-1">
          <Button size-="lg">Request Free Audit</Button>
          <Button variant={"link"}>
            View All Case Studies <ArrowRightIcon />
          </Button>
        </motion.div>
      </MotionConfig>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative after:absolute after:inset-0 after:bg-linear-to-r after:from-black/80 after:to-black/40 grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 place-content-center min-h-screen bg-black">
      <HeroText />
      <HeroShowcase />
    </section>
  );
}
