import { useRef, useState } from "react";
import CardsSection from "./Cards/CardsSection";
import Footer from "./Footer/footer";
import Header from "./Header/Header";
import Searchbar from "./SearchBar/Searchbar";

export default function App() {
  const [searchLogic, setsearchLogic] = useState("")
  function GettingSearchInput(e) { setsearchLogic(e.target.value) }

  // focusing input 
  const inputRef = useRef();

  return (
   <>
    <section className="bg-[#1F2125] min-h-[100vh] flex flex-col">
    <Header inputRef={inputRef}></Header>
    <Searchbar setsearchLogic={setsearchLogic} inputRef={inputRef} GettingSearchInput={GettingSearchInput}></Searchbar>
    <CardsSection searchLogic={searchLogic}></CardsSection>
    <div className="footer mt-auto"><Footer></Footer></div>
    </section>
   </>
    
  )
}