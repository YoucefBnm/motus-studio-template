import { SHOWCASE_IMAGES } from "@/constants";
import {
  ScrollAnimation,
  ScrollTransform,
} from "../systaliko-ui/scroll-animations";

const SHOWCASE_ROW_1 = SHOWCASE_IMAGES.slice(0, 4);
const SHOWCASE_ROW_2 = SHOWCASE_IMAGES.slice(4, 8);
const SHOWCASE_ROW_3 = SHOWCASE_IMAGES.slice(8, 12);

export function Showcase() {
  return (
    <section>
      <ScrollAnimation className="bg-black overflow-hidden">
        <ScrollTransform
          yRange={[50, 384]}
          className="w-full max-h-screen scale-135 -rotate-15"
        >
          <ScrollTransform className="flex flex-col  gap-2">
            <ScrollTransform
              xRange={[100, 0]}
              yRange={[0, -100]}
              className=" flex gap-2"
            >
              {SHOWCASE_ROW_1.map((imageUrl, index) => (
                <div key={index}>
                  <img
                    className="size-full inline-block align-middle"
                    width={720}
                    height={480}
                    src={imageUrl}
                    alt="gallery item"
                  />
                </div>
              ))}
            </ScrollTransform>
            <ScrollTransform
              xRange={[-120, 0]}
              yRange={[0, -100]}
              className="flex gap-2"
            >
              {SHOWCASE_ROW_2.map((imageUrl, index) => (
                <div key={index}>
                  <img
                    className="h-full w-auto max-w-full max-h-full inline-block align-middle"
                    width={720}
                    height={480}
                    src={imageUrl}
                    alt="gallery item"
                  />
                </div>
              ))}
            </ScrollTransform>
            <ScrollTransform
              xRange={[100, 0]}
              yRange={[0, -100]}
              className="flex gap-2"
            >
              {SHOWCASE_ROW_3.map((imageUrl, index) => (
                <div key={index}>
                  <img
                    className="size-full inline-block align-middle"
                    width={720}
                    height={480}
                    src={imageUrl}
                    alt="gallery item"
                  />
                </div>
              ))}
            </ScrollTransform>
          </ScrollTransform>
        </ScrollTransform>
      </ScrollAnimation>
    </section>
  );
}
