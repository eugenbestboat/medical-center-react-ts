import { ClassNameValue, twMerge } from "tailwind-merge";
import { IBlog } from "./interfaces";
import { Link } from "react-router-dom";
import { capitalizeFirstWord } from "../utils/utils";

function Blog({
  src,
  href,
  title,
  description,
  className,
}: IBlog & { className?: ClassNameValue }) {
  return (
    <div className={twMerge("relative p-3 bg-text-theme grid gap-y-2", className)}>
      <img className="zoom-with-hover-110" src={src} alt="blog image" />
      <h3>{capitalizeFirstWord(title)}</h3>
      <p>{description}</p>
      { href && <Link to={href} className="absolute bottom-3 right-3 font-bold">read more...</Link> }
    </div>
  );
}

export default Blog;
