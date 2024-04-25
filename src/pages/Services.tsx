import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import ServicesBlock from "../components/ServicesBlock";
import data from "../data/services.json";

function Services() {
  return (
    <Section className="min-h-screen">
        <SectionHeader subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum hic voluptates commodi dolorem ullam accusantium pariatur voluptas, suscipit neque." title="Our Services"/>
        <div className="">
          <ServicesBlock services={data["services"]} />
        </div>
    </Section>
  )
}

export default Services;