import React from 'react'
import Myself from './../assets/Myself.jpg'
import {AiOutlineMail, AiOutlineLinkedin, AiOutlineWhatsApp,AiOutlineInstagram ,AiOutlineGithub } from "react-icons/ai";



function Hero() { 

  const config ={
    role:'Im a Front-End developer',
    roleDescription:'Front-End Developer passionate about crafting responsive,user-friendly web apps. Skilled in HTML, CSS, JavaScript, and React to bring designs to life with seamless interactions.',
    social:{
      email:'https://mail.google.com/mail/u/0/#inbox/FMfcgzQcpwnHCZhXwvwdvgRMCqhVWGzl?compose=new',
      linkedin:'https://www.linkedin.com/in/aravind-subramani/',
      github:'https://github.com/Aravind4207',
      whatsapp:'https://wa.me/6382569383',
      instagram:'https://www.instagram.com/mr.devilking.07/'
    },
    resume:'https://drive.google.com/file/d/1E4zaSTbhMybRuUxznP18UYb9z0WIdlQ7/view?usp=sharing'
  }

  return (
    <section id='hero' className="done  w-full flex flex-col md:flex-row px-5 py-10 md:py-36 bg-secodary font-serif justify-center">
        <div className=' md:w-1/2 flex flex-col '>
          <div>

          </div>
          <h1 className='  text-white text-4xl text-center md:text-left font-hero-font  '>HI, <br/> Im Aravind S
          <p className=' p-color text-purple-900 font-bold font-serif text-3xl bg-gradient-to-r from-red-600 via-purple-700 to-purple-950 bg-clip-text text-transparent '> {config.role} </p>
          <div className='font-bold md:w-[550px]'>
            <p className='   font-medium  py-4 md:w-11/12 font-hero-font   tracking-wide text-justify leading-normal mb-4  text-base md:text-lg '>{config.roleDescription}</p>
          </div>
          
          </h1>
          <div className='md:pr-52'>
            <div className='flex py-4  justify-center px-4  gap-5 md:justify-center rounded-br-2xl '>
            
              <a target='_blank' href={config.social.email} className=' rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white'><AiOutlineMail size={40}/></a>
              <a target='_blank' href={config.social.linkedin}className=' rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white'><AiOutlineLinkedin size={40}/></a>
              <a target='_blank' href={config.social.github}className=' rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white'><AiOutlineGithub size={40}/></a>
              <a target='_blank' href={config.social.whatsapp} rel="noopener noreferrer" className=' rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white'><AiOutlineWhatsApp size={40}/></a>
              <a target='_blank' href={config.social.instagram} rel="noopener noreferrer" className='  rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white '><AiOutlineInstagram size={40}/></a>
          </div>
          <div className='flex justify-center  py-4'>
                <a target='_blank' href={config.resume} className='  rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white  px-20 py-1 text-xl '> Resume</a>
          </div>

          </div>
          
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6 py-6 md:py-0 ">
          <img className=" md:mt-16    w-60 h-60 md:w-80 md:h-80 rounded-full object-fill mx-auto md:mx-0 " src={Myself} />
        </div>
    </section>
  )
} 

export default Hero 