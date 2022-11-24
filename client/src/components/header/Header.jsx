import React from 'react'
import Lookist from "../../assets/lookist.png"

export default function Header() {
  return (
    <>
      <div className="mx-auto">
        <img
          src={Lookist}
          alt="Logo lookist" class="mx-auto object-contain scale-75"
        />
      </div>
      <div class="mx-10 mt-7 rounded-lg">
        <img src="https://source.unsplash.com/1300x530?night" alt="" class="object-contain min-w-full mx-auto rounded-xl" />
      </div>
    </>
  );
}