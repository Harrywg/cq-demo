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
    { name: "base", value: base, showClass: "", hidePrefix: "" },
    { name: "sm", value: sm, showClass: "hidden sm:block", hidePrefix: "sm:" },
    { name: "md", value: md, showClass: "hidden md:block", hidePrefix: "md:" },
    { name: "lg", value: lg, showClass: "hidden lg:block", hidePrefix: "lg:" },
    { name: "xl", value: xl, showClass: "hidden xl:block", hidePrefix: "xl:" },
    {
      name: "2xl",
      value: xxl,
      showClass: "hidden 2xl:block",
      hidePrefix: "2xl:",
    },
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
          visibilityClass = nextBp ? `${nextBp.hidePrefix}hidden` : "";
        } else {
          // Other breakpoints: hidden by default, show at their breakpoint, hide at next
          const hideClass = nextBp ? ` ${nextBp.hidePrefix}hidden` : "";
          visibilityClass = `${bp.showClass}${hideClass}`;
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
