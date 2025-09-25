import React, { useState } from 'react'
import Instagram from '../assets/Instagram.png'
import Employee from  './../assets/Employee.png'

function Projects() {
    const [Para,setPara]=useState(false);
    const [Para1,setPara1]=useState(false);

    // const config ={
    //     projects :[
    //         {
    //            image:Instagram,
    //            h1:'',
    //            h1:'',
    //            h1:'',
    //            h1:'',
    //            project:'',
    //            description1:'Instagram Clone Web App - Built a responsive social media platform with features like,posting,liking,and commenting.Developed using HTML , CSS, ',
    //            description2:'JavaScript, React JS and integrated APIs for data handling.Focused on clean UI, smooth navigation, and interactive user experience.',
    //            link:'' 
    //         },
    //         {
    //            image:Employee,
    //            description1:'',
    //            description2:'',
    //            link:'' 
    //         },
    //         {
    //            image:'',
    //            description:'',
    //            link:'' 
    //         },
    //     ]
    // }

  return (
    <section id='projects' className=" done w-full bg-secodary justify-center text-center flex flex-col  gap-8 px-4 md:px-5 py-16 ">
        <div>
            <h1 className=" font-bold p-3 text-5xl  bg-gradient-to-r from-red-600 via-purple-700 to-purple-950 bg-clip-text text-transparent">Projects</h1>
            <p className="text-white font-bold text-lg py-6 ">I have on a wide range of projects.From web apps to android app. <br></br> here are some of my projects.</p>
        </div>
        <div className=' flex flex-col md:flex-row gap-16 justify-center '>
            <div className=" text-red-200 boeder-2 p-5 justify-items-center  border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">
                <img src={Instagram} className="w-80 h-40 rounded-md"></img>
                <div className="text-red-200 w-80  py-2 ">
                    <div className="  flex gap-2">
                    <h1 className="border-2 border-purple-500 rounded-md p-0.5 text-sm w-16 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">HTML</h1>
                    <h1 className="border-2 border-purple-500 rounded-md p-0.5 text-sm w-16 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600 ">CSS</h1>
                    <h1 className="border-2 border-purple-500 rounded-md p-0.5 text-sm w-20 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600 ">JavaScript</h1>
                    <h1 className="border-2 border-purple-500 rounded-md p-0.5 text-sm w-20 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600 ">Boostrap</h1>
                    </div>
                    
                    <div className=" px-2  py-2  md:px-8 ">
                        <h1 className="border-2 border-purple-500 rounded-md p-0.5 text-sm w-72  md:w-64 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600 ">React JS</h1>
                    </div>
                    <div className=' w-full'>
                        <h1 className=" w-96  font-bold pr-28 md:pr-60   "> Instagram Clone : </h1>
                    </div>
                    
                    <div className='  text-justify leading-relaxed tracking-wide' >
                        <p className=" w-fullline-clamp-3  md:w-80 text-xs tracking-wide" style={{ wordSpacing: "-1px" }}>Instagram Clone Web App - Built a responsive social media platform with features like,posting,liking,and commenting.
                        Developed using HTML , CSS,   
                        </p>
                        {Para && <p className="w-full line-clamp-3 md:w-80 text-xs tracking-wide " style={{ wordSpacing: "-1px" }}>JavaScript, React JS and integrated APIs for data handling.Focused on clean UI, smooth navigation, and interactive user experience.
                            
                        </p> }
                        <div className=" py-3 md:pl-20 pl-28 ">
                            <button onClick={()=>setPara(!Para)} className="  border-2 border-red-600 rounded-md  md:w-40 bg-gradient-to-r from-red-700 to-violet-600 hover:text-white ">Read More</button>
                        </div>
                        <div className=" py-3 md:pl-[108px] pl-28  ">
                            <a target='_blank' href='https://github.com/Aravind4207/Instagram-Clone' className='md:p-1 border-2 border-red-600 rounded-md   bg-gradient-to-r from-red-700 to-violet-600 hover:text-white'>View project</a>
                        </div>
                    </div>
                    
                    
                                            
                </div>
            </div>
            <div className="text-red-200 border-2 p-5 justify-items-center  border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">
                <img src={Employee} className="w-80 h-40 rounded-md"></img>
                <div className= ' text-red-200 py-2  '>
                    <div className="flex gap-2">
                    <h1 className="border-2 border-purple-500 rounded-md p-0.5 text-sm w-24 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">HTML</h1>
                    <h1 className="border-2 border-purple-500 rounded-md p-0.5 text-sm w-24 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600 ">CSS</h1>
                    <h1 className="border-2 border-purple-500 rounded-md p-0.5 text-sm w-28 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600">Python</h1>
                    </div>
                    
                    <div className=" py-1  md:px-8  ">
                        <h1 className="border-2 rounded-md p-0.5 text-sm md:w-64 border-t-4 border-b-4 border-l-2 border-r-2 border-t-violet-700 border-b-red-500 border-l-red-500 border-r-violet-600 ">MYSQL</h1>
                    </div>
                
                    
                    
                    
                </div>
                <div className=''>
                    <h1 className="w-full pr-0.5 font-semibold md:pr-20" > Employee Management system :</h1>
                </div>
                
                <div className=' text-justify leading-relaxed tracking-wide   ' >
                        <p className="w-80 line-clamp-3 md:w-80 text-xs tracking-wide" style={{ wordSpacing: "-2px" }}>Employee Management System - Developed a web- based application to manage employee information, attendance , and performance.Built  using HTML, CSS, Python, 
                            </p>
                        {Para1 && <p className="  line-clamp-3 md:w-80 text-xs tracking-wide " style={{ wordSpacing: "-2px" }}>
                            and MySQL for database management.
                            Implemented features like adding, updating, and deleting employee records efficiently.
                            Focused on user-friendly interface and smooth data handling for easy administration.
                        </p> }
                        <div className="py-3 md:pl-20 pl-28">
                            <button onClick={()=>setPara1(!Para1)} className="border-2 border-red-600 rounded-md md:w-40 bg-gradient-to-r from-red-700 to-violet-600  hover:text-white">Read More</button>
                        </div>
                        <div className=" py-3 md:pl-[108px] pl-28  ">
                            <a target='_blank' href='https://github.com/Aravind4207/employee-management-system' className='md:p-1 border-2 border-red-600 rounded-md   bg-gradient-to-r from-red-700 to-violet-600 hover:text-white'>View project</a>
                        </div>
                </div>
                    
                    
            </div>
            
        </div>
    </section>
  )
}

export default Projects