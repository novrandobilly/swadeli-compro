import React from "react";
import { GrClose } from "react-icons/gr";
export default function Modal({ setShowModal }) {
  const handlePopUp = (e) => {
    if (e.target.id === "container" || e.target.id === "close")
      setShowModal(false);
  };
  return (
    <div
      id="container"
      onClick={handlePopUp}
      className="backdrop-blur-sm bg-white/30 fixed inset-0 z-20 flex justify-center items-center flex-col"
    >
      <div className="bg-white w-2/4 h-2/4 rounded-t-lg p-10 relative">
        <GrClose id="close" className="absolute right-4 top-4 cursor-pointer" />
        <div className="flex flex-col mt-3">
          <label for="name" className="font-semibold mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="bg-[#F8FAFC] focus:ring-blue-500 focus:border-blue-500 p-3 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label for="email" className="font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Name@email.com"
            className="bg-[#F8FAFC] focus:ring-blue-500 focus:border-blue-500 p-3 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label for="location" className="font-semibold mb-1">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Where would you like us to go?"
            className="bg-[#F8FAFC] focus:ring-blue-500 focus:border-blue-500 p-3 rounded-md"
          />
        </div>
      </div>
      <div className="cursor-pointer bg-[#1D493D] w-2/4 rounded-b-lg px-10 py-5 text-white font-semibold text-xl hover:bg-[#183d33]">
        Submit
      </div>
    </div>
  );
}
