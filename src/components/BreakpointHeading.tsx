import { createElement } from "react";

type BreakpointHeadingProps = {
  Element?: string;
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
  className?: string;
};

export default function BreakpointHeading({
  Element = "h3",
  base,
  sm,
  md,
  lg,
  xl,
  "2xl": xxl,
  className = "text-2xl mb-4",
}: BreakpointHeadingProps) {
  const breakpoints = [
    { name: "base", value: base, hideClass: "" },
    { name: "sm", value: sm, hideClass: "sm:hidden" },
    { name: "md", value: md, hideClass: "md:hidden" },
    { name: "lg", value: lg, hideClass: "lg:hidden" },
    { name: "xl", value: xl, hideClass: "xl:hidden" },
    { name: "2xl", value: xxl, hideClass: "2xl:hidden" },
  ];

  const provided = breakpoints.filter((bp) => bp.value !== undefined);

  return (
    <>
      {provided.map((bp, index) => {
        const isLast = index === provided.length - 1;
        const nextBp = isLast ? null : provided[index + 1];

        let visibilityClass = "";

        if (bp.name === "base") {
          // Base is visible by default, hide at next breakpoint
          visibilityClass = nextBp ? nextBp.hideClass : "";
        } else {
          // Other breakpoints: hidden by default, show at their breakpoint
          const showClass = `hidden ${bp.name}:block`;
          const hideClass = nextBp ? nextBp.hideClass : "";
          visibilityClass = `${showClass} ${hideClass}`.trim();
        }

        return createElement(
          Element,
          { key: bp.name, className: `${className} ${visibilityClass}`.trim() },
          bp.value
        );
      })}
    </>
  );
}
