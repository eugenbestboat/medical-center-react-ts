import Form from "../components/Form";
import LinksBlock from "../components/LinksBlock";
import Section from "../components/Section";
import data from '../data/info-links.json';

function Contacts() {
  return (
    <Section className="bg-gray-400 dark:bg-gray-600 relative min-h-screen p-3 flex- flex-col justify-between items-center">
      <div className="absolute left-0 top-0 w-full h-full bg-fixed mix-blend-multiply bg-heroWatches bg-no-repeat bg-cover bg-center blur-sm z-0 bg-text-theme" />
      <div className="relative top-0 left-0 z-1 grid grid-rows-5">
        <div className="row-span-1 text-white flex justify-center items-start">
          {
            data["info-links"].filter(b => b.title === 'contacts').map((b, idx) => (
              <LinksBlock
              className="md:text-2xl"
              key={idx}
              title={b.title}
              links={b.links}
              />
            ))
          }
        </div>
        <div className="row-span-3 grid mb-4">
          <Form textForSubmitBtn="Send message" classNameForm="mx-auto lg:min-w-[500px]"  />
        </div>

        <div className="row-span-1 grid">
          <div className="col-span-4">
            <iframe
              className="w-full min-h-[200px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74364.53843510957!2d18.523058652407197!3d54.37656103493631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd737d4d75124f%3A0x6b391c2c2e2a02d3!2sMedical%20University%20of%20Gda%C5%84sk!5e0!3m2!1sen!2sby!4v1713190816209!5m2!1sen!2sby"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contacts;
