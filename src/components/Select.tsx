import React, { useState } from "react";

function Select({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}) {
  const [opened, setOpened] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>("");
  const handleOpenOptions = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setOpened(!opened);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleOpenOptions(e);
    setCurrentValue(e.currentTarget.value);
  };

  return (
    <div>
      <div className="relative h-10 w-full min-w-[230px] border border-gray-300 rounded  py-2 px-3 bg-gray-100 dark:bg-gray-300 text-gray-400 leading-tight focus:outline-none focus:shadow-outline">
        {currentValue || placeholder}
        <button
          className="absolute top-[10px] right-2"
          onClick={(e) => handleOpenOptions(e)}
        >
          <svg
            className="w-4 h-4 fill-current text-gray-400"
            width="13px"
            height="13px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L7.29289 8.29289C6.90237 8.68342 6.90237 9.31658 7.29289 9.70711C7.68342 10.0976 8.31658 10.0976 8.70711 9.70711L12 6.41421L15.2929 9.70711C15.6834 10.0976 16.3166 10.0976 16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289L12.7071 4.29289ZM7.29289 15.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L16.7071 15.7071C17.0976 15.3166 17.0976 14.6834 16.7071 14.2929C16.3166 13.9024 15.6834 13.9024 15.2929 14.2929L12 17.5858L8.70711 14.2929C8.31658 13.9024 7.68342 13.9024 7.29289 14.2929C6.90237 14.6834 6.90237 15.3166 7.29289 15.7071Z"
              fill="currentColor"
            />
          </svg>
        </button>
        {opened && (
          <div className="absolute top-10 left-0 right-0 mx-auto z-10">
            <div
              onMouseLeave={(e) => handleOpenOptions(e)}
              className="bg-gray-100 dark:bg-gray-400 dark:text-gray-200 overflow-y-scroll w-full h-32 shadow-lg rounded shadow-gray-600 p-2"
            >
              {options.map((o, idx) => (
                <button
                  value={o}
                  key={idx.toString()}
                  onClick={(e) => handleClick(e)}
                  className="w-full h-8 flex p-1 my-2 rounded  border border-gray-300 hover:text-white hover:bg-primary cursor-pointer hover:border-primary"
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Select;
