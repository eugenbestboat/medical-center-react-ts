import { ClassNameValue, twMerge } from "tailwind-merge";

function SectionHeader({title, subTitle, className}:{
    title: string;
    subTitle: string;
    className?: ClassNameValue;
}) {
  return (
    <div className={twMerge("text-center md:row-span-2 flex flex-col justify-center items-center md:px-56", className)}>
    <h2 className="md:mt-12 md:mx-auto">{title}</h2>
    <p className="md:text-center">
     {subTitle}
    </p>
  </div>
  )
}

export default SectionHeader;