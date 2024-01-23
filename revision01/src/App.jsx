import { useState } from "react"
import New from "./components/New"

function App() {
  const [counter,setCounter] = useState(15);
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
      <p className="py-4">Counter: {counter} </p>

        <button onClick={() => {
          if(counter < 20){
          setCounter(counter+1)
          }
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2">
          Add Value
        </button>

        <button onClick={()=>{
          if(counter > 0){
          setCounter(counter-1)
          }
        }}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2">
          Remove Value
        </button>
      </div>
    </div>
    <New/>
    </>
  )
}

export default App
