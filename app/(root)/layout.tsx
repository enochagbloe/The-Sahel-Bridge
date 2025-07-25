import React from 'react'
import { ReactNode } from 'react'
import Navbar from '../Components/Navbar'

const layout = ({children}: {children:ReactNode}) => {
  return (
    <main className='w-full min-h-screen'>
        <Navbar />
      {children}
    </main>
  )
}

export default layout
