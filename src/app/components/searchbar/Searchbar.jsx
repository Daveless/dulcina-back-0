import React from 'react'
import {HiOutlineSearch} from "react-icons/hi"

const Searchbar = () => {
  return (
    <div className='flex pl-[20px] pr-[20px] bg-[#f2f2f2] h-[40px] items-center rounded-3xl'>
        <input className='bg-[#f2f2f2] focus:outline-none' placeholder={`Buscar...`}/>
        <button className=''><HiOutlineSearch/></button>
    </div>
  )
}

export default Searchbar