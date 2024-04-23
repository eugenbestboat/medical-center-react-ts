import Section from "../components/Section";
import Button from "../components/buttons/Button";
import RoundedLogo from "../components/RoundedLogo";
import avatarOne from "/images/avatar1.png";
import avatarTwo from "/images/avatar2.png";
import avatarThree from "/images/avatar3.png";
import avatarFour from "/images/avatar4.png";
import aboutLogoOne from "/svgs/about-logo-1.svg";
import aboutLogoTwo from "/svgs/about-logo-2.svg";
import aboutLogoThree from "/svgs/about-logo-3.svg";
import DoctorOne from "/images/member1.jpg";
import DoctorTwo from "/images/member2.jpg";
import DoctorThree from "/images/member3.jpg";
import DoctorFour from "/images/member4.jpg";
import Card from "../components/Card";
import Form from "../components/Form";
import SectionHeader from "../components/SectionHeader";
import data from '../data/services.json';
import ServicesBlock from "../components/ServicesBlock";
import ScheduleBlock from "../components/ScheduleBlock";

function Home() {

  return (
    <div>
      <Section className="bg-hero bg-no-repeat bg-cover bg-center">
        <div className="px-5 md:px-0 py-12">
          <h1 className="text-4xl text-gray-600 md:px-0 md:mt-12 md:ml-12">
            Way to get happy. <br />
            Best promises.
          </h1>
          <h2 className="text-sm text-gray-600 md:text-4xl md:mt-5 md:ml-12 max-w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sit
            tempore ad natus neque! Fugiat mollitia consectetur quo sequi
            praesentium!
          </h2>
          <div className=" md:ml-12 mt-12 grid grid-cols-2 gap-x-6 max-w-96">
            <Button
              className="min-w-32 text-white"
              text="Appointment"
              onClick={() => console.log("clicked")}
            />
            <Button
              className="min-w-32 bg-light text-primary"
              text="About us"
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
      </Section>
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
          <div className="row-span-1 grid  md:pl-12 md:flex justify-center">
            <div className="col-span-1 flex flex-col justify-center items-center">
              <RoundedLogo
                classNameForImg="w-10 h-10"
                src={aboutLogoOne}
                alt=""
              />
              <h3 className="text-xl">Qualified Doctors</h3>
              <p className="text-[12px] p-1 md:text-base max-w-44 md:max-w-none  md:px-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, dolore?
              </p>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <RoundedLogo
                classNameForImg="w-10 h-10"
                src={aboutLogoTwo}
                alt=""
              />
              <h3 className="text-xl">24 Hours Service</h3>
              <p className="text-[12px] p-1 md:text-base max-w-44 md:max-w-none  md:px-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, dolore?
              </p>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center">
              <RoundedLogo
                classNameForImg="w-10 h-10"
                src={aboutLogoThree}
                alt=""
              />
              <h3 className="text-xl">Need Emergency</h3>
              <p className="text-[12px] p-1 md:text-base max-w-44 md:max-w-none  md:px-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, dolore?
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className=" hidden md:grid grid-rows-6 px-12">
          <SectionHeader title="Our department" subTitle="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              asperiores nemo, officia et recusandae architecto autem? Nobis,
              dignissimos impedit. Debitis?" />
          <div className="row-span-5">
          <ServicesBlock services={data["services"]} />
          </div>
        </div>
      </Section>
      <Section>
        <div className="hidden md:grid grid-rows-6 h-[750px]">
          <SectionHeader title="Meet our specialists" subTitle=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              asperiores nemo, officia et recusandae architecto autem? Nobis,
              dignissimos impedit. Debitis?" />
          <div className="row-span-5">
            <div className="my-12 mx-auto w-[90%] flex justify-around items-center">
              <Card
                srcImg={DoctorOne}
                title="Doctor Depper"
                subTitle="doctor"
                description="very best"
              />
              <Card
                srcImg={DoctorTwo}
                title="Doctor Depper"
                subTitle="doctor"
                description="very best"
              />
              <Card
                srcImg={DoctorThree}
                title="Doctor Depper"
                subTitle="doctor"
                description="very best"
              />
              <Card
                srcImg={DoctorFour}
                title="Doctor Depper"
                subTitle="doctor"
                description="very best"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
          <SectionHeader title="Make an appointment" subTitle="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              asperiores nemo, officia et recusandae architecto autem? Nobis,
              dignissimos impedit. Debitis?" />
          <div className="mx-auto md:max-w-[70%] mb-12">
            <Form textForSubmitBtn="Make an appointment" classNameForm="grid m-2 lg:grid-cols-3 gap-x-3" />
          </div>
      </Section>
      <Section>
      <SectionHeader className="hidden md:block" title="What people say?" subTitle="    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              asperiores nemo, officia et recusandae architecto autem? Nobis,
              dignissimos impedit. Debitis?" />
          <div className="hidden md:grid grid-cols-3 justify-items-center md:p-12 lg:px-48">
            <div className="grid justify-items-center">
              <RoundedLogo src={avatarTwo} alt="" />
              <h3>Lorem, ipsum.</h3>
              <div className="">Lorem ipsum dolor sit.</div>
              <p className="p-0 max-w-[90%] text-center text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="grid justify-items-center">
              <RoundedLogo src={avatarFour} alt="" />
              <h3>Lorem, ipsum.</h3>
              <div className="">Lorem ipsum dolor sit.</div>
              <p className="p-0 max-w-[90%] text-center text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="grid justify-items-center">
              <RoundedLogo src={avatarThree} alt="" />
              <h3>Lorem, ipsum.</h3>
              <div className="">Lorem ipsum dolor sit.</div>
              <p className="p-0 max-w-[90%] text-center text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
      </Section>
    </div>
  );
}

export default Home;
