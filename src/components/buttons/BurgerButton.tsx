import { useState } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";
import { AriaPressedType } from "../interfaces";

function BurgerButton({
  onClick,
  className,
  closedType,
}: {
  onClick: () => void;
  closedType?: AriaPressedType;
  className?: ClassNameValue;
}) {

  const [ariaPressed, setAriaPressed] = useState<AriaPressedType>("false");

  function handleClick() {
    onClick();
    setAriaPressed(ariaPressed === "false" ? "true" : "false");
  }
  return (
    <button
      className={twMerge(
        "group inline-flex w-12 h-12 bg-text-theme text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition",
        className
      )}
      aria-pressed={closedType || ariaPressed}
      onClick={handleClick}
    >
      <span className="sr-only">Menu</span>
      <svg
        className="w-6 h-6 fill-current pointer-events-none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="origin-center group-[[aria-pressed=true]]:rotate-[315deg] group-[[aria-pressed=true]]:[y:7] group-[[aria-pressed=true]]:[x:0] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
          y="2"
          x="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
        <rect
          className="origin-center group-[[aria-pressed=true]]:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
          y="7"
          width="16"
          height="2"
          rx="1"
        ></rect>
        <rect
          className="origin-center group-[[aria-pressed=true]]:rotate-[135deg] group-[[aria-pressed=true]]:[y:7] group-[[aria-pressed=true]]:[x:0] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
          y="12"
          width="9"
          height="2"
          rx="1"
        ></rect>
      </svg>
    </button>
  );
}

export default BurgerButton;
