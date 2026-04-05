"use client";
import { Client, CLIENTS } from "@/constants";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { BgMask } from "../systaliko-ui/bg-mask";

function ClientCard({
  className,
  name,
  stack,
  templateUrl,
  services,
  ...props
}: React.ComponentProps<"div"> & Client) {
  return (
    <BgMask
      className={cn(
        "flex gap-4 items-center p-4 border-b *:mix-blend-normal",
        className,
      )}
      {...props}
    >
      <h3 className="flex-1  text-xl font-medium">{name}</h3>
      <div className=" flex gap-2">
        {stack.map((item) => (
          <Badge
            className="capitalize rounded-full"
            key={item}
            variant={"ghost"}
          >
            {item}
          </Badge>
        ))}
      </div>

      <div className="hidden md:flex gap-2 flex-wrap justify-start">
        {services.map((item) => (
          <Badge
            variant={"secondary"}
            className="capitalize rounded-full"
            key={item}
          >
            {item}
          </Badge>
        ))}
      </div>
    </BgMask>
  );
}
export function Clients() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => setActiveItem(index);
  const handleMouseLeave = () => setActiveItem(null);
  return (
    <section className="pt-16 pb-8 px-8">
      <div className="container max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-medium">Proven ecommerce growth</h2>

        <div className="grid grid-cols-[20%_1fr_1fr] grid-rows-1 *:row-start-1 items-start">
          <div
            className="col-start-1 col-span-3"
            onMouseLeave={handleMouseLeave}
          >
            {CLIENTS.map((client, index) => (
              <ClientCard
                key={client.name}
                {...client}
                onMouseEnter={() => handleMouseEnter(index)}
              />
            ))}
          </div>
          <div className="pointer-events-none col-start-2 grid grid-cols-1 grid-rows-1 *:row-start-1 *:col-start-1 w-fit">
            {CLIENTS.map((client, index) => (
              <div
                key={client.name}
                className="w-[312px] max-w-full h-[416px] max-h-full overflow-hidden ease-out duration-700 transition-[clip-path]"
                style={{
                  clipPath:
                    activeItem === index
                      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                      : " polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
                }}
              >
                <div className="border shadow">
                  <img
                    src={client.templateUrl}
                    alt="client template"
                    width={312}
                    height={416}
                    loading="eager"
                    className="inline-block align-middle"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
