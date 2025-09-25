import React from 'react'
import contect from './../assets/contect.png'
import {AiOutlineMail, AiOutlineLinkedin, AiOutlineWhatsApp,AiOutlineInstagram,AiOutlineGithub } from "react-icons/ai";
function Contect() {
    const config = {
        email:'aravindjesus4207@gmail.com',
        phoneNO:'+91 6382569383',
        social:{
            email:'https://mail.google.com/mail/u/0/#inbox/FMfcgzQcpwnHCZhXwvwdvgRMCqhVWGzl?compose=new',
            linkedin:'https://www.linkedin.com/in/aravind-subramani/',
            github:'https://github.com/Aravind4207',
            whatsapp:'https://wa.me/6382569383',
            instagram:'https://www.instagram.com/mr.devilking.07/'
            }
    }
  return (
    <section id='contect' className=' w-full bg-secodary flex flex-col md:flex-row justify-items-center '>
        <div className='md:w-1/2 justify-center text-center p-1'>
            <h1 className=' font-bold   text-6xl  bg-gradient-to-r from-red-600 via-purple-700 to-violet-500 bg-clip-text text-transparent '>Contact Me</h1>
            <div className='font-bold text-1xl py-3 text-white'>
                <p >feel free to reach out for collaboration, job opportunities, or any questions.</p>
            <p>I'd love to hear from you! Drop me a message below.</p>
            </div>
            <div className= ' md:px-28 justify-center w-full'>
                <div className=' justify-center border-2 md:w-[500px]  rounded-2xl p-4 bg-gradient-to-r from-red-500 via-violet-800 to-black'>
                    {/* <h1 className='py-2 font-bold md:text-lg'><span className='text-xl'>Email ID :</span> {config.email} </h1>
                    <h1 className='py-2 font-bold text-1xl'><span className='text-xl'>Phone NO :</span>{config.phoneNO} </h1> */}
                    <h1 className='text-white font-bold text-2xl'>Mail ME</h1>
                     <form target="_blank" action="https://formsubmit.co/2945a65459e503c7dae6ed2045a1b809"  method="POST">
                        <div className='py-3'>
                            <input type='text' name='Name' placeholder='Name' className="md:w-[450px] w-80 px-3 py-2  border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"></input> 
                        </div>
                        <div className='py-3' >
                            <input type='email' name='Email' placeholder='Email' className="md:w-[450px] w-80 px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                            </div>
                        <div className='py-3'>
                            <input type='text' name="Subject" placeholder='Subject' class="md:w-[450px] w-80 px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                            </div>
                        <div className='py-3'>
                            <textarea name='Message' placeholder='Message' class="md:w-[450px] w-80 h-40 px-3 py-2  border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <button type='submit' class="w-40 font-bold text-1xl text-white hover:bg-red-800 py-2 rounded-3xl  bg-gradient-to-r from-black via-violet-800 to-black transition-colors duration-300 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-r-red-500 border-l-violet-600">Submit</button>
                        
                        
                        
                        
                        
                        
                    </form> 
                    
                </div>
            </div>
            <div className='flex py-4 justify-center px-4 gap-5 md:justify-center  '>
                        
                          <a target='_blank' href={config.social.email}className=' rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white'><AiOutlineMail size={40}/></a>
                          <a target='_blank' href={config.social.linkedin}className=' rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white'><AiOutlineLinkedin size={40}/></a>
                          <a target='_blank' href={config.social.github}className=' rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white'><AiOutlineGithub size={40}/></a>
                          <a target='_blank' href={config.social.whatsapp}className=' rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white'><AiOutlineWhatsApp size={40}/></a>
                          <a target='_blank' href={config.social.instagram}className=' rounded-lg bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  hover:text-white '><AiOutlineInstagram size={40}/></a>
                      </div>
        </div>
        
        <div className='  md:w-1/2 md:px-36 md:py-32 '>
            <div className='  '>
                <img src={contect} className= 'md:w-[500px] md:h-[500px]'></img>
            </div>
        </div>
    </section>
  )
}

export default Contect