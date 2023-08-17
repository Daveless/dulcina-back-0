import React from 'react'
import {BsPlusCircle, BsPlusCircleFill} from "react-icons/bs" 

const StockButtons = () => {
  return (
    <div className='flex w-[100px] justify-between items-center'>
      <BsPlusCircle size="32px" className='cursor-pointer'/>
      <p>1</p>
      <BsPlusCircleFill size="32px" className='cursor-pointer'/>
    </div>
  )
}

export default StockButtons