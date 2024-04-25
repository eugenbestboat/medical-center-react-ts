import Blog from "../components/Blog";
import LinksBlock from "../components/LinksBlock";
import Section from "../components/Section";
import data from "../data/blogs.json";
import links from "../data/blog-links.json";

function Blogs() {
  return (
    <Section>
      <div className="flex justify-between smallest:min-h-[800px]">
        <div className="w-1/4 hidden md:flex flex-col justify-start gap-2">
          <div className="">
          <h1 className="text-3xl font-bold">Blogs</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sit
            tempore ad natus neque! Fugiat mollitia consectetur quo sequi
            praesentium!
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sit
            tempore ad natus neque! Fugiat mollitia consectetur quo sequi
            praesentium!
          </p>

          </div>
          <div className="flex flex-col items-start pl-12">
            {links["blog-links"].map((b, idx) => (
              <LinksBlock key={idx} title={b.title} links={b.links} />
            ))}
          </div>
        </div>
        <div className="max-h-[680px] overflow-y-auto md:w-3/4 grid md:grid md:grid-cols-2 md:p-3 md:gap-3">
          {data["blogs"].map((b, idx) => (
            <Blog
              key={idx}
              src={b.src}
              title={b.title}
              description={b.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Blogs;
