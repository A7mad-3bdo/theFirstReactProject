import { useState, useEffect } from 'react';
import Style from './Home.module.css'
import avatar from "../../assets/avatar.svg"
import { FaStar } from "react-icons/fa6";



function Home() {
    return (
        <>
        <section className='bg-[#1ABC9C] flex flex-wrap flex-col justify-center items-center clear-both mt-28 home'>
            <div className={`pt-[112px] pb-[70px] w-[250px]`}>
                <img src={avatar} className='w-full text-center container mx-auto' alt="Avatar-photo" />
            </div>
            <div>
                <h2 className='mb-3 dark:text-white text-black text-3xl sm:text-5xl'>START FRAMEWORK</h2>
            </div>
            <div className='flex flex-wrap mt-6'>
                <div className='dark:bg-white bg-black w-28 h-1 me-3'></div>
                <FaStar className='-top-2 left-24 dark:text-white text-black text-xl bg-transparent -translate-y-2' />
                <div className='dark:bg-white bg-black w-28 h-1 ms-3'></div>
            </div>
            <div className='mb-96 dark:text-white text-black'>Graphic Artist - Web Designer - Illustrator</div>
        </section>
        </>
    )
}

export default Home