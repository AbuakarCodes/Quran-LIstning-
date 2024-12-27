import React from 'react';
import { Link, useParams } from 'react-router';
import CardsArray from './Cardsdata';
import IndivisualCardNotFound from '../Erros and Warning/IndivisualCardNotFound';


const IndividualCardVideo = () => {
  const { id } = useParams(); 
  let individualCardVideo = CardsArray.filter((card) => {
    return card.SurahNameEn === id;
  });

  if (individualCardVideo.length === 0) {
    return <IndivisualCardNotFound/>
  }

  return (
    <div className="flex justify-center items-center min-h-[100vh] w-full bg-[#1F2125] p-4">
  <div className="container mx-auto text-center flex items-center justify-center flex-col p-6  h-[90vh] w-full bg-black bg-opacity-60 rounded-lg shadow-lg">
    
    <header>
      <h1 className="text-5xl font-semibold text-white mb-6 uppercase hover:text-[#3cdfe7] cursor-pointer">
        {individualCardVideo[0].SurahNameARB}
      </h1>
    </header>

    <div className='mr-auto'>
    <Link to="/">
      <button className="px-3 py-1 md:px-4 md:py-2 text-white bg-[#3cdfe7] hover:bg-[#00b8c5] rounded-lg text-lg mb-6">
        ← Back
      </button>
    </Link>
    </div>

    <div className="video-container mb-6 md:min-h-[80%] min-h-[50%] w-full">
      <iframe
        width="100%"
        height="100%"
        src= {individualCardVideo[0].link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

  );
};

export default IndividualCardVideo;



