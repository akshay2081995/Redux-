import React from "react";

export const HomeContent = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 w-full h-screen justify-center items-center bg-[#B6DDFE]">
        <div className="h-96 pt-5 pl-8 ml-7 flex-1 justify-start items-start text-start">
            <h4 className="text-blue-700 text-2xl pb-5">
              WE ARE HERE FOR WEB DEVELOPER
            </h4>
            <h1 className="text-5xl pb-5 font-bold">Giving Future to your Web Developing</h1>
            <p className="w-[500px] pb-5 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nesciunt consequuntur maxime nobis voluptatem ea earum quae quia. Dignissimos, earum. Quas dolor quos delectus omnis nisi eos autem quibusdam deleniti?
            </p>
          <div className="flex justify-start items-start ">
            <button className="bg-[#1ADAAB] p-2 rounded-md text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-[#b6ddfe] flex justify-center h-2/3">
          <img
            src="https://cdn.worldvectorlogo.com/logos/redux.svg"
            alt="redux"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <footer className="bg-slate-300 text-white text-center py-4">
        <p className="text-black font-bold">&copy; 2024 REDUx. All rights reserved.</p>
      </footer>
    </div>
  );
};
