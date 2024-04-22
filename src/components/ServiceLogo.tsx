import { ClassNameValue, twMerge } from "tailwind-merge";

function ServiceLogo({
  src,
  alt,
  isActivated,
  className,
  classNameForImg,
}: {
  src: string;
  alt: string;
  isActivated?:boolean;
  className?: ClassNameValue;
  classNameForImg?: ClassNameValue;
}) {
  return (
    <div
      className={twMerge(
        "relative w-36 h-28 rounded-lg bg-primary flex justify-center items-center",
        isActivated && "text-red-700",
        className
      )}
    >
        <img
          className={twMerge("w-12 h-12", classNameForImg)}
          src={src}
          alt={alt}
        />
        {
          isActivated && (
            <div className="absolute w-[90%] h-[90%] border-[3px] rounded-lg border-primary "></div>
          )
        }
    </div>
  );
}

export default ServiceLogo;
