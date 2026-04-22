interface MarqueeProps {
  items: string[];
}

export const Marquee = ({ items }: MarqueeProps) => {
  // Duplicate the array to create seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden bg-bg-3 border-y border-jade-soft py-3.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`px-10 text-[0.65rem] uppercase ${
              item === "·" ? "text-jade px-0" : "text-fg-3"
            }`}
            style={{ letterSpacing: "0.28em" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
