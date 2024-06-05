import React, { useEffect, useState } from "react";
import { RiMenu4Line, RiPaintBrushFill, RiSearchEyeLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { headerLinkData } from "../data/headerLinkData";

export default function Header() {
  const {pathname} = useLocation() //destructure pathname out of useLocation
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(false)
  }, [pathname])

  return (
    <header className="relative p-4  bg-white z-10">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <Link to={"/"} className="flex gap-1 items-center ">
          <RiPaintBrushFill className="text-primary text-xl md:txt-2xl" />
          <h1 className="text-primary font-bold text-xl md:text-2xl">
            Laundromat
          </h1>
        </Link>
        <nav className={`absolute md:static top-full ${showNav ? "left-0" : "left-full"} w-full md:w-max flex flex-col md:flex-row md:gap-2 md:justify-center flex-1`}
        >
          {
            headerLinkData.map(el => {
              return <Link key={el.id} to={el.url} className={`py-2 px-4 ${el.url === pathname ? 'bg-primary text-white' : 'text-primary bg-white'} hover:text-blue-100 hover:bg-primary md:rounded-lg`}
              > {el.title} </Link>
            })
          }
          
        </nav>
        <div className="flex items-center gap-2 ">
          <div className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-100 text-primary text-xl">
            <RiSearchEyeLine />
          </div>
          <div
            onClick={() => setShowNav(!showNav)}
            className="w-8 h-8 rounded-md flex md:hidden justify-center items-center cursor-pointer border border-blue-400 bg-blue-100 text-primary text-xl"
          >
            <RiMenu4Line />
          </div>
        </div>
      </div>
    </header>
  );
}
