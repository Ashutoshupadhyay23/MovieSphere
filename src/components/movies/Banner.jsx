import React from 'react'

const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end' style={{ backgroundImage: `url(https://m.media-amazon.com/images/S/aplus-media/sota/c9e84ba5-b727-41cc-8563-a29b54b74f50.__CR0,0,970,300_PT0_SX970_V1___.jpg)`}}>

        <div className='text-white text-xl text-center w-full bg-blue-900/60 p-2'>Avengers endgame</div>

    </div>
  )
}

export default Banner