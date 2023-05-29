import React from 'react'
import { Hero , Sales } from './components'
import {heroapi ,popularesales, toprateslaes} from '../src/Data/data.js'
const App = () => {
  return (
    <>
    <main>
      <Hero  heroapi={heroapi}/>
      <Sales endpoint={popularesales}/>
      <Sales endpoint={toprateslaes}  />
    </main>
    </>
  )
}

export default App