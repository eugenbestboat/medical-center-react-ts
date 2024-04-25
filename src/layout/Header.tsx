import ContactsBlock from '../components/ContactsBlock';
import Logo from '../components/Logo';
import ModalMenu from '../components/ModalMenu';
import NavMenu from '../components/NavMenu';
import Section from '../components/Section';
import ThemeBtn from '../components/ThemeBtn';
import BurgerButton from '../components/buttons/BurgerButton';
import Button from '../components/buttons/Button';
import links from "../data/nav-links.json";

function Header({toggleTheme, toggleModal, isModalRendered }:{
    toggleTheme:()=> void;
    toggleModal:()=> void;
    isModalRendered: boolean;
}) {

  return (
    <Section>
    <div className="container">
      {isModalRendered && (
        <ModalMenu
          handleClickNavLink={toggleModal}
          handleToggleTheme={toggleTheme}
          className="absolute top-[72px] left-0 z-10"
        />
      )}
      <div className="hidden md:flex justify-between items-center">
        <div className="pl-4">
          <Logo />
        </div>
        <div className="flex justify-around items-center gap-x-5 text-sm">
          <ContactsBlock
            telephone="+380 123 456 789"
            email="medical-center@example.com"
          />
          <span className="w-12 h-9 pt-2">
            <ThemeBtn onClick={toggleTheme} />
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center p-2">
        <BurgerButton
          closedType={isModalRendered ? "true" : "false"}
          className="text-primary ml-2 md:hidden border border-primary"
          onClick={toggleModal}
        />
        <div className="w-2/3 pl-4 hidden h-20 md:flex justify-between items-center">
          <NavMenu links={links["links"]} />
        </div>
        <Button
          className="bg-rose-500 text-light text-sm md:text-base md:p-2 max-w-36 py-1 m-1 md:max-w-none"
          onClick={() => console.log("clicked")}
          text="Book and  Appointment"
        />
      </div>
    </div>
  </Section>
  )
}

export default Header;