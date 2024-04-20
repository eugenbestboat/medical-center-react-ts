import { ClassNameValue, twMerge } from "tailwind-merge";
import { InfoLink } from "./interfaces";

function LinksBlock({
  title,
  links,
  className
}: {
  title: string;
  links: InfoLink[];
  className?: ClassNameValue;
}) {
  return (
    <div className={twMerge("capitalize", className)}>
      <h3>{title}</h3>
      <ul>
        {links.map((l, idx) => (
          <li key={idx.toString()}>
            {
              l.label ? (
               <>
                {l.label} 
            {l.content && ' : '}
            <a href={l.href}>{l.content}</a>
               </>
              ) : (
                <a href={l.href}>{l.content}</a>
                
              )
            }
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinksBlock;
