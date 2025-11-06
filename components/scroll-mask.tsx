"use client";
import { useElementSize } from "@/hooks/use-element-size";
import { cn } from "@/lib/utils";
import {
  motion,
  MotionValue,
  HTMLMotionProps,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
} from "motion/react";
import React from "react";

interface ScrollMaskProps extends React.HTMLAttributes<HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offset?: any[];
  viewbox?: [number, number, number, number];
  scaleMultiplier?: number;
}
interface ScrollMaskContextValue {
  svgWrapRef: React.RefObject<HTMLDivElement | null>;
  svgPathRef: React.RefObject<SVGPathElement | null>;
  scrollYProgress: MotionValue<number>;
  isMounted: boolean;
  viewbox?: [number, number, number, number];
}

export const ScrollMaskContext = React.createContext<
  ScrollMaskContextValue | undefined
>(undefined);

function useScrollMaskContext() {
  const context = React.useContext(ScrollMaskContext);
  if (context === undefined) {
    throw new Error(
      "useScrollMaskContext must be used within a ScrollMaskProvider",
    );
  }
  return context;
}

export function ScrollMask({
  offset,
  viewbox = [0, 0, 100, 100],
  scaleMultiplier = 100,
  className,
  children,
  ...props
}: ScrollMaskProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const svgWrapRef = React.useRef<HTMLDivElement>(null);
  const svgPathRef = React.useRef<SVGPathElement>(null);
  const [isMounted, setIsMounted] = React.useState(false);

  const { width: containerWidth, height: containerHeight } =
    useElementSize(svgWrapRef);

  const viewBoxWidth = viewbox[2];
  const viewBoxHeight = viewbox[3];

  const wrapAspectRatio = containerWidth / containerHeight;
  const viewBoxAspectRatio = viewBoxWidth / viewBoxHeight;

  let scaleX, scaleY;
  if (wrapAspectRatio > viewBoxAspectRatio) {
    scaleY = containerHeight / viewBoxHeight;
    scaleX = scaleY;
  } else {
    scaleX = containerWidth / viewBoxWidth;
    scaleY = scaleX;
  }

  const containerCenterX = containerWidth / 2;
  const containerCenterY = containerHeight / 2;
  const svgCenterX = viewBoxWidth / 2;
  const svgCenterY = viewBoxHeight / 2;

  const translateX = containerCenterX - svgCenterX * scaleX;
  const translateY = containerCenterY - svgCenterY * scaleY;

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: offset,
  });

  const matrixA = useTransform(
    scrollYProgress,
    [0, 1],
    [scaleX, scaleX * scaleMultiplier],
  );
  const matrixD = useTransform(
    scrollYProgress,
    [0, 1],
    [scaleY, scaleY * scaleMultiplier],
  );

  const finalTranslateX =
    containerCenterX - svgCenterX * 0.7 * scaleX * scaleMultiplier;
  const finalTranslateY =
    containerCenterY - (svgCenterY / 2) * scaleY * scaleMultiplier;

  const matrixF = useTransform(
    scrollYProgress,
    [0, 1],
    [translateX, finalTranslateX],
  );
  const matrixG = useTransform(
    scrollYProgress,
    [0, 1],
    [translateY, finalTranslateY],
  );
  const transform = useMotionTemplate`matrix(${matrixA}, 0, 0, ${matrixD}, ${matrixF}, ${matrixG})`;

  React.useLayoutEffect(() => {
    if (svgPathRef.current) {
      svgPathRef.current.setAttribute(
        "transform",
        `matrix(${scaleX}, 0, 0, ${scaleY}, ${translateX}, ${translateY})`,
      );
      setIsMounted(true);
    }
  }, [scaleX, scaleY, translateX, translateY]);

  useMotionValueEvent(transform, "change", (latestValue) => {
    if (svgPathRef.current) {
      svgPathRef.current.setAttribute("transform", latestValue);
    }
  });
  return (
    <ScrollMaskContext.Provider
      value={{ svgWrapRef, svgPathRef, scrollYProgress, isMounted, viewbox }}
    >
      <div
        ref={scrollRef}
        className={cn(
          // "relative overflow-visible h-[1809px] p-[0_0_1206px]",
          "relative overflow-visible h-[300vh]",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </ScrollMaskContext.Provider>
  );
}

export function ScrollMaskWrap({
  className,
  style,
  ...props
}: HTMLMotionProps<"div">) {
  const { scrollYProgress, viewbox = [0, 0, 100, 100] } =
    useScrollMaskContext();
  const y = useTransform(scrollYProgress, [0, 1], [0, 1206]);
  return (
    <motion.div
      className={cn(
        // "relative overflow-hidden max-w-full",
        "sticky w-full top-0 overflow-hidden h-screen ",
        `[&>div]:aspect-[${viewbox[2]}/${viewbox[3]}]`,
        className,
      )}
      // style={{ y, ...style }}
      {...props}
    />
  );
}

export function ScrollMaskSvgWrap({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { svgWrapRef } = useScrollMaskContext();

  return (
    <div
      className={cn("absolute left-0  w-full", className)}
      ref={svgWrapRef}
      {...props}
    />
  );
}

export function SvgScrollMask({
  pathD,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { pathD: string }) {
  const { svgPathRef, isMounted, viewbox } = useScrollMaskContext();
  const viewBox = viewbox?.toString().replace(/,/g, " ");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="currentColor"
      width={"100%"}
      height={"100%"}
      className={cn("h-auto max-h-full origin-[0px_0px]", className)}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <defs>
        <clipPath id="scroll-mask">
          <path
            ref={svgPathRef}
            d={pathD}
            style={{ visibility: isMounted ? "visible" : "hidden" }}
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ScrollMaskContent({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("size-full place-self-center-safe", className)}
      style={{ clipPath: "url(#scroll-mask)", ...style }}
      {...props}
    />
  );
}
