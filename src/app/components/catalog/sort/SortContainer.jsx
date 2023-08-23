import React from 'react'
import Sort from './Sort'

const SortContainer = () => {
    const opt = ["Popularidad","Nuevos","Favoritos"]
  return (
    <div className='w-[235px]'>
        <Sort options={opt}/>
    </div>
  )
}

export default SortContainer