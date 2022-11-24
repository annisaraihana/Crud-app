import React from "react";
/*import { Link } from "react-router-dom";*/
import Profile from "../../assets/profile.png";
import icnEdit from "../../assets/edit.png";
import icnDelete from "../../assets/delete.png";

export default function Post() {
  return (
    <body>
    <div class>
      <img
        class="w-[955px] h-[422px] top-[168px] mt-[22px] ml-[65px] mr-[39px] "
        src={Profile}
        alt=""
    />
        <div className="flex">
            <span class="text-putih text-[30px] font-[600] font-poppins non-italic mt-[22px] mb-[18px] ml-[78px] mr-[724px] drop-shadow-md">
                My Story
            </span>
            <a>
            <img className="mr-[17.5px] mt-[32.49px] cursor-pointer" 
            src={icnEdit}
            alt=""/></a>
            <a>
            <img className="w-[25px] h-[25px] mt-[32.49px] mr-[52.5px] cursor-pointer" 
            src={icnDelete}
            alt=""/></a>
        </div>
        <p className="text-putih text-justify h-[166px] w-[929px] ml-[78px] mr-[52px] font-playfair">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="postInfo ml-[78px] mr-[878px] mb-[50px]"> 
            <span className="text-[#939393]">1 hour ago</span>
        </div>
        
    </div>
    </body>
    ); 
}