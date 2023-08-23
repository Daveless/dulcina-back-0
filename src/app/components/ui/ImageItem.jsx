
const ImageItem = ({img, h, w,name,children}) => {
  return (
    <div className={` bg-center bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${img})`, height:`${h}`,width:`${w}` }}>
        <div className='h-[100%] w-[100%] transition-colors duration-300 font-bold text-transparent hover:text-white flex justify-center items-center  hover:bg-black/[0.4] hover:backdrop-brightness-75'>
            {children ? children : <h4 className=" text-[40px] ">{name}</h4> }
        </div>
    </div>
  )
}

export default ImageItem