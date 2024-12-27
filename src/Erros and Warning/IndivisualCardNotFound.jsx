import React from 'react'
import { Link } from 'react-router'

export default function IndivisualCardNotFound() {
  return (
    <>
     <section className='bg-[#1F2125] min-h-[100vh] flex items-center justify-center'>
     <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-[#3cdfe7] ">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link to="/" class="inline-flex text-white  bg-[#3cdfe7] hover:bg-[#3cdee7b9]  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
        </div>   
    </div>
     </section>
    </>
  )
}
