import { cn } from "@/lib/utils";

const bgMaskStyle = `
  relative [&>*]:relative [&>*]:z-10
  after:absolute after:inset-0 after:block
  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,0.31,0,1)]
  after:bg-accent after:origin-[50%_100%] after:scale-y-0 hover:after:scale-y-100
`;

interface BgMaskProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}
export function BgMask({
  className,
  as: Component = "div",
  ...props
}: BgMaskProps) {
  return <Component className={cn(bgMaskStyle, className)} {...props} />;
}
