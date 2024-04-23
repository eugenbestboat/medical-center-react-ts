import { twMerge } from 'tailwind-merge';
import data from '../../data/about-info.json';
import Card from '../Card';


function AboutInfoSection() {
  const colors:string[] =  ["bg-purple-200", "bg-green-200", "bg-blue-200", "bg-red-200"];
  return (
    <div className="mx-auto col-span-1 grid sm:grid-cols-2 gap-5 md:gap-10 lg:p-12">
    {data["about-info"].map((card, index) => (
      <Card
        key={index}
        className="rounded bg-text-theme p-5 border-none"
        classNameForImage={twMerge("rounded-full overflow-hidden w-[100px] h-[100px] p-4 zoom-with-hover-110", colors[index])}
        classNameForTitle="mt-1 text-3xl font-semibold"
        srcImg={card.srcImg}
        description={card.description}
        title={card.title}
        subTitle=""
      />
    ))}
  </div>
  )
}

export default AboutInfoSection;