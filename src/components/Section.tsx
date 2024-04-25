import { ClassNameValue, twMerge } from "tailwind-merge";

function Section({
  className,
  children,
}: {
  className?: ClassNameValue;
  children: React.ReactNode;
}) {
  return (
    <section
      className={twMerge(
        "bg-text-theme overflow-hidden",
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}

export default Section;
