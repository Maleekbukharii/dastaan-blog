import React from 'react'
import Image from "next/image";
import capture from "../public/capture.png"
const Imagee = () => {
  return (
    <div className="flex justify-center my-0">
      <Image src={capture} alt="dastan logo" width={455} height={233} className="h-10 w-20"/>
      </div>
  )
}

export default Imagee
