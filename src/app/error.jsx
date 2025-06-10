"use client";

import { useEffect } from "react";

export default function error( {error, reset}) {
    useEffect(() => {
        console.error(error);
    }
    , [error]);
  // Reset the error boundary
  return (
    <div className="text-center mt-10">
      <h1>
        Something went wrong! Please try again later.
      </h1>
      <button className='hover:text-amber-600 border-3' onClick={()=>reset()}>Try Again!</button>
    </div>
  )
}
