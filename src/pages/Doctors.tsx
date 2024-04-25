import { useState } from "react";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { ServicesType } from "../components/interfaces";
import data from '../data/services.json';
import { twMerge } from "tailwind-merge";
import Card from "../components/Card";

function Doctors() {

  const [currentService, setCurrentService] = useState<ServicesType>("Crutches");
  return (<Section className="min-h-screen">
    <div>
      <SectionHeader 
      title="Our specialists"
      subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas ea nam quaerat fugit laboriosam sequi, molestias rem harum incidunt!"
      />
    </div>
    <div className="grid grid-cols-2 smallest:grid-cols-3 gap-3 md:flex md:justify-center md:items-center md:gap-x-8 font-bold">
      {
        data["services"].map((s, idx) => (
         <button className={twMerge(s.title === currentService && "text-primary")} onClick={() => setCurrentService(s.title as ServicesType)} key={idx}>{s.title}</button>
        ))
      }
    </div>
    <hr />
    <div className="grid grid-cols-2 md:flex justify-center items-center">
      {
        data["services"].filter((s) => s.title === currentService).flatMap((s) => s.doctors).map((i, idx) => (
          i && (
            <Card
             srcImg={i.src}
             key={idx}
             title={i.title}
             subTitle={i.position}
             description={i.description}
             classNameForDescription="hidden"
            />
          )
        ))
      
      }
    </div>
  </Section>
  );
}

export default Doctors;
