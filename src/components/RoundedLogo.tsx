import { ClassNameValue, twMerge } from "tailwind-merge";

function RoundedLogo({src, alt, classNameForImg, className}:{
    src:string; alt:string; classNameForImg?:ClassNameValue; className?:ClassNameValue;
}) {
  return (
    <div className={twMerge("m-2 w-20 h-20 flex justify-center items-center rounded-full bg-gray-200 overflow-hidden zoom-with-hover-125", className)}>
        <img className={twMerge("w-full h-full", classNameForImg)} src={src} alt={alt} />
    </div>
  )
}

export default RoundedLogo;

