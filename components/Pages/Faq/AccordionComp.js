import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

export default function AccordionComp({ title, id, index, answer, setIndex }) {
  const handleSetIndex = (id) => {
    if (index === id) setIndex(false);
    else index !== id && setIndex(id);
  };
  return (
    <>
      <div
        className="flex group cursor-pointer w-3/4 mx-auto h-16 justify-between items-center p-2 mt-2 rounded-lg bg-[#FED002] "
        onClick={() => {
          handleSetIndex(id);
        }}
      >
        <div className="flex group cursor-pointer px-3">
          {index !== id ? (
            <AiOutlineDown className="my-auto text-[#A1A1A1] font-extrabold" />
          ) : (
            <AiOutlineUp className="my-auto text-[#A1A1A1] font-extrabold" />
          )}

          <div className="ml-5 text-[16px]">{title}</div>
        </div>
      </div>
      {index === id && (
        <div className=" w-3/4 mx-auto mt-2 p-5 pl-[3.4rem] border-2  border-[#FED002] rounded-lg ">
          {answer}
        </div>
      )}
    </>
  );
}
