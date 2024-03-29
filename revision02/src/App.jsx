import { useEffect, useState } from "react"
import Ref from "./components/Ref";

function App() {
  const [value,setValue] = useState(0);
  const[data,setData] = useState("Ram");
  useEffect(()=>{
    console.log("button clicked")
  },[data])
  
  return (
    <>
      <h3>Button clicked {value} times</h3>
      <button onClick={() => {
        setValue(value+1)
      }}>Click me</button>
      <button onClick={() => {
        setData("Sita")
      }}>Click me</button>
      <br></br>
      <Ref/>
    </>
  )
}

export default App
