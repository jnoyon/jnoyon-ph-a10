import React from 'react'
import Features from '../components/Features'
import Slider from '../components/Slider'
import Consult from '../components/Consult'
import { useLoaderData } from 'react-router-dom'
import LatestVisa from '../components/LatestVisa'

export default function Home() {
  const visas = useLoaderData() 
  return (
    <div>
      <Slider></Slider>
      <Features></Features>
      <LatestVisa visas={visas}></LatestVisa>
      <Consult></Consult>
    </div>
  )
}
