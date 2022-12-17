import React from "react";
import icon from "../assets/icon/videoicon.png";

function navbar() {
  return (
    <div className="bg-black h-[10vh] w-[100vw]">
      <div className="flex items-center w-[100vw]">
        <img src={icon} alt="" className="w-30 h-[72px] px-2 lg:px-8 " />
        <h className="text-white font-extrabold  text-[18px] lg:text-[22px] lg:mb-2">WE-CALL</h>
      </div>
    </div>
  );
}

export default navbar;
