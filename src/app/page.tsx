import React from 'react'
import Slider from './components/Slider'
import Featured from './components/Featured'
import Offer from './components/Offer'

const page = () => {
  return (
    <main className='overflow-x-hidden'>
      <Slider />
      <Featured />
      <Offer />
    </main>
  )
}

export default page