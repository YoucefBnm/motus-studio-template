import { SHOWCASE_IMAGES } from "@/constants";
import {
  ScrollAnimation,
  ScrollTransform,
} from "./systaliko-ui/scroll-animations";
import { useIsMobile } from "@/hooks/use-mobile";

const SHOWCASE_COL_1 = SHOWCASE_IMAGES.slice(0, 4);
const SHOWCASE_COL_2 = SHOWCASE_IMAGES.slice(4, 8);
const SHOWCASE_COL_3 = SHOWCASE_IMAGES.slice(8, 12);

function HeroShowcaseMobile() {
  return (
    <div className="flex gap-2 bg-black self-center">
      <div className="size-full flex flex-col gap-2">
        {SHOWCASE_COL_1.map((imageUrl, index) => (
          <img
            key={index}
            className="aspect-720/480 inline-block align-middle h-auto max-h-full w-full max-w-full object-cover"
            width={720}
            height={480}
            src={imageUrl}
            alt="gallery item"
          />
        ))}
      </div>
      <div className="size-full flex flex-col gap-2">
        {SHOWCASE_COL_2.map((imageUrl, index) => (
          <img
            key={index}
            className="aspect-720/480 inline-block align-middle h-auto max-h-full w-full max-w-full object-cover"
            width={720}
            height={480}
            src={imageUrl}
            alt="gallery item"
          />
        ))}
      </div>
      <div className="size-full flex flex-col gap-2">
        {SHOWCASE_COL_3.map((imageUrl, index) => (
          <img
            key={index}
            className="aspect-720/480 inline-block align-middle h-auto max-h-full w-full max-w-full"
            width={720}
            height={480}
            src={imageUrl}
            alt="gallery item"
          />
        ))}
      </div>
    </div>
  );
}
function HeroShowcaseDesktop() {
  return (
    <ScrollAnimation className="bg-black overflow-hidden">
      <ScrollTransform yRange={[0, 384]} className="w-full h-screen">
        <ScrollTransform
          className="size-full flex  gap-2"
          rotateRange={[15, 0]}
          xRange={[100, 0]}
        >
          <ScrollTransform
            className="size-full flex flex-col gap-2"
            yRange={[-300, 0]}
          >
            {SHOWCASE_COL_1.map((imageUrl, index) => (
              <img
                key={index}
                className="aspect-720/480 inline-block align-middle h-auto max-h-full w-full max-w-full object-cover"
                width={720}
                height={480}
                src={imageUrl}
                alt="gallery item"
              />
            ))}
          </ScrollTransform>
          <ScrollTransform
            className="size-full flex flex-col gap-2"
            yRange={[-100, 0]}
          >
            {SHOWCASE_COL_2.map((imageUrl, index) => (
              <img
                key={index}
                className="aspect-720/480 inline-block align-middle h-auto max-h-full w-full max-w-full object-cover"
                width={720}
                height={480}
                src={imageUrl}
                alt="gallery item"
              />
            ))}
          </ScrollTransform>
          <ScrollTransform
            className="size-full flex flex-col gap-2"
            yRange={[-500, 0]}
          >
            {SHOWCASE_COL_3.map((imageUrl, index) => (
              <img
                key={index}
                className="aspect-720/480 inline-block align-middle h-auto max-h-full w-full max-w-full"
                width={720}
                height={480}
                src={imageUrl}
                alt="gallery item"
              />
            ))}
          </ScrollTransform>
        </ScrollTransform>
      </ScrollTransform>
    </ScrollAnimation>
  );
}

export function HeroShowcase() {
  const isMobile = useIsMobile();
  return isMobile ? <HeroShowcaseMobile /> : <HeroShowcaseDesktop />;
}
