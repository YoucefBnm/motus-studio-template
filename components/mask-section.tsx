"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

/*
  - section initial style
      
      
      
      inset: '0px auto auto 0px',
      
      maxWidth: '1103px',
      width: '1103px',
      maxHeight: '603px',
      height: '603px',
      padding: '0px',

      transform: 'translate(0px, 0px)'
  - visible video
      
      
      transform: 'translate(0px, 1206px)'
*/
export function MaskSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 1206]);

  // path style initial: transform="matrix              (3.7732  ,0 ,0 ,3.7732,  155.24053,   26.87681)"
  // path style when video is visible: transform="matrix(93.7732 ,0 ,0 ,93.7732, -9293.64337, -2607.06277)"
  const matrixA = useTransform(scrollYProgress, [0, 1], [3.7732, 93.7732]);
  const matrixD = useTransform(scrollYProgress, [0, 1], [3.7732, 93.7732]);
  const matrixF = useTransform(
    scrollYProgress,
    [0, 1],
    [155.24053, -9293.64337],
  );
  const matrixG = useTransform(
    scrollYProgress,
    [0, 1],
    [26.87681, -2607.06277],
  );

  const transform = useMotionTemplate`matrix(${matrixA}, 0, 0, ${matrixD}, ${matrixF}, ${matrixG})`;

  const pathRef = React.useRef<SVGPathElement>(null);
  useMotionValueEvent(transform, "change", (latestValue) => {
    if (pathRef.current) {
      pathRef.current.setAttribute("transform", latestValue);
    }
  });

  return (
    <div
      className="pin-spacer place-self-auto z-auto float-none shrink m-0 inset-0 relative basis-auto overflow-visible w-[1103px] h-[1809px] p-[0_0_1206px] bg-accent"
      ref={scrollRef}
      // style="order: 0; place-self: auto; grid-area: auto; z-index: auto; float: none; flex-shrink: 1; display: block; margin: 0px; inset: 0px; position: relative; flex-basis: auto; overflow: visible; box-sizing: border-box; width: 1103px; height: 1809px; padding: 0px 0px 1206px;"
    >
      <motion.section
        id="section-mentorship"
        data-scroll-to="vertical"
        data-active="section-mentorship"
        data-active-direction="vertical"
        className="styles_maskpin__jSemN relative overflow-hidden bg-primary will-change-transform inset-[0_auto_auto_0] max-w-[1103px] w-[1103px] max-h-[603px] h-[603px] p-[0]"
        // style="translate: none; rotate: none; scale: none; inset: 0px auto auto 0px; margin: 0px; max-width: 1103px; width: 1103px; max-height: 603px; height: 603px; padding: 0px; transform: translate(0px, 0px);"

        style={{ y }}
      >
        <div className="styles_maskHo__erCZQ absolute size-full top-0 left-0 z-[2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            className="w-full h-full"
            // style="shape-rendering: geometricprecision;"
          >
            <defs>
              <clipPath id="myMask1">
                <path
                  d="M3.95414 67V0.499995H26.0891L41.2891 46.005L55.9191 0.499995H78.0541V67H62.3791V43.535C62.3791 32.895 62.8541 22.825 62.8541 22.825C62.8541 22.825 60.3841 32.61 57.2491 42.68L49.1741 67H33.4991L24.9491 42.395C21.7191 32.325 19.1541 22.635 19.1541 22.635C19.1541 22.635 19.6291 32.61 19.6291 43.25V67H3.95414ZM85.3202 0.499995H122.085V15.7H101.375V25.865H119.425V40.495H101.375V51.8H122.085V67H85.3202V0.499995ZM127.721 0.499995H164.486V15.7H143.776V25.865H161.826V40.495H143.776V51.8H164.486V67H127.721V0.499995ZM166.042 15.7V0.499995H209.932V15.7H196.062V67H180.007V15.7H166.042ZM16.0032 143L0.0431867 76.5H17.1432L22.0832 97.305C24.4582 107.66 25.8832 117.445 25.8832 117.445C25.8832 117.445 28.0682 107.755 31.1082 97.59L37.2832 76.5H50.2032L55.9032 96.26C58.8482 106.425 60.9382 116.02 60.9382 116.02C60.9382 116.02 62.2682 106.33 64.4532 95.88L68.9182 76.5H85.2582L69.2982 143H54.3832L43.1732 105.475L31.9632 143H16.0032ZM118.455 144.33C98.8847 144.33 83.5897 129.225 83.5897 109.845C83.5897 90.275 98.8847 75.17 118.455 75.17C138.025 75.17 153.225 90.275 153.225 109.845C153.225 129.225 138.025 144.33 118.455 144.33ZM100.12 109.845C100.12 120.675 108.1 129.13 118.455 129.13C128.715 129.13 136.695 120.675 136.695 109.845C136.695 98.92 128.715 90.37 118.455 90.37C108.1 90.37 100.12 98.92 100.12 109.845ZM182.007 93.41C186.567 103.005 190.272 112.315 190.272 112.315C190.272 112.315 189.702 102.34 189.702 91.7V76.5H205.377V143H191.127L181.152 123.145C176.497 113.645 172.792 104.335 172.792 104.335C172.792 104.335 173.457 114.31 173.457 124.95V143H157.782V76.5H173.552L182.007 93.41Z"
                  // style="transform-origin: 0px 0px; translate: none; rotate: none; scale: none;"
                  data-svg-origin="104.9875989370048 29.2659953892231"
                  // transform="matrix(3.7732,0,0,3.7732,155.24053,26.87681)"
                  ref={pathRef}
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div
          className="styles_background__LBwEr"
          style={{ clipPath: "url(#myMask1)" }}
          // style="clip-path: url(&quot;#myMask1&quot;); will-change: transform; backface-visibility: hidden;"
        >
          <video
            src="https://wonjyou.studio/videos/Coaching-Home.mp4"
            playsInline
            autoPlay
            loop
            muted
            className="max-w-full h-auto align-middle block"
            // style="position: absolute; width: auto; height: 100%; object-fit: cover; transform: translate(-50%, -50%); top: 50%; left: 50%; will-change: transform; backface-visibility: hidden;"
          ></video>
        </div>
      </motion.section>
    </div>
  );
}
