import { useState } from "react";
import ServiceLogo from "./ServiceLogo";
import { IService, ServicesType } from "./interfaces";
import { twMerge } from "tailwind-merge";
function ServicesBlock({ services }: { services: IService[] }) {
  const [currentTitle, setCurrentTitle] = useState<ServicesType>("Crutches");
  const colors:string[] = [
    "bg-blue-200",
    "bg-red-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-gray-200"
  ];

  return (
    <>
      <div className="grid grid-cols-2 smallest:gap-x-20 sm:gap-x-0 smallest:grid-cols-3 lg:grid-cols-6 xl:px-44  justify-items-center">
        {services.map((s, index) => (
          <button
            onClick={() => setCurrentTitle(s.title as ServicesType)}
            key={index}
          >
            <ServiceLogo
              isActivated={s.title === currentTitle}
              src={s.src}
              alt={s.title as string}
              className={twMerge(colors[index], "zoom-with-hover-110")}
            />
            <div className={twMerge(s.title === currentTitle && "text-primary font-semibold")}>
            {s.title}
            </div>
          </button>
        ))}
      </div>
      <div className="grid justify-items-center">
        {services
          .filter((s) => s.title === currentTitle)
          .map((s, index) => (
            <div className="grid sm:grid-cols-2" key={index}>
              <img className="p-4 sm:m-12" src={s.block?.src} alt={s.title} />
              <div className=" m-4 sm:m-12">
                <div className="m-3 text-3xl font-bold">
                  {s.block && s.block.title}
                  <div className="text-primary">{s.title}</div>
                </div>
                <div className="max-w-md">{s.block && s.block.description}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ServicesBlock;
