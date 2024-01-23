import React, { useState } from 'react'

const New = () => {
    const [counter,setCounter] = useState(0);

    const value = () => {
        if(counter < 15){
        setCounter(counter + 1)
        }
    }

     return (
      <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md text-center">
        <p className="py-4">Counter: {counter} </p>

            <button onClick={value}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2">
            Button clicked {counter} Times
            </button>

            <button onClick={value}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2">
            Button clicked {counter} Times
            </button>
        </div>
        </div>
    </>
  )
}

export default New
