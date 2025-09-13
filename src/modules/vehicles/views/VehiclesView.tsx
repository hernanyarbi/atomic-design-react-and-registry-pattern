"use client"
import React from 'react'
import { Vehicles } from '../components/organism/Vehicles'


export const VehiclesView = () => {
  return (
   <div className='flex flex-col gap-8 w-full'>
    <h1 className='text-2xl font-bold'>Vehicles</h1>
     <Vehicles />
   </div>
  )
}
