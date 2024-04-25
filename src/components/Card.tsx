import { ClassNameValue, twMerge } from "tailwind-merge";

function Card({ srcImg, title, subTitle, description, className, classNameForImage, classNameForTitle, classNameForDescription }:{
    srcImg:string;
    title?:string;
    subTitle?:string;
    description?:string;
    className?:ClassNameValue;
    classNameForImage?:ClassNameValue;
    classNameForTitle?:ClassNameValue;
    classNameForDescription?:ClassNameValue;
}) {
  return (
    <div className={twMerge("flex flex-col gap-2 justify-center items-center p-3", className)}>
        <div className={twMerge(classNameForImage)}>
            <img className="w-full h-full" src={srcImg} alt="card img" />
        </div>
        <div className="h-20 grid justify-items-center">
        <div className={twMerge("text-lg font-medium", classNameForTitle)}>{title}</div>
        <div className="text-sm">{subTitle}</div>
        <div className={twMerge("font-semibold", classNameForDescription)}>{description}</div>

        </div>
    </div>
  )
}

export default Card;