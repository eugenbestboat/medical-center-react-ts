import { ClassNameValue, twMerge } from "tailwind-merge";

function ScheduleBlock({ className }: { className?: ClassNameValue }) {
  return (
    <div
      className={twMerge(
        "my-3 md:mt-24 mx-auto text-sm min-w-[220px] sm:min-w-[270px] border border-primary p-2 grid gap-y-1",
        className
      )}
    >
      <div className="py-1 flex justify-between px-2 items-center border-b border-gray-200">
        <span>Monday</span>
        <span>8:00am-7:00pm</span>
      </div>
      <div className=" flex justify-between px-2 items-center border-b border-gray-200">
        <span>Tuesday</span>
        <span>9:00am-6:00pm</span>
      </div>
      <div className="flex justify-between px-2 items-center border-b border-gray-200">
        <span>Wednesday</span>
        <span>9:00am-6:00pm</span>
      </div>
      <div className="flex justify-between px-2 items-center border-b border-gray-200">
        <span>Thursday</span>
        <span>8:00am-7:00pm</span>
      </div>
      <div className="flex justify-between px-2 items-center border-b border-gray-200">
        <span>Friday</span>
        <span>8:00am-7:00pm</span>
      </div>
      <div className="flex justify-between px-2 items-center border-b border-gray-200">
        <span>Saturday</span>
        <span>9:00am-5:00pm</span>
      </div>
      <div className="flex justify-between px-2 items-center border-b border-gray-200">
        <span>Sunday</span>
        <span>9:00am-3:00pm</span>
      </div>
      <div className="p-3 text-base sm:text-xl">
        Call Now
        <div>
          <svg
            className="mr-3 inline-block fill-current w-5 h-5"
            enableBackground="new 0 0 512.021 512.021"
            viewBox="0 0 512.021 512.021"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m367.988 512.021c-16.528 0-32.916-2.922-48.941-8.744-70.598-25.646-136.128-67.416-189.508-120.795s-95.15-118.91-120.795-189.508c-8.241-22.688-10.673-46.108-7.226-69.612 3.229-22.016 11.757-43.389 24.663-61.809 12.963-18.501 30.245-33.889 49.977-44.5 21.042-11.315 44.009-17.053 68.265-17.053 7.544 0 14.064 5.271 15.645 12.647l25.114 117.199c1.137 5.307-.494 10.829-4.331 14.667l-42.913 42.912c40.482 80.486 106.17 146.174 186.656 186.656l42.912-42.913c3.837-3.837 9.36-5.466 14.667-4.331l117.199 25.114c7.377 1.581 12.647 8.101 12.647 15.645 0 24.256-5.738 47.224-17.054 68.266-10.611 19.732-25.999 37.014-44.5 49.977-18.419 12.906-39.792 21.434-61.809 24.663-6.899 1.013-13.797 1.518-20.668 1.519zm-236.349-479.321c-31.995 3.532-60.393 20.302-79.251 47.217-21.206 30.265-26.151 67.49-13.567 102.132 49.304 135.726 155.425 241.847 291.151 291.151 34.641 12.584 71.867 7.64 102.132-13.567 26.915-18.858 43.685-47.256 47.217-79.251l-95.341-20.43-44.816 44.816c-4.769 4.769-12.015 6.036-18.117 3.168-95.19-44.72-172.242-121.772-216.962-216.962-2.867-6.103-1.601-13.349 3.168-18.117l44.816-44.816z"></path>
              <path d="m496.02 272c-8.836 0-16-7.164-16-16 0-123.514-100.486-224-224-224-8.836 0-16-7.164-16-16s7.164-16 16-16c68.381 0 132.668 26.628 181.02 74.98s74.98 112.639 74.98 181.02c0 8.836-7.163 16-16 16z"></path>
              <path d="m432.02 272c-8.836 0-16-7.164-16-16 0-88.224-71.776-160-160-160-8.836 0-16-7.164-16-16s7.164-16 16-16c105.869 0 192 86.131 192 192 0 8.836-7.163 16-16 16z"></path>
              <path d="m368.02 272c-8.836 0-16-7.164-16-16 0-52.935-43.065-96-96-96-8.836 0-16-7.164-16-16s7.164-16 16-16c70.58 0 128 57.42 128 128 0 8.836-7.163 16-16 16z"></path>
            </g>
          </svg>
          <a className="text-primary font-semibold" href="tel:+380123456789">
            +38 012 34 56 789
          </a>
        </div>
      </div>
    </div>
  );
}

export default ScheduleBlock;
