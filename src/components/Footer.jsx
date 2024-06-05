import React from 'react'
import { machine_washinner } from '../assets/images'
import { Link } from 'react-router-dom'
import { RiPaintBrushFill } from 'react-icons/ri'
import { footerLinkData } from '../data/footerLinkData'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io'

export default function Footer() {
  return (
    <footer className="bg-primary py-20 px-4 relative">
      <img src={machine_washinner} alt="machine_washinner" className="absolute left-0 top-0 w-full h-full object-cover opacity-15" />
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative">
        <div className="col-span-2 flex flex-col gap-2">
          <Link to={"/"} className="flex gap-3 items-center ">
            <RiPaintBrushFill className="text-white text-2xl md:text-4xl" />
            <h1 className="text-white font-bold text-2xl md:text-4xl">
              Laundromat
            </h1>
          </Link>
          <p className="text-white text-base md:text-lg leading-loose py-2">Laudromat is your one stop shop for dry cleaning service lovers out there Who love having the neatest and iron clothes in the room</p>
          <div className="flex gap-4 text-lg md:text-2xl text-white opacity-90">
            <Link href={'https://www.facebook.com/chedres'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoFacebook /></Link>
            <Link href={'https://www.twitter.com/chedres'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoTwitter /></Link>
            <Link href={'https://www.instagram.com/chedres'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoInstagram /></Link>
            <Link href={'https://www.youtube.com/chedres'} target="_blank" rel="noopener noreferrer" className="leading-loose"><IoLogoYoutube /></Link>
          </div>
        </div>
        <div className="flex flex-col md:pt-4">
          {
            footerLinkData.slice(0, 4).map(el => <Link key={el.id} to={el.link} className='text-white text-base md:text-lg hover:translate-x-2 py-1 px-2'>{ el.title }</Link>)
          }
        </div>
        <div className="flex flex-col md:pt-4">
          {
            footerLinkData.slice(4).map(el => <Link target="_blank" rel="noopener noreferrer" key={el.id} to={el.link} className='text-white text-base md:text-lg hover:translate-x-2 py-1 px-2'>{ el.title }</Link>)
          }
        </div>
      </div>
    </footer>
  )
}
