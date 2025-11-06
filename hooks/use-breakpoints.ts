import { useState, useEffect } from "react";

type Breakpoint = "mini" | "small" | "table" | "medium" | "regular" | "large";

const breakpoints: Record<Breakpoint, string> = {
  mini: "(max-width: 380px)",
  small: "(max-width: 610px)",
  table: "(max-width: 900px)",
  medium: "(max-width: 1050px)",
  regular: "(max-width: 1260px)",
  large: "(max-width: 1600px)",
};

export const useBreakpoints = (): Breakpoint | "default" => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint | "default">(
    getBreakpoint(),
  );

  useEffect(() => {
    const mediaQueryLists = (Object.keys(breakpoints) as Breakpoint[]).map(
      (key) => ({
        key,
        mql: window.matchMedia(breakpoints[key]),
      }),
    );

    const handleChange = () => {
      setBreakpoint(getBreakpoint());
    };

    mediaQueryLists.forEach(({ mql }) =>
      mql.addEventListener("change", handleChange),
    );

    return () => {
      mediaQueryLists.forEach(({ mql }) =>
        mql.removeEventListener("change", handleChange),
      );
    };
  }, []);

  function getBreakpoint(): Breakpoint | "default" {
    for (const key of Object.keys(breakpoints) as Breakpoint[]) {
      if (window.matchMedia(breakpoints[key]).matches) {
        return key;
      }
    }
    return "default";
  }

  return breakpoint;
};
