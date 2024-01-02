import React from "react";
import Header from "../ui/Header";
import FREELANCER_PIC from "../assets/free.jpg";
function Home() {
  return (
    <div className=" bg-secondary-0">
      <Header />
       <div className="relative">
        <h1 className="text-white absolute top-48 right-52 lg:text-5xl text-2xl">به سایت فریلنسر خوش آمدید</h1>
       <img className="bg-cover max-h-[calc(100vh-4.5rem)] w-full" src={FREELANCER_PIC} alt="freelancer home" />
       </div>
    </div>
  );
}

export default Home;
