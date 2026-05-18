import React from 'react'

export const VideoTitle = ({ title, overview }) => {
    return (
        <div className='absolute h-screen pt-56 px-11 bg-gradient-to-r  from-black/90'>
            <h1 className='text-white text-4xl   font-bold'>{title}</h1>
            <h3 className='text-white hidden md:inline-block py-8 text-lg w-1/2'>{overview}</h3>

            {/* buttons */}
            <div className='flex justify-between   w-1/5'>
                <button className='bg-white/50 text-black rounded-md mx-3 px-8 font-bold text-xl'> ▶ Play</button>
                <button className='bg-slate-400/50 text-white rounded-md mx-3 px-8  text-xl'>More Info</button>
            </div>
           
        </div>
    )
}
