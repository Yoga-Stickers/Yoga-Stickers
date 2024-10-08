import React from 'react'

export default function Nav() {
    return (
        <div className='bg-gradient-to-r w-vw from-slate-900 via-purple-600 to-red-300 flex justify-around  items-center h-24 m-1 rounded-[4px]'>

            <div className='h-full gap-4 flex items-center'>
                <img className='h-14 rounded-lg' src="./src/components/images/Logo.png" alt="" />
                <p className='font-bold text-white font-sans text-3xl '>YOGA Stickers</p>
            </div>

            <div className='h-12 w-[35%] rounded-lg bg-gradient-to-r from-purple-600 to-red-300 gap-4 flex items-center'>
                <input className='w-[80%] opacity-40 h-full rounded-lg  border-slate-400 placeholder:text-black text-lg placeholder:font-mono pl-3' type="text" placeholder='Search Products' />
                <hr className='border h-[70%] border-white' />
                <img className='h-8 rounded-lg' src="./src/components/images/Search.png" alt="" />
                <div className='flex flex-col items-center justify-center h-full pl-3 pr-3 border-white border-l-2  w-14'>
                    <p className='text-center font-mono text-white font-semibold'>All</p>
                    <img className='w-4' src="./src/components/images/Down.png" alt="" />
                </div>
            </div>



            <div className='h-12 rounded-md gap-14  flex items-center'>
                <img className='h-10 rounded-lg' src="./src/components/images/About.png" alt="" />
                <img className='h-10 rounded-lg' src="./src/components/images/Profile.png" alt="" />
                <img className='h-10 rounded-lg' src="./src/components/images/Bag.png" alt="" />
            </div>

        </div>
    )
}



// #20bdf9
// #0c49d7