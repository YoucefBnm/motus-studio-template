import { cn } from "@/lib/utils";

const bgMaskStyle = `
  relative [&>*]:relative [&>*]:z-10
  after:absolute after:inset-0 after:block
  after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,0.31,0,1)]
  after:bg-accent after:origin-[50%_100%] after:scale-y-0 hover:after:scale-y-100
  *:mix-blend-difference
`;

export function BgMask({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bg-mask"
      className={cn(bgMaskStyle, className)}
      {...props}
    />
  );
}
