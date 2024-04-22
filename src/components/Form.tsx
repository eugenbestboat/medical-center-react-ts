import { ClassNameValue, twMerge } from "tailwind-merge";
import Select from "./Select";
import Button from "./buttons/Button";

function Form({textForSubmitBtn, classNameForm }: {
  textForSubmitBtn?:string;
  classNameForm?: ClassNameValue }) {

  const departments = [
    "Dental care",
    "Neurology",
    "Crutches",
    "Cardiology",
    "Pulmonology",
    "X-Ray",
  ];
  const doctors = [
    "Dr. John Doe",
    "Dr. Jane Doe",
    "Dr. John Smith",
    "Dr. Jane Smith",
    "Dr. John Johnson",
    "Dr. Jane Johnson",
    "Dr. John Brown",
    "Dr. Jane Brown",
  ];

  return (
    <form action="" className={twMerge("grid gap-y-5 text-lg", classNameForm)}>
      <div className="grid gap-y-5">
        <input
          className="input-theme"
          type="text"
          name="name"
          placeholder="John Doe"
        />
        <input
          className="input-theme"
          type="tel"
          name="tel"
          placeholder="+000 00 000000"
        />
      <Select options={departments} placeholder="Select Departments"/>
      </div>
      <div className="grid gap-y-5">
        <input
          className="input-theme"
          type="email"
          name="email"
          placeholder="example@mail.com"
        />
        <input
          className="input-theme text-gray-400"
          type="date"
          name="date"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
      <Select options={doctors} placeholder="Select Doctors"/>

      </div>
      <textarea
        className="mt-5 md:mt-0 w-full h-48 p-5 outline-none bg-gray-100 dark:bg-gray-300 rounded"
        placeholder="Write here..."
        name="text"
      />
      <Button
              text={textForSubmitBtn || "Submit"}
              onClick={() => {}}
              className="text-xl text-white mt-3 mx-auto lg:mx-0 md:min-w-[270px] max-w-[330px] p-4"
            />
    </form>
  );
}

export default Form;
