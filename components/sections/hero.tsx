"use client";
import { BgMask } from "@/components/bg-mask";
import { ImagePlayer } from "@/components/systaliko-ui/image-player";
import { TextWave } from "@/components/text-wave";
import { ANIMATION_VARIANTS } from "@/lib/animation-variants";
import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const showcase_images = [
  "https://images.unsplash.com/photo-1579632330101-453dd6e7f212?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  "https://images.unsplash.com/photo-1656618724305-a4257e46e847?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=700",
  "https://images.unsplash.com/photo-1647675975434-864e1c3fc98d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2064",
  "https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2064",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
];

export function Hero() {
  const variants = ANIMATION_VARIANTS["bottom"];
  return (
    <section className="px-8 py-12 place-content-center items-center min-h-screen grid grid-cols-12 grid-rows-1 ">
      <div className="row-start-1 col-start-2 col-end-12 md:col-start-4 md:col-end-10 aspect-video relative">
        <ImagePlayer
          images={showcase_images}
          interval={150}
          renderImage={(src) => (
            <Image
              src={src}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 400px"
              className="h-full max-w-full w-auto"
              alt="showcase"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          )}
        />
      </div>
      <div className="overflow-hidden mix-blend-difference text-center row-start-1 col-start-1 col-end-13 md:col-start-3 md:col-end-11 relative z-10">
        <motion.h1
          className="font-black text-7xl md:text-8xl xl:text-9xl text-accent uppercase"
          variants={variants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          creative studio
        </motion.h1>
      </div>

      <div className="self-end text-center row-start-1 col-start-2 col-end-12 md:col-start-4 md:col-end-10">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <BgMask className="inline-block">
            <Link
              href="/booking"
              className="inline-flex items-center gap-0.5 p-2"
            >
              <TextWave
                delayTime={2}
                className="uppercase  tracking-wider"
                text={"Strategy, design systems and secure engineering"}
              />
              <ArrowUpRightIcon className="size-3" />
            </Link>
          </BgMask>
        </motion.div>
      </div>
    </section>
  );
}
