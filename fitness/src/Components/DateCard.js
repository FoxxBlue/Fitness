import React, { useState } from "react";

const DateCard = ({ day, abs, small, large }) => {
  const [isDone, setDone] = useState(false);

  const doneClick = () => {
    setDone(!isDone); // Toggle between true and false
  };

  return (
    <button 
      onClick={doneClick} 
      className={`w-[12.5vw] h-16 rounded-xl border-2 overflow-hidden flex flex-row ${isDone ? 'bg-[#51CCDC] bg-opacity-80 border-[#600DB5]' : 'bg-transparent border-[#51CCDC]'} duration-150`}
    >
      <div className={`border-2 border-t-transparent border-b-transparent border-l-transparent w-10 h-16 mr-1 text-center justify-center items-center flex ${isDone ? 'bg-white border-[#600DB5]' : 'bg-[#600DB5] border-[#51CCDC]'} duration-150`}>
        <p className={`${isDone ? 'text-black' : 'text-white'} font-bold text-xl`}>{day}</p>
      </div>
      <div className={`pl-4 py-2 text-md font-bold text-center justify-center items-center flex gap-2 w-24 ${isDone ? 'text-[#1F004B]' : 'text-[#51CCDC]'} duration-150`}>

        <p className="w-17 flex-wrap text-lg">{abs}</p>
        <div className="flex-col">
          <p className="w-17 flex-wrap">{small}</p>
          <p className="w-17 flex-wrap">{large}</p>
        </div>
      </div>
    </button>
  );
};

export default DateCard;
