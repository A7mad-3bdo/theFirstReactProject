import React, { useState } from 'react';
import { FaStar, FaPlus } from 'react-icons/fa6';
import portrait1 from "../../assets/port1.png";
import portrait2 from "../../assets/port2.png";
import portrait3 from "../../assets/port3.png";

function Portfolio() {
    const [lightBoxSrc, setLightBoxSrc] = useState('');
    const [isLightBoxVisible, setIsLightBoxVisible] = useState(false);

    const displayLightBox = (e) => {
    const photoSource = e.currentTarget.querySelector('img').src;
    setLightBoxSrc(photoSource);
    setIsLightBoxVisible(true);
    };

    const closeLightBox = () => {
    setIsLightBoxVisible(false);
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <>
        <section className='portfolio mt-32 container mx-auto'>
            <div>
                <h2 className='mb-3 text-[#2C3E50] text-center text-xl sm:text-5xl uppercase font-bold'>Portfolio Component</h2>
            </div>
            <div className='flex flex-wrap m-6 text-[#2C3E50] justify-center items-center relative'>
                <div className='dark:text-[#2C3E50] bg-black w-28 h-1 me-5'></div>
                <FaStar className='-top-1 left-240 dark:text-[#2C3E50] text-black text-xl bg-transparent -translate-y-2 absolute' />
                <div className='dark:text-[#2C3E50] bg-black w-28 h-1 ms-5'></div>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-10 mb-12'>
            {[portrait1, portrait2, portrait3, portrait1, portrait2, portrait3].map((src, index) => (
                <div className='item w-10/12 sm:w-5/12 md:w-3/12' onClick={displayLightBox} key={index}>
                <div className='item-photo relative rounded-lg'>
                    <img src={src} className='w-full rounded-lg' alt={`portrait${index + 1}`} />
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgba(26,188,156,0)] hover:bg-[rgba(26,188,156,0.8)] text-[rgba(255,255,255,0)] hover:text-[rgba(255,255,255,0.7)] transition duration-300 text-8xl flex flex-wrap justify-center items-center hover:cursor-pointer rounded-lg'>
                    <FaPlus />
                    </div>
                </div>
                </div>
            ))}
            </div>
            
            {isLightBoxVisible && (
            <div className='bg-[rgba(0,0,200,0.2)] z-[1100] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center' id='lightBox' onClick={closeLightBox}>
                <div className='item-photo fixed translate-x-44'>
                    <img src={lightBoxSrc} className='w-[65%]' alt="Lightbox" id='lightBoxContent' onClick={stopPropagation} />
                </div>
            </div>
            )}
        </section>
        </>
    );
}

export default Portfolio;
