import Section from "../components/Section";
import AboutSection from "../components/sections/AboutSection";
import aboutImage from "/images/about-1.jpg";
import PricingSection from "../components/sections/PricingSection";
import AboutInfoSection from "../components/sections/AboutInfoSection";
function About() {

  return (
    <>
      <AboutSection />
      <Section>
        <div className="grid md:grid-cols-2">
            <AboutInfoSection />
          <div className="hidden sm:block col-span-1 p-12 bg-text-theme">
            <img src={aboutImage} alt="woman torched screen" />
          </div>
        </div>
      </Section>
      <PricingSection />
    </>
  );
}

export default About;
