import LinksBlock from "../components/LinksBlock";
import Logo from "../components/Logo";
import Section from "../components/Section";
import data from "../data/info-links.json";

function Footer() {
  return (
    <Section className="bg-gray-900">
      <div className="relative text-gray-300 p-4">
        <div className="grid sm:grid-cols-4">
          <div className="flex flex-col justify-start items-start">
            <Logo />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, dolorem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, dolorem?
            </p>
          </div>
          {data["info-links"].map((b, idx) => (
            <LinksBlock key={idx} title={b.title} links={b.links} />
          ))}
        </div>
        <div className="sm:absolute sm:right-0 sm:bottom-1 mt-4 ml-2 text-[12px] sm:text-sm opacity-70">
          {" "}
          © 2024 Eugen BestBoat All rights reserved.
        </div>
      </div>
    </Section>
  );
}

export default Footer;
