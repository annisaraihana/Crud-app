import React from 'react'
import Lookist from "../../assets/lookist.png"

export default function Header() {
  return (
    <div className="mx-auto">
      <img
        src={Lookist}
        alt="Logo lookist" class="mx-auto object-contain scale-80"
      />
    </div>
  );
}