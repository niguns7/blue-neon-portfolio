import React from 'react';
import { BsClipboardCheck } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { PiHandHeart } from "react-icons/pi";

// Dummy data for the counters, replace with your actual data
const counters = [
  { num: 230, text: 'Completed Projects', icon:< BsClipboardCheck size={40}/> },
  { num: 1068, text: 'Happy Clients', icon:< FiUserCheck size={40}/> },
  { num: 230, text: 'Perspective Clients', icon:< PiHandHeart size={40}/> },
];

const Count = () => {
  return (
    <section className="bg-[#100028] h-[840px] pt-[380px] overflow-hidden">
      <div className="container mx-auto px-4 w-4/5">
        <div className="flex flex-wrap justify-center -mx-3">
          {counters.map((counter, index) => (
            <div key={index} className="w-1/4 px-3 mb-6">
              <div className={`relative transform ${index % 2 === 1 ? 'mt-[-185px]' : ''}`}>
                <div className="bg-[#1a083d] absolute h-[255px] w-[255px] flex items-center justify-center text-center p-6 transform rotate-45">
                  <div className='flex gap-3 flex-col justify-center items-center -rotate-45'>
                    {/* Uncomment and use Image component here if needed */}
                    <i className='text-secondary'>{counter?.icon}</i>
                    <div className="mt-3 flex flex-col gap-2">
                    <h2 className="text-5xl font-bold text-white">{counter.num}</h2>
                    <p className="text-xs font-bold text-white">{counter.text}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2px] h-[636px] w-0 border-l border-t border-gray-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Count;
