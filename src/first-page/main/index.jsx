import React from 'react';
import profilePic from '/pexels-moh-adbelghaffar-771742.jpg';

const ProfileCard = () => {
  return (
    <div className="relative bg-[#221F1F]  shadow-xl h-[500px] w-full">
      <div className="flex flex-col md:flex-row h-full w-full ">
        <div className=" p-20 flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-white text-lg mb-2">Hello, I'm Subin,</h2>
          <h1 className="text-[#A6BBCC] text-7xl font-bold mb-4">Full stack</h1>
          <h1 className="text-[#A6BBCC] text-7xl font-bold mb-4">Developer</h1>
          <a className=" text-white text-sm" href='#contact'> Contact Me</a>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="">
            <img 
              src={profilePic} 
              alt="Full Stack Developer Portrait" 
              className="object-cover rounded-[35px] w-[280px] h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
);

};

export default ProfileCard;
