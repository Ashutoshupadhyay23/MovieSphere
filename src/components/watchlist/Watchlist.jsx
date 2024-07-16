import React from 'react'

const Watchlist = () => {
  return (
    <>

      <div className='flex justify-center flex-wrap m-4'>
        <div className='flex justify-center h-[2.5rem] w-[6rem] bg-blue-400 rounded-xl text-white font-medium items-center mx-2'>
          Action
        </div>
        <div className='flex justify-center h-[2.5rem] w-[6rem] bg-gray-400/50 rounded-xl text-white font-medium items-center mx-2'>
          Action
        </div>
      </div>

      <div className='flex justify-center my-8'>
        <input type="text" placeholder='Search movies' className='h-[3rem] w-[18rem] bg-gray-300 outline-none px-4 text-base text-black rounded-lg' />
      </div>

      <div className='border border-gray-100 m-6 overflow-hidden rounded-lg'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr className='h-9'>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            <tr className='border-b-2'>
              <td className='flex items-center px-4 py-2'>
                <img className='h-[5rem] w-[8rem]' src={`https://images.pexels.com/photos/26793685/pexels-photo-26793685/free-photo-of-a-dog-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`} />

                <div className='mx-10'>
                  The Matrix
                </div>
              </td>

              <td>8</td>
              <td>9</td>
              <td>Action</td>

              <td className='text-red-700'>Delete</td>

            </tr>
          </tbody>

        </table>
      </div>

    </>
    
  )
}

export default Watchlist