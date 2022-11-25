import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ibnu from "../../assets/ibnu.png"


export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar m-5 p-7 bg-abu-abu rounded-lg flex flex-col items-center">
      <div className="flex flex-col items-start">
        <span className="m-2 p-1 w-4/5 border-y-white border-y-2 text-md text-white font-semibold leading-5 text-center">Contact Us</span>
        <img
          src={Ibnu}
          alt="" className="mt-4"
        />
        <p className="px-2 mt-3 font-semibold">
          Want help?
        </p>
        <p className="px-2">
          We have friendly customer service resp on staff who are ready to help.
        </p>
        <a href="" className="flex space-x-2 mt-4 px-2">
          <i className="pt-1 fa-solid fa-envelope"></i>
          <p className="px-2">
            lookist2022@gmail.com
          </p>
        </a>
        <p className="px-2 mt-4 font-semibold">
          Openration Hours :
        </p>
        <p className="px-2">
          9am-6pm WIB
        </p>

      </div>
      <div className="flex flex-col items-center mt-3">
        <span className="m-2 p-1 w-4/5 border-y-white border-y-2 text-xs text-white font-semibold leading-5 text-center">CATEGORIES</span>
        <ul className="mb-8 list-none">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="inline-block w-1/2 mt-4 cursor-pointer">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
