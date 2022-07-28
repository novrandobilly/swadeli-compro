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
      className="fixed inset-0 z-20 flex flex-col items-center justify-center backdrop-blur-sm bg-white/30"
    >
      <div className="relative overflow-scroll w-3/4 lg:w-2/4 p-8  lg:p-10 bg-white rounded-t-lg h-3/5">
        <GrClose id="close" className="absolute cursor-pointer right-4 top-4" />
        <div className="flex flex-col mt-3">
          <label htmlFor="name" className="mb-1 font-semibold">
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
          <label htmlFor="email" className="mb-1 font-semibold">
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
          <label htmlFor="location" className="mb-1 font-semibold">
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
      <div className="cursor-pointer bg-[#1D493D]  w-3/4 lg:w-2/4 rounded-b-lg px-10 py-5 text-white font-semibold text-xl hover:bg-[#183d33]">
        Submit
      </div>
    </div>
  );
}
