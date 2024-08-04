import { useState, useEffect } from 'react';
import Style from './About.module.css'
import { FaStar } from "react-icons/fa6";


function About() {
    return (
        <>
        <section className='bg-[#1ABC9C] flex flex-wrap flex-col justify-center items-center clear-both mt-28 pt-52 home'>
            <div>
                <h2 className='mb-3 dark:text-white text-black text-3xl sm:text-4xl uppercase'>about component</h2>
            </div>
            <div className='flex flex-wrap mt-6'>
                <div className='dark:bg-white bg-black w-28 h-1 me-3'></div>
                <FaStar className='-top-2 left-24 dark:text-white text-black text-xl bg-transparent -translate-y-2' />
                <div className='dark:bg-white bg-black w-28 h-1 ms-3'></div>
            </div>
            <div className='mb-52 dark:text-white text-black flex flex-wrap justify-around text-left'>
                <p className='w-full md:w-5/12 p-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='w-full md:w-5/12 p-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </section>
        </>
    )
}

export default About