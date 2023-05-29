import React from 'react'
import { Hero , Sales } from './components'
import {heroapi} from '../src/Data/data.js'
const App = () => {
  return (
    <>
    <main>
      <Hero  heroapi={heroapi}/>
      <Sales/>
      <Sales/>
    </main>
    </>
  )
}

export default App