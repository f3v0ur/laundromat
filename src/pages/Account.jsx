import React, { useState } from 'react'
import { machine_washingclosed } from '../assets/images'
import { IoEyeOffOutline, IoEyeOutline, IoKeyOutline, IoPersonOutline } from 'react-icons/io5'
import { RiLock2Fill } from 'react-icons/ri'

export default function Account() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const[showPassword, setShowpassword] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const[input, setInputs] = useStsage({
    firstname:"",
    lastName:"",
    email:"",
    password:"",
   confpassword:"",
  })

  const handleChange = e => {
    setInputs(prev => ({...prev,[e.target.name]: e.target.value}))
  }
  console.log({email,password})
  return (
    <main className="flex flex-col relative py-20">
      <img src={machine_washingclosed} alt="machine washingclosed" className="absolute top-0 left-0 h-full w-full md:w-1/2 object-cover object-center" />
      <div data-aos="zoom-out-right" className="container mx-auto flex relative justify-center md:justify-end">
       {
        showLogin ? 
        <form action="" className='bg-white p-4 shad md:shadow-none flex flex-col rounded-md gap-4 w-full max-w-md'>
        <h3 data-aos="fade-right" data-aos-delay="800" data-aos-duration="800" className="text-primary text-xl md:text-3xl text-center font-bold">Get Exclusive Access</h3>
        <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2">
          <IoPersonCircleOutline />
          <input type="text" value={inputs.firstname}  name="firstName"onChange={handleChange} required placeholder='FirstName e.g Favour' className="flex-1 p-1" />
        </div>
        
        <div data-aos="zoom-out" data-aos-delay="1500" data-aos-duration="1300" className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2">
          <IoKeyOutline />
          <input type={showPassword ? "text" : 'password'} value={password} onChange={e => setPassword(e.target.value)} required outline-none placeholder='********' minLength={6} className="flex-1 p-1 outline-none"/>
          <span  onClick={() => setShowpassword(!showPassword)} className='relative'>
            {
            showPassword ? <IoEyeOffOutline/> : <IoEyeOutline/>
            }
          </span>
          <IoEyeOffOutline></IoEyeOffOutline>
        </div>
        <button data-aos="zoom-in" data-aos-delay="2000" data-aos-duration="1800" type='submit' className="py-1 md:py-1.5 px-6 md:px-8 bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary rounded-md w-max"> Login </button>
        <p onClick={() => setShowLogin(!showLogin)} className='cursor-pointer p-1 text-center text-dark/60 underline'>Don't have an account up? Login</p>
      </form>
      : 
      <form action="" className='bg-white p-4 shad md:shadow-none flex flex-col rounded-md gap-4 w-full max-w-md'>
      <h3 data-aos="fade-right" data-aos-delay="800" data-aos-duration="800" className="text-primary text-xl md:text-3xl text-center font-bold">Enjoy <span className="text-secondary"> Incredible Offers when you sign-ups</span></h3>
      <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2">
        <BSpersonsphere />
        <input type="text" value={input.firstname} onChange={e => inputFirstname(e.target.value)} required placeholder='Emilyduncan@email.com' className="flex-1 p-1 outline-none" />
      </div>
          <ToMailForward />
          <input type="email" value={input.email}  required onChange={handleChange}  placeholder='Emilyduncan@email.com' className="flex-1 p-1" outline-none/>
      <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2">
          </div>
      <div data-aos="zoom-out" data-aos-delay="1500" data-aos-duration="1300" className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2">
        <RiLock2Fill />
        <input type={showPassword ? "text" : 'password'} value={password} onChange={e => setPassword(e.target.value)} required outline-none placeholder='********' minLength={6} className="flex-1 p-1 outline-none"/>
        <span  onClick={() => setShowpassword(!showPassword)} className='relative'>
          {
          showPassword ? <IoEyeOffOutline/> : <IoEyeOutline/>
          }
        </span>
        <IoEyeOffOutline></IoEyeOffOutline>
      </div>
      <div data-aos="zoom-out" data-aos-delay="1500" data-aos-duration="1300" className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2">
        <BSpersonsphere />
        <input type={showPassword ? "text" : 'password'} value={password} onChange={e => setPassword(e.target.value)} required outline-none placeholder='********' minLength={6} className="flex-1 p-1 outline-none"/>
        <span  onClick={() => setShowpassword(!showPassword)} className='relative'>
          {
          showPassword ? <IoEyeOffOutline/> : <IoEyeOutline/>
          }
        </span>
        <IoEyeOffOutline></IoEyeOffOutline>
      </div>
      <button data-aos="zoom-in" data-aos-delay="2000" data-aos-duration="1800" type='submit' className="py-1 md:py-1.5 px-6 md:px-8 bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary rounded-md w-max"> Create Account </button>
      <p onClick={() => setShowLogin(!showLogin)} className='cursor-pointer p-1 text-center text-dark/60 underline'>Already a Member?  Login</p>
    </form>
       }
      </div>
    </main>
  )
}
