import React from 'react'
import { laundromat_screen1, laundromat_screen2, machine_dried, machine_seethrough, machine_sittingon, machine_womanwash } from '../assets/images'
import { MdCreditScore, MdEditCalendar } from 'react-icons/md'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="bg-white">
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center gap-6">
          <aside className="flex-1 relative">
            <img src={machine_sittingon} alt="machine sittingon" className="object-cover -scale-x-100 rounded-md h-60 md:h-72 ml-auto w-9/12" />
            <img src={machine_dried} alt="machine sittingon" className="object-cover object-top absolute left-0 top-1/3 rounded-md h-40 sm:h-52 z-10 border-2 md:border-8 border-white ml-auto w-6/12" />
            <div className="ml-auto mr-4 mt-3 w-5/12 p-4 md:p-6 rounded-md bg-primary text-white">
              <div className="flex gap-4 items-center">
                <div className="rounded-full grid place-items-center h-10 w-10 text-xl md:text-2xl bg-white text-secondary flex-shrink-0"><MdCreditScore /></div>
                <h4 className="text-xl md:text-2xl font-bold">Book Now!</h4>
              </div>
              <p className="text-sm md:text-base pt-3 leading-loose text-justify">It takes as little as 1 minute to book and as early as tomorrow to deliver</p>
            </div>
          </aside>
          <aside className="flex-1 flex flex-col gap-4">
            <p className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">About Us</p>
            <h3 className="text-2xl md:text-4xl font-bold text-dark">Your Trusted Partner in Laundry Care.</h3>
            <p className="text-sm md:text-base leading-loose text-justify text-dark/60"> Authors should use titles that identify their documents even when they are used out of context, for example in a user&apos;s history or bookmarks, or in search results. The document&apos;s title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.</p>
            {
              [
                { id: "82250", heading: "Passionate Expertise", text: "The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context." },
                { id: "82251", heading: "Cutting-edge Technology", text: "The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context." },
                { id: "82252", heading: "Customer-centric Approach", text: "The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context." },
              ].map(about => 
                <div key={about.id} className="flex gap-3">
                  <span className="text-2xl md:text-3xl text-secondary flex-shrink-0 mt-1">
                    <IoCheckmarkCircleOutline />
                  </span>
                  <div className="">
                    <h5 className="text-lg md:text-xl text-dark font-bold">{about.heading}</h5>
                    <p className="text-sm md:text-base text-dark/60">{about.text}</p>
                  </div>
                </div>
              )
            }
          </aside>
        </div>
      </section>
      <section className="relative px-4 bg-primary">
        <img src={machine_seethrough} alt="machine seethrough" className="absolute w-full h-full left-0 top-0 object-cover opacity-40" />
        <div className="container mx-auto relative flex flex-col-reverse md:flex-row gap-6">
          <aside className="flex-1 flex flex-col gap-4 justify-center py-20">
            <p className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">Online Booking</p>
            <h3 className="text-2xl md:text-4xl font-bold text-white">Discover the Ease of Online Booking!</h3>
            <p className="text-sm md:text-base leading-loose text-justify text-white"> If its parent element is an ol, ul, or menu element, then the element is an item of the parent element&apos;s list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element.</p>
            <Link to={"/services"} className="py-2 px-6 md:px-8 bg-transparent text-white border-2 border-primary hover:bg-white hover:text-secondary rounded-md w-max backdrop-blur-md flex items-center gap-1"><MdEditCalendar /> Book Now </Link>
          </aside>
          <aside className="flex-1 relative border-2 border-white">
            <img src={laundromat_screen1} alt="" className="absolute rounded-md h-11/12 w-1/2 top-1/2 -translate-y-1/2 object-cover object-center" />
            <img src={laundromat_screen2} alt="" className="absolute h-[110%] w-[55%] shad rounded-md top-1/2 -translate-y-1/2 right-0 object-cover object-center" />
          </aside>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
          <aside className="flex-1 relative">
            <img src={machine_womanwash} alt="machine womanwash" className="h-full w-11/12 rounded-md object-cover ml-auto block" />
            <figure className="bg-primary p-4 md:p-6 rounded-md w-56 text-white absolute z-10 left-0 bottom-8">
              <div className="flex items-center gap-2">
                <h4 className="text-3xl md:text-5xl font-bold tracking-tighter">25+</h4>
                <p className="text-lg md:text-xl">Years of Experience</p>
              </div>
              <p className="text-sm md:text-base text-justify pt-4">The different from its first does not have to stand alone when taken out of context.</p>
            </figure>
          </aside>
          <aside className="flex-1 relative flex flex-col gap-4 py-5">
            <p className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">About Us</p>
            <h3 className="text-2xl md:text-4xl font-bold text-dark">Your Trusted Partner in Laundry Care.</h3>
            <p className="text-sm md:text-base leading-loose text-justify text-dark/60"> Authors should use titles that identify their documents even when they are used out of context, for example in a user&apos;s history or bookmarks, or in search results. The document&apos;s title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.</p>
            {
              [
                {id: "6730", title: "Eco-friendly Washing", percentage: 92},
                {id: "6731", title: "Meticulous Fabric Care", percentage: 76},
                {id: "6732", title: "Stain-free elimination", percentage: 85},
                {id: "6733", title: "Ultra-fast Delivery", percentage: 97},
              ].map(item => (
                <div key={item.id} className="flex flex-col gap-1 text-dark/80">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                    <h5 className="text-sm md:text-base font-semibold">{item.percentage}%</h5>
                  </div>
                  <div className="bg-dark/20 rounded-sm overflow-hidden">
                    <div style={{width: `${item.percentage}%`}} className="bg-yell p-1"></div>
                  </div>
                </div>
              ))
            }
          </aside>
        </div>
      </section>
    </main>
  )
}
