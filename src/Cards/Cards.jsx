import React from 'react'

export default function Cards({shape , SurahNameEn , SurahNameARB , Topic , Ayahs}) {
  return (
    <>

      <div className="card-body group  text-white flex items-center  border-[2px] border-[#272F33] hover:border-[#2CA4AB] rounded-[.4rem] p-4">

        <div className="card-sec-1">
          <div className="shape group-hover:bg-[#2CA4AB] ml-2 h-11 w-11 rotate-45 rounded-[.3rem] bg-[#272F33]  flex items-center justify-center"> <p className='rotate-[-45deg]  group-hover:text-black'>{shape}</p> </div>
        </div>

        <div className="card-sec-2 ml-8 flex justify-between w-full">

          <div className="left">
            <div className="surah-name-EN"><h4 className='font-medium'>{SurahNameEn}</h4></div>
            <div className="topic text-[#d7e4eb] group-hover:text-[#2CA4AB] text-[.7rem] font-bold">{Topic}</div>
          </div>

          <div className="right  flex flex-col">
          <div className="surah-name-ARB font-semibold"><h4>{SurahNameARB}</h4></div>
          <div className="total-ayat text-[#d7e4eb] group-hover:text-[#2CA4AB] text-[.7rem] font-bold ml-auto">{Ayahs}</div>
          </div>

        </div>
  
      </div>
     
    </>
  )
}
