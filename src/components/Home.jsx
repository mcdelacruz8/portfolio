import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#e26c1e]'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Matthew Dela Cruz</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm an aspiring Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a recent bootcamp graduate looking for an opportunity to showcase my skills and expand my knowledge. Learned full-stack for multiple languages but would like to focus on front-end development.</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e26c1e] hover:border-[#e26c1e]'>View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home;