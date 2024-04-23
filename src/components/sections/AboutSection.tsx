import RoundedLogo from "../RoundedLogo";
import ScheduleBlock from "../ScheduleBlock";
import Section from "../Section";
import avatarOne from "/images/avatar1.png";
function AboutSection() {
  return (
    <Section>
    <div className="grid grid-rows-4">
      <div className="row-span-4 px-3 md:px-0 md:grid md:grid-cols-6">
        <div className="col-span-4 md:m-0 md:p-16">
          <h2 className="m-3 text-xl">
            A hospital is a health care institution providing patient
            treatment with specialized medical
          </h2>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus, suscipit. Iure rem ipsam fugiat exercitationem
            suscipit accusantium, officia officiis soluta ipsum amet odit
            nam eligendi dicta nostrum est reprehenderit repellendus!
          </p>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus, suscipit. Iure rem ipsam fugiat exercitationem
            suscipit accusantium, officia officiis soluta ipsum amet odit
            nam eligendi dicta nostrum est reprehenderit repellendus!
          </p>
          <div className="ml-2 flex items-center">
            <RoundedLogo src={avatarOne} alt="photo founder" />
            <div className="ml-2 inline-block">
              <h3 className="text-primary">John Doe</h3>
              <p className="p-0">Founder & CEO</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
         <ScheduleBlock />
        </div>
      </div>
    </div>
  </Section>
  )
}

export default AboutSection;