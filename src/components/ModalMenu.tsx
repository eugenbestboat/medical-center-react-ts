import { ClassNameValue, twMerge } from "tailwind-merge";
import ContactsBlock from "./ContactsBlock";
import NavMenu from "./NavMenu";
import data from "../data/nav-links.json";
import ThemeBtn from "./ThemeBtn";

function ModalMenu({ handleToggleTheme, handleClickNavLink, className}:{
    handleToggleTheme: () => void;
    handleClickNavLink?: () => void;
    className?:ClassNameValue;
}) {


  return (
    <div className={twMerge("md:hidden pb-5 relative w-full h-auto min-h-[61vh] grid bg-text-theme", className)}>
      <div className="absolute top-5 right-5">
        <ThemeBtn onClick={handleToggleTheme} />
      </div>
      <div className="flex justify-center items-center">
        <NavMenu handleClickLink={handleClickNavLink} classNameForLinks="text-xl" className="grid grid-cols-2 gap-7 sm:grid-cols-3" links={data["links"]} />
      </div>
        <div className="grid justify-center items-center">
          <ContactsBlock className="grid grid-cols-1 gap-y-4 text-primary text-base smallest:text-xl font-bold" telephone="8 (800) 555-35-35" email="medical-center@example.com" />
        </div>
    </div>
  )
}

export default ModalMenu;