import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center mt-1'>
      <img className='h-52' src="spinner.svg" alt="loading" />
    </div>
  )
}
// Use loading.io page to create a spinner