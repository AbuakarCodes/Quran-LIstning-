import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router'
import CardsArray from './Cardsdata'


export default function CardsSection({searchLogic}) {
  let searchedFilteredArray = CardsArray.filter((cards) => {
    return cards.SurahNameEn.toLowerCase().includes(searchLogic) 
});

  return (
    <>
      <section className='bg-[#1F2125] p-3'>
        <div className="cards-body  container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid-flow-row gap-4">

        {
  searchLogic.length > 0 ? searchedFilteredArray.map((card, index) => (
        <Link to={`indivisual/${card.SurahNameEn}`} key={index}>
          <Cards
            shape={card.shape}
            SurahNameEn={card.SurahNameEn}
            Topic={card.Topic}
            SurahNameARB={card.SurahNameARB}
            Ayahs={card.Ayahs}
          />
        </Link>
      ))
    : CardsArray.map((card, index) => (
        <Link to={`indivisual/${card.SurahNameEn}`} key={index}>
          <Cards
            shape={card.shape}
            SurahNameEn={card.SurahNameEn}
            Topic={card.Topic}
            SurahNameARB={card.SurahNameARB}
            Ayahs={card.Ayahs}
          />
        </Link>
      ))
}
 
        </div>
      </section>
    </>
  )
}
