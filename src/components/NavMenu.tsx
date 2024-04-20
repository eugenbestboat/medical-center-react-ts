import { ClassNameValue, twMerge } from "tailwind-merge";
import { INavLink } from "./interfaces";
import { Link } from "react-router-dom";

function NavMenu({
  links,
  className,
  classNameForLinks,
  handleClickLink,
}: {
  links: INavLink[];
  className?: ClassNameValue;
  classNameForLinks?: ClassNameValue;
  handleClickLink?: () => void;
}) {
  return (
    <nav
      className={twMerge(
        "w-4/5 list-none flex justify-around items-center capitalize font-semibold",
        className
      )}
    >
      {links.map((l, idx) => (
        <Link
          key={idx.toString()}
          onClick={handleClickLink}
          className={twMerge(classNameForLinks)}
          to={`/${l.name !== "home" ? l.name : ""}`}
        >
          {l.name}
        </Link>
      ))}
    </nav>
  );
}

export default NavMenu;
