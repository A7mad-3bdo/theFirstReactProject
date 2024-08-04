import { useState, useEffect } from 'react';
import Style from './Footer.module.css'
import { FaFacebook, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";




function Footer() {
    return (
        <>
        <footer className='dark:bg-[#2C3E50] bg-white dark:text-white text-black'>
            <section className='information flex flex-wrap justify-evenly container mx-auto p-24 leading-8 text-center'>
                <div className='location w-full md:w-4/12'>
                    <h3 className='font-medium'>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className='social-media w-full md:w-4/12'>
                    <h3 className='font-medium'>AROUND THE WEB</h3>
                    <ul className='flex flex-wrap justify-center items-center gap-4 mt-6'>
                        <li className='border p-3 rounded-full'><a href="https://www.facebook.com/" target='_blank'><FaFacebook /></a></li>
                        <li className='border p-3 rounded-full'><a href="https://x.com/"  target='_blank'><FaTwitter /></a></li>
                        <li className='border p-3 rounded-full'><a href="https://www.linkedin.com/"  target='_blank'><FaLinkedinIn /></a></li>
                        <li className='border p-3 rounded-full'><a href="#"  target='_blank'><FaGlobe /></a></li>
                    </ul>
                </div>
                <div className='about-freelancer w-full md:w-4/12'>
                    <h3 className='font-medium'>ABOUT FREELANCER</h3>
                    <p className='break-words'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </section>


            <section  className='copy-right bg-[#1A252F] flex flex-wrap justify-center items-center p-6'>
                <p>Copyright © Your Website 2021</p>
            </section>
        </footer>
        </>
    )
}

export default Footer