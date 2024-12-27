import React from 'react'
import { Link } from 'react-router'
// import SpeachRecognization from '../Speach Recognization/SpeachRecognization'



export default function Searchbar({GettingSearchInput, inputRef}) {
  return (
    <>
     {/* <SpeachRecognization></SpeachRecognization> */}
      <section className=' px-3 py-5 text-white font-medium flex flex-col gap-y-5 bg-[#1D2222]'>

        <div className="serch-audio ml-auto lg:mr-14 hover:text-[#2CA4AB] w-max"><Link  target='blanck' to="https://www.pdfquran.com/download/standard2/standard2-quran.pdf">Downlod Quran</Link></div>

        <div className=" cursor-pointer serch-input flex items-center justify-center w-[100%] lg:w-[45rem] gap-x-2 px-8 bg-white container rounded-[2rem] mx-auto">
          <div className="serch-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#B2B2B2" viewBox="0 0 24 24"><path d="m23.5 21.466-7.01-7.01a9.07 9.07 0 0 0 1.736-5.343C18.226 4.088 14.138 0 9.113 0S0 4.088 0 9.113s4.088 9.113 9.113 9.113a9.07 9.07 0 0 0 5.343-1.735l7.01 7.009zM9.113 15.348a6.236 6.236 0 1 1 6.235-6.235 6.243 6.243 0 0 1-6.235 6.235"></path></svg></div>
          <input ref={inputRef} onChange={GettingSearchInput} type="text" placeholder='What do You Want to Liten ?' className=' cursor-pointer hover:placeholder:text-[#000000a6] w-full text-[1.1rem]   p-4 pl-2 md:pl-5  outline-none border-none text-[black]'/>
          <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="mic-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#2CA4AB" viewBox="0 0 24 24"><path d="M12.304 14.946a3.573 3.573 0 0 0 3.558-3.566V3.566A3.573 3.573 0 0 0 12.304 0a3.573 3.573 0 0 0-3.56 3.566v7.814a3.573 3.573 0 0 0 3.56 3.566m6.286-3.915c0 3.566-3.024 6.062-6.286 6.062-3.263 0-6.287-2.496-6.287-6.062H4c0 4.041 3.203 7.429 7.117 7.964v4.255h2.373v-4.255c3.914-.594 7.117-3.923 7.117-7.964z"></path></svg> </button>
        </div>

        <div className="serch-anchors flex items-center justify-center gap-x-3 flex-wrap">
            <Link to="https://en.wikipedia.org/wiki/Quran" target='blanck' className='hover:text-[#8C8E8E]'>About The Quran</Link>
            <Link to="indivisual/Al-Mulk" className='hover:text-[#8C8E8E]'>Al Mulk</Link>
            <Link to="indivisual/Ya-Sin" className='hover:text-[#8C8E8E]'>Yaseen</Link>
            <Link to="indivisual/Al-Kahf" className='hover:text-[#8C8E8E]'>Al Kahf</Link>
            <Link to="indivisual/Al-Waqi'ah" className='hover:text-[#8C8E8E]'>Al Waqi'ah</Link>
        </div>
      </section>
    </>
  )
}
