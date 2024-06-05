import React from 'react'
import { servicesData } from '../data/servicesData'

export default function Services() {
  return (
    <main className="bg-white p-4">
      <div className="container mx-auto py-20 flex flex-col gap-6">
        {
          servicesData.map((item, i) => (
            <aside key={item.id} className={`flex flex-col gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="relative min-h-44 h-44 md:h-72 rounded-md overflow-hidden shadow-lg shadow-backdrop flex-1">
                <img src={item.image} alt="" className="absolute left-o top-0 object-cover w-full h-full object-center" />
              </div>
              <div className="flex-1 py-5 flex flex-col justify-center p-4 gap-4">
                <h4 className="text-primary text-xl md:text-3xl text-center font-bold ">{item.text}</h4>
                <p className="text-dark/60 text-base md:text-lg text-center font-light ">{item.info}</p>
              </div>
            </aside>
          ))
        }
      </div>
    </main>
  )
}
