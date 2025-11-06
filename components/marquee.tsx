"use client";
import { cn } from "@/lib/utils";
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  motion,
  wrap,
  HTMLMotionProps,
} from "motion/react";
import { useRef } from "react";

interface MarqueeWrapProps extends HTMLMotionProps<"div"> {
  baseVelocity?: number;
}

// export const Marqueee = ({
//   baseVelocity = -5,
//   style,
// }: MarqueeWrapProps) => {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });

//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   /**
//    * This is a magic wrapping for the length of the text - you
//    * have to replace for wrapping that works for you or dynamically
//    * calculate
//    */
//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   const directionFactor = useRef<number>(1);
//   useAnimationFrame((t, delta) => {
//     t;
//     let moveBy = directionFactor.current * baseVelocity * (delta / 6000);

//     /**
//      * This is what changes the direction of the scroll once we
//      * switch scrolling directions.
//      */
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//   });

//   return (
//     <div
//       className="relative bg-blue-500 top-0  overflow-hidden m-0 flex whitespace-nowrap flex-nowrap "
//       style={style}
//     >
//       <motion.div
//         className="flex bg-green-500 justify-center"
//         style={{ x }}
//       >
//         <span className=" text-5xl">
//           Strategy, design systems and secure engineering
//         </span>
//         <span className=" text-5xl">
//           Strategy, design systems and secure engineering
//         </span>

//         <span className=" text-5xl">
//           Strategy, design systems and secure engineering
//         </span>
//         <span className=" text-5xl">
//           Strategy, design systems and secure engineering
//         </span>

//         {/* {items.map((item, i) => (
//           <span key={i} className="text-large">
//             {item}
//             {smile ? (
//               <BsEmojiSmile
//                 size={breakpoint === "small" ? 30 : 40}
//                 className={`smile ${i % 2 === 1 ? "inverted" : ""}`}
//               />
//             ) : (
//               star ? <div className="star"><SvgStar color={startColor} /></div> :
//               <div className="pixel" />
//             )}
//           </span>
//         ))}
//         {items.map((item, i) => (
//           <span key={i} className="text-large">
//             {item}
//             {smile ? (
//               <BsEmojiSmile
//                 size={breakpoint === "small" ? 30 : 40}
//                 className={`smile ${i % 2 === 1 ? "inverted" : ""}`}
//               />
//             ) : (
//               star ? <div className="star"><SvgStar color={startColor} /></div> :
//               <div className="pixel" />
//             )}
//           </span>
//         ))} */}
//       </motion.div>
//     </div>
//   );
// };

export function Marquee({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden left-[-100px] w-[calc(100vw+100px)] m-0 p-0 flex whitespace-nowrap flex-nowwrap",
        className,
      )}
      {...props}
    />
  );
}

export function MarqueeWrap({
  baseVelocity = 100,
  className,
  style,
  ...props
}: MarqueeWrapProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    t;
    let moveBy = directionFactor.current * baseVelocity * (delta / 6000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      className={cn("flex justify-center", className)}
      style={{ x, ...style }}
      {...props}
    />
  );
}
