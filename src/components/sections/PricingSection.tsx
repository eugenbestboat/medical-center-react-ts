import data from '../../data/price-plans.json';
import Section from '../Section';
import SectionHeader from '../SectionHeader';
import Button from '../buttons/Button';

function PricingSection() {
  return (
    
    <Section>
    <SectionHeader
      title="Show your pricing plans"
      subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum the industry's standard dummy text."
    />
    <div className="grid gap-2 p-2 sm:grid-cols-3 lg:px-16 2xl:flex justify-center">
      {data["price-plans"].map((p, index) => (
       <div key={index} className="text-sm p-3 text-center shadow hover:shadow-lg mb-3 2xl:max-w-[340px] 2xl:flex-1">
        <h3 className=" bg-primary text-gray-100 py-3">{p.title}</h3>
        <div className="text-xl py-3 md:text-3xl font-bold">{p.price}/mo <span className="text-sm">euro *</span></div>
        <h3>Doctors</h3>
        <div className="h-10 text-base flex flex-col justify-center">{p.doctors}</div>
        <h3>Patients</h3>
        <div className="h-7 text-base flex flex-col justify-center">{p.patients}</div>
        <Button className="mx-auto mb-3" text="Subscribe" onClick={() => {}} />
       </div>
      ))}
    </div>
  </Section>
  )
}

export default PricingSection;