import React from "react";
const Home = () => {
  return (
    <div className="">
      <div className="flex justify-center w-full px-20">
        <h1 className=" mt-16  text-gray-500 ">Frontend Assessment Task</h1>
        <div></div>
      </div>
      <div className="container text-white text-lg flex text-center items-center justify-center h-screen w-full ">
        <a
          href="/bangladesh"
          className="mr-16 font-light hover:font-bold hover:border hover:border-b-2 hover:pb-2 hover:text-5xl cursor-pointer text-4xl border--r-2"
        >
          Map of Bangladesh Drag
        </a>
        <div>|</div>
        <a
          href="/banner"
          className="ml-16 font-light hover:font-bold hover:border hover:border-b-2 hover:pb-2 hover:text-5xl cursor-pointer text-4xl"
        >
          Ramadan Time Countdown
        </a>
      </div>
    </div>
  );
};

export default Home;
