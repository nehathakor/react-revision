import React from 'react'
import {data,data1} from "./App"
import { useContext } from 'react'

function ChildC() {
    const name = useContext(data);
    const gender = useContext(data1);
  return (
    <>
      <h1>My name is {name} and my gender is {gender}</h1>
    </>
  )
}

export default ChildC
