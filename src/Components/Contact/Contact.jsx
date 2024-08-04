import { useState, useEffect } from 'react';
import Style from './Contact.module.css'
import { FaStar } from 'react-icons/fa6';






function Contact() {

    const [focus, setFocus] = useState("");
    const onKeyUpFocus = (e) => {
        if(e.target.value){
            setFocus("peer-focus");
        } else if (e.target.value == ""){
            setFocus("");
        }
        console.log(e.target.value);
    }
    return (
        <>
        <section className='flex flex-wrap flex-col justify-center items-center clear-both mt-1 pt-36 contact container mx-auto'>
            <div>
                <h2 className='mb-3 text-[#2C3E50] text-center text-lg sm:text-4xl uppercase font-bold'>conatct section</h2>
            </div>
            <div className='flex flex-wrap m-6 text-[#2C3E50] justify-center items-center relative'>
                <div className='dark:text-[#2C3E50] bg-black w-28 h-1 me-5'></div>
                <FaStar className='-top-1 left-240 dark:text-[#2C3E50] text-black text-xl bg-transparent -translate-y-2 absolute' />
                <div className='dark:text-[#2C3E50] bg-black w-28 h-1 ms-5'></div>
            </div>
            <form className="w-[50%] mt-12">

                <div className="relative z-0 w-full mt-6 mb-12 group">
                    <input type="text" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-200 focus:outline-none focus:ring-0 peer rounded-md z-10 placeholder:text-slate-500" placeholder="userName" required onKeyUp={(e)=> {onKeyUpFocus(e)}}/>
                    <label htmlFor="floating_text" className={`${focus}:font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform translate-y-1 scale-100 top-3 -z-10 origin-[0] ${focus}:start-0 rtl:${focus}:translate-x-1/4 rtl:${focus}:left-auto ${focus}:text-green-600 ${focus}:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ${focus}:scale-100 ${focus}:-translate-y-12`}>userName :</label>
                </div>
                <div className="relative z-0 w-full mt-6 mb-12 group">
                    <input type="number" name="floating_number" id="floating_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-200 focus:outline-none focus:ring-0 peer rounded-md z-10 placeholder:text-slate-500" placeholder="userAge" required onKeyUp={(e)=> {onKeyUpFocus(e)}}/>
                    <label htmlFor="floating_number" className={`${focus}:font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform translate-y-1 scale-100 top-3 -z-10 origin-[0] ${focus}:start-0 rtl:${focus}:translate-x-1/4 rtl:${focus}:left-auto ${focus}:text-green-600 ${focus}:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ${focus}:scale-100 ${focus}:-translate-y-12`}>userAge :</label>
                </div>
                <div className="relative z-0 w-full mt-6 mb-12 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-200 focus:outline-none focus:ring-0 peer rounded-md z-10 placeholder:text-slate-500" placeholder="userEmail" required onKeyUp={(e)=> {onKeyUpFocus(e)}}/>
                    <label htmlFor="floating_email" className={`${focus}:font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform translate-y-1 scale-100 top-3 -z-10 origin-[0] ${focus}:start-0 rtl:${focus}:translate-x-1/4 rtl:${focus}:left-auto ${focus}:text-green-600 ${focus}:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ${focus}:scale-100 ${focus}:-translate-y-12`}>userEmail :</label>
                </div>
                <div className="relative z-0 w-full mt-6 mb-12 group">
                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-200 focus:outline-none focus:ring-0 peer rounded-md z-10 placeholder:text-slate-500" placeholder="userPassword" required onKeyUp={(e)=> {onKeyUpFocus(e)}}/>
                    <label htmlFor="floating_password" className={`${focus}:font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform translate-y-1 scale-100 top-3 -z-10 origin-[0] ${focus}:start-0 rtl:${focus}:translate-x-1/4 rtl:${focus}:left-auto ${focus}:text-green-600 ${focus}:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ${focus}:scale-100 ${focus}:-translate-y-12`}>userPassword :</label>
                </div>

                <button type="submit" className="text-white mb-12 bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send Message</button>
            </form>
        </section>
        </>
    )
}

export default Contact