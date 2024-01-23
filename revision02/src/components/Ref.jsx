import React, { useRef, useState } from 'react'

const Ref = () => {
  const [name,setName] = useState("")
  const refElement = useRef("");
  return (
    <>
      <input ref={refElement} type="text" value={name} onChange={(e)=>{
        setName(e.target.value)
      }}></input>
      <button onClick={()=>{
        refElement.current.focus()
        refElement.current.style.color="red"
      }}>Reset</button>
      
    </>
  )
}

export default Ref
