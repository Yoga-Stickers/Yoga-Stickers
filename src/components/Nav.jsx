import React from 'react'

export default function Nav() {
    return (
        <div className='bg-gradient-to-r w-vw from-slate-900 via-purple-600 to-red-300 mob:w-[98%] mob:h-9 tab:h-16 tab:w-[100%] mob:fixed flex justify-around items-center lap:h-24 rounded-[4px]'>

            <div className='h-full mob:gap-1 tab:gap-2 gap-4 flex items-center'>
                <img className='mob:h-7 tab:h-10 h-14 rounded-lg' src="./src/components/images/Logo.png" alt="" />
                <p className='font-bold mob:text-[0px] tab:text-sm mob:font-thin text-white font-sans text-3xl '>YOGA Stickers</p>
            </div>

            <div className='lap:h-12 mob:h-7 mob:w-[58%] w-[35%] rounded-lg bg-gradient-to-r from-purple-600 to-red-300 tab:gap-1 tab:h-8 gap-4 mob:gap-1 flex items-center'>
                <input className='w-[80%] tab:w-[70%] mob:text-sm opacity-40 h-full rounded-lg border-slate-400 placeholder:text-black text-lg mob:placeholder:text-[15px] mob:placeholder:font-sans placeholder:font-mono pl-3 tab:placeholder:text-sm' type="text" placeholder='Search Products' />
                <hr className='border h-[70%] border-white' />
                <img className='h-8 mob:h-5 tab:h-6 rounded-lg' src="./src/components/images/Search.png" alt="" />
                <div className='flex flex-col items-center justify-center h-full mob:pl-0 mob:pr-0 pl-3 pr-3 border-white border-l-2 w-14'>
                    <p className='text-center mob:text-[10px] tab:text-[10px] font-mono text-white font-semibold'>All</p>
                    <img className='w-4 mob:w-2 tab:w-2' src="./src/components/images/Down.png" alt="" />
                </div>
            </div>

            <div className='h-12 mob:gap-2 rounded-md gap-14 tab:gap-[10px] tab:justify-around tab:w-[30%] flex items-center'>
                <img className='h-10 mob:h-5 tab:h-8 rounded-lg' src="./src/components/images/About.png" alt="" />
                <img className='h-10 mob:h-5 tab:h-8 rounded-lg' src="./src/components/images/Profile.png" alt="" />
                <img className='h-10 mob:h-5 tab:h-8 rounded-lg' src="./src/components/images/Bag.png" alt="" />
            </div>

        </div>
    )
}



// #20bdf9
// #0c49d7