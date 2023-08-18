
const ImageItem = ({img, h, w,name}) => {
  return (
    <div className={` w-[${w}] h-[${h}] bg-center bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${img})` }}>
        <div className='transition-colors duration-300 font-bold text-transparent hover:text-white flex justify-center items-center w-[100%] h-[100%] hover:bg-black/[0.4] hover:backdrop-brightness-75'>
            <h4 className=" text-[40px] ">{name}</h4>
        </div>
    </div>
  )
}

export default ImageItem