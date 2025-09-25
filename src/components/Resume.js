import React from 'react'
import web2 from './../assets/web2.png';
import resume2 from './../assets/resume2.png';


function Resume() {
    const config ={
        link:'https://drive.google.com/file/d/1E4zaSTbhMybRuUxznP18UYb9z0WIdlQ7/view?usp=sharing'
    }
  return (
    <section id='resume' className=' done w-full bg-secodary  flex flex-col md:flex-row  '>
        <div className='w-full md:w-1/2   md:py-28 '>
            <div className='md:px-32  '>
                <img src={web2} className=''></img>
            </div>
        </div>
        <div className='md:w-1/2 justify-center text-center md:py-48'>
            <div>
                <h1 className=' font-bold text-6xl bg-gradient-to-r from-red-600 via-purple-700 to-violet-500 bg-clip-text text-transparent '>Resume</h1>
                <div className='py-4'>
                    <h1 className='text-white font-bold text-2xl'>you can view my resume  </h1>
                </div>
            </div>
            <div className=' justify-center md:px-48 '>
                <div className=' py-5  md:w-80 justify-center text-center'>
                    <a target='_blank'  href= {config.link} className= ' hover:text-white border-2 justify-center text-center p-3 md:px-16 font-bold rext-2xl rounded-xl bg-gradient-to-r from-red-600 via-violet-600 to-purple-700 border-red border-t-2 border-b-2 border-l-2 border-r-2 border-t-red-700 border-b-purple-950 border-r-red-800 border-l-purple-900'>Download</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume