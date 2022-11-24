import React from 'react';
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
import Image from "../../assets/profpic.jpeg";


export default function Sidebar() {
  return (
    <div className="absolute right-0 place-items-end mt-11 lex flex-col min-h-full p-[10px] w-[338px] h-80 mr-11 overflow-y-auto overflow-x-hidden bg-biru-abu rounded-3xl">
      <div className="flex flex-col items-center">
        <span className="sidebarTitle m-5  left-[1154px] top-[200px] text-center font-playfair font-normal text-judul2 text-white">ABOUT ME</span>
        <img
          src={Image}
          alt="" class="w-[225px] h-[225px] left-[1085px] top-[234px] my-0 rounded-3xl object-cover"
        />
        <p className="p-6 text-center h-[153px] left-[1095px] top-[524px] font-playfair font-normal text-teks1 text-white">
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
    </div>
  );
}