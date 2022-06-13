import React from "react"

const HeaderSelection: React.FC<{title: string}> = ({ title }) => {
    return (
        <div className='mt-3 sm:mt-16 flex justify-between items-center px-6 w-5/6'>
            <h2 className='sm:w-1/4 font-bold sm:font-extralight text-3xl sm:text-2xl text-center sm:text-left whitespace-nowrap'>{title}</h2>
            <select className='text-xs w-1/4 h-8 px-2 py-1 bg-gray-200 rounded-lg shadow-lg hidden sm:block'>
                <option value='1'>Popular</option>
                <option value='2'>Top Rated</option>
                <option value='3'>Upcoming</option>
            </select>
        </div>
    )
}

export default HeaderSelection