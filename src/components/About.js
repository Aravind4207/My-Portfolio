import React from 'react'
import web1 from './../assets/web1.png'
import html from './../assets/html.jpg'
import css from './../assets/css.jpg'
import JavaScript from './../assets/JavaScript.png'
import boostrap from './../assets/boostrap.png'
import react from './../assets/react.png'
import github from './../assets/github.jpg'
import vs from './../assets/vs.jpg'
import pycharm from './../assets/pycharm.jpg'
   
function About() {
  return (
    <section id='about' className=' done flex flex-col md:flex-row  bg-secodary px-5 '>
      <div className='   md:w-1/2  flex justify-center  '>
        <div className='md:py-40'>
          <div className=''>
            <img src={web1} className='w-[480px]' alt=''/>
          </div>
        </div>
        
      </div>
      <div className='  md:w-1/2 justify-center  '>
          <div className='w-full md:justify-center text-center '>
            <h1 className="  py-4 text-5xl font-bold text-blue-600 bg-gradient-to-r from-red-600 via-purple-700 to-purple-950 bg-clip-text text-transparent">Skills</h1>
            <p className=" text-white py-4 md:text-2xl font-bold    ">Here are some of my skills on which I have learnt.</p> 
          </div>
            
                <div className=' md:px-16  '>
                  <div className=" md:w-[550px] border-2 border-purple-950 rounded-md p-1 flex flex-col border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600  ">
                    <h1 className="text-white text-2xl p-2 justify-center text-center">Frontend</h1>
                    <div className=" flex flex-col md:flex-row gap-4  p-2 px-4 ">
                      <div className=" w-full flex border-2 border-purple-950 rounded-md p-3 md:w-48 justify-center border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600 ">
                        <img src={html} className='w-10 h-10 rounded-sm '/>
                        <p className="text-white justify-center text-center px-9 md:px-5 py-1 text-xl">HTML</p>
                      </div>

                      <div className="w-full flex border-2 border-purple-950 rounded-md p-3 md:p-3 md:w-48 justify-center border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">
                        <img src={css} className='w-10 h-10 rounded-sm '/>
                        <p className="text-white justify-center text-center px-12 md:px-5 py-1 text-xl">CSS</p>
                      </div>
                      
                      <div className="w-full flex  border-2 border-purple-950 rounded-md p-3 md:p-3 md:w-60 justify-center border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">
                        <img src={JavaScript}className='w-10 h-10  rounded-sm'/>
                        <p className="text-white justify-center text-center px-5 py-1 text-xl">JavaScript</p>
                      </div>
                      
                    </div>
                    <div className="  flex flex-col md:flex-row gap-4 py-4 px-4  ">
                      <div className=" w-full flex border-2 border-purple-950 rounded-md p-3  md:w-80 justify-center border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">
                        <img src={boostrap} className='w-10 h-10 rounded-sm'/>
                        <p className="text-white justify-center text-center px-7 py-1 text-xl">Boostrap</p>
                      </div>
                      
                      <div className="w-full flex border-2 border-purple-950 rounded-md p-3 md:w-80 justify-center border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">
                        <img src={react} className='w-10 h-10 rounded-sm'/>
                        <p className="text-white justify-center text-center px-8 py-1 text-xl">React JS</p>
                      </div>
                      
                    </div>
                    
                      
                    
                  </div>
                </div>  
                     
                    <div className='md:px-16 py-8 justify-center  '> 
                                              
                      <div className=" md:w-[550px] flex flex-col  py-2 border-2 border-purple-950 rounded-md px-5 gap-4 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">
                        <h1 className="text-white text-2xl p-2 justify-center text-center">Others</h1>
                        <div className=" flex flex-col md:flex-row  gap-4">
                            <div className=" w-full flex border-2 border-purple-950 rounded-md p-3 md:w-80 justify-center border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">
                              <img src={github} className='w-10 h-10 rounded-sm'/>
                              <p className="text-white justify-center text-center px-6 md:px-5 py-1 text-xl">GitHub</p>
                            </div>

                            <div className=" w-full flex border-2 border-purple-950 rounded-md p-3 md:w-80 justify-center border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">
                              <img src={vs} className='w-10 h-10 rounded-sm '/>
                              <p className="text-white justify-center text-center px-12 md:px-5 py-1 text-xl">VS</p>
                            </div>
                        </div>
                        <div className=" md:px-20 flex flex-center">
                              <div className="w-full border-2 p-2 px-10 flex border-purple-950 rounded-md md:w-80 justify-center border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600 "> 
                                <img src={pycharm}className='w-10 h-10 rounded-sm'/>
                                <p className='text-white justify-center text-center px-4 md:px-5 py-1 text-xl'>PyCharm</p>
                              </div>
                        </div>   
                            
                      </div>
                    </div>

                      
                  
          
      </div>
      

        
        

    </section>
  )
}

export default About