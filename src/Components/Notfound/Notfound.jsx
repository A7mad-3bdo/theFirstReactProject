import { useState, useEffect } from 'react';
import Style from './Notfound.module.css'
import { FaStar } from 'react-icons/fa6';

function Notfound() {
    return (
        <>
        <section className='bg-[#1ABC9C] flex flex-wrap flex-col justify-center items-center clear-both mt-28 pt-52 home'>
            <div>
                <h2 className='mb-3 dark:text-white text-black text-3xl sm:text-4xl uppercase'>Page NOt FOUND UNFORTUNATELY 404</h2>
            </div>
            <div className='flex flex-wrap mt-6'>
                <div className='dark:bg-white bg-black w-28 h-1 me-3 mb-44'></div>
                <FaStar className='-top-2 left-24 dark:text-white text-black text-xl bg-transparent -translate-y-2' />
                <div className='dark:bg-white bg-black w-28 h-1 ms-3'></div>
            </div>
        </section>
        </>
    )
}

export default Notfound