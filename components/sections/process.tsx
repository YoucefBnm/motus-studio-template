import {
  CardsStackContainer,
  CardSticky,
} from "@/components/systaliko-ui/cards-stack";
import {
  ChartLineIcon,
  ContainerIcon,
  FileCodeIcon,
  SearchCheckIcon,
  SplinePointerIcon,
} from "lucide-react";

const process_phases = [
  {
    id: "phase-discovery",
    title: "Discovery & Research",
    description:
      "We dive deep into your goals and audience. We understand your business, your brand, and your target market.",
    icon: SearchCheckIcon,
  },
  {
    id: "phase-design",
    title: "Design & Prototyping",
    description:
      "We craft user‑centered wireframes and visuals. We work closely with you to refine your design and bring it to life.",
    icon: SplinePointerIcon,
  },
  {
    id: "phase-development",
    title: "Development & Implementation",
    description:
      "build scalable, maintainable code, and deliver seamless user experiences. We work closely with you to ensure your project is successful.",
    icon: FileCodeIcon,
  },
  {
    id: "phase-deploy",
    title: "Deployment & Maintenance",
    description:
      "We launch smoothly and ensure everything runs flawlessly. We work closely with you to ensure your project is successful.",
    icon: ContainerIcon,
  },
  {
    id: "phase-optimize",
    title: "Optimization & Growth",
    description:
      "We monitor performance and iterate for growth, engagement, and customer satisfaction. We work closely with you to ensure your project is successful.",
    icon: ChartLineIcon,
  },
];
export function Process() {
  return (
    <section className="py-12 px-8">
      <CardsStackContainer>
        {process_phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <CardSticky
              key={phase.id}
              incrementZ={0}
              incrementY={32}
              index={index + 1}
              className="bg-card/80 mx-auto backdrop-blur border-t border-border/40 p-8 max-w-5xl flex items-center justify-between flex-wrap gap-8 item-center"
            >
              <h2 className="text-2xl tracking-tight font-semibold">
                [
                <span className="inline-block leading-none align-bottom pb-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                ]
              </h2>

              <div>
                <Icon className=" size-12 stroke-[1.5] text-primary" />
              </div>

              <div className="md:basis-1/3 space-y-2">
                <h3 className="text-2xl font-medium">{phase.title}</h3>
                <p className="text-muted-foreground max-w-prose">
                  {phase.description}
                </p>
              </div>
            </CardSticky>
          );
        })}
      </CardsStackContainer>
    </section>
  );
}
