import { useLayoutEffect, useState } from "react";

export function useElementSize(ref: React.RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    function updateSize() {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
    }
    updateSize();
    const resizeObserver = new window.ResizeObserver(updateSize);
    resizeObserver.observe(element);
    return () => resizeObserver.disconnect();
  }, [ref]);
  return size;
}
