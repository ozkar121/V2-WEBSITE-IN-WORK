/** Decorative corner brackets — wrap parent with `relative` */
export const CornerBrackets = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
  const dim = size === "lg" ? "w-[18px] h-[18px]" : "w-[14px] h-[14px]";
  const base = `absolute pointer-events-none z-[3] opacity-60 ${dim}`;
  return (
    <>
      <span className={`${base} top-0 left-0 border-t border-l border-jade -mt-px -ml-px`} />
      <span className={`${base} top-0 right-0 border-t border-r border-jade -mt-px -mr-px`} />
      <span className={`${base} bottom-0 left-0 border-b border-l border-jade -mb-px -ml-px`} />
      <span className={`${base} bottom-0 right-0 border-b border-r border-jade -mb-px -mr-px`} />
    </>
  );
};
