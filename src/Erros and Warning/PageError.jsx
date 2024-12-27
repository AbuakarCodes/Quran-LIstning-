import React from 'react'
import { Link } from 'react-router'

export default function PageError() {
  return (
    <>
        <div id="error-page" className='h-[100vh] bg-[#1F2125] flex items-center justify-center flex-col gap-y-8'>
            <h1 className=' text-[2rem]  text-white '>Sorry, something went wrong</h1>
            <Link to="/"><button type="button" class="text-black-700 bg-white px-[1.1rem] py-[.5rem] rounded hover:bg-[transparent] hover:text-white font-medium border">Go Back</button></Link>
            <p className=' text-white'>If the issue persists, please <Link className='text-[#27A4A6] ' to="/contact"> report a bug</Link></p>    
        </div> 
    </>
  )
}
