"use client"
import { useEffect } from "react"

export default function Error({error,reset}) {
  useEffect(()=>{
    console.log(error);
  },[error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong....</h1>
      <button className="hover:text-amber-600 bg-gray-400 rounded py-2 px-4 m-4" onClick={()=>reset()}>Try again</button>
    </div>
  )
}
