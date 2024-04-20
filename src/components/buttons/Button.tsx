import { ClassNameValue, twMerge } from "tailwind-merge";

function Button({ onClick, text, className}:{
    onClick: () => void;
    text: string;
    className?: ClassNameValue;
}) {
  return (
    <button className={twMerge("flex justify-center items-center font-semibold rounded-lg px-5 py-2 bg-primary cursor-pointer", className)} onClick={onClick}>{text}</button>
  )
}

export default Button;