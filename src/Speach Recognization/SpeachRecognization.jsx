import React from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



export default function SpeachRecognization({ setsearchLogic , setshowPopUp , transcript, listening, resetTranscript, browserSupportsSpeechRecognition}) {

 

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }  
  
  
  const bg = useRef(" ") 
 
  return ReactDOM.createPortal(
  <>
      <div ref={bg}  className="bg fixed inset-0 flex justify-center items-center backdrop-blur-sm">



<div class=" flex flex-col w-[40%] p-6  border border-gray-200 rounded-lg shadow bg-[#1b1b1b]">
    <div className="ml-auto"><button onClick={()=>setshowPopUp(false)}>X</button></div>
    
    <div className="flex items-center justify-between">
    <div>
      <p className=" text-[110%] text-white">Recite now</p>
      <p className=" text-[110%] text-[#c4c4c4]">Recite any verse in Arabic, and the verse will appear</p>
    </div>
    
    <div className="h-20 w-20 rounded-[50%] flex-center bg-slate-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M12.304 14.946a3.573 3.573 0 0 0 3.558-3.566V3.566A3.573 3.573 0 0 0 12.304 0a3.573 3.573 0 0 0-3.56 3.566v7.814a3.573 3.573 0 0 0 3.56 3.566m6.286-3.915c0 3.566-3.024 6.062-6.286 6.062-3.263 0-6.287-2.496-6.287-6.062H4c0 4.041 3.203 7.429 7.117 7.964v4.255h2.373v-4.255c3.914-.594 7.117-3.923 7.117-7.964z"></path></svg>
    </div>
    
    </div>
    


          <div class="p-4 md:p-5 text-center">
            <p>Microphone: {listening ? 'on' : 'off'}</p>
          <button  onClick={SpeechRecognition.startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
          <p className='text-black'>{transcript}</p>
          <button onClick={()=> setsearchLogic(transcript)}>AAAAAA</button>
            </div> 

</div>


        
    </div>



  </>,
  document.getElementById("portal")
  )
}





         