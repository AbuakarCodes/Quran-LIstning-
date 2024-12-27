import { useRef, useState } from "react";
import CardsSection from "./Cards/CardsSection";
import Footer from "./Footer/footer";
import Header from "./Header/Header";
import Searchbar from "./SearchBar/Searchbar";
import SpeachRecognization from "./Speach Recognization/SpeachRecognization";

export default function App() {
  const [searchLogic, setsearchLogic] = useState("")
  function GettingSearchInput(e) { setsearchLogic(e.target.value) }

  // focusing input 
  const inputRef = useRef();

  return (
   <>
    <section className="bg-[#1F2125] min-h-[100vh] flex flex-col">
    <Header inputRef={inputRef}></Header>
    <Searchbar inputRef={inputRef} GettingSearchInput={GettingSearchInput}></Searchbar>
    {/* <SpeachRecognization></SpeachRecognization> */}
    <CardsSection searchLogic={searchLogic}></CardsSection>
    <div className="footer mt-auto"><Footer></Footer></div>
    </section>
   </>
    
  )
}