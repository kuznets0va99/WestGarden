import React from 'react'
import Header from './components/header'
import Content from './components/content'
import Location from './components/location'
import Views from './components/views'
import Special from './components/special'
import Complecs from './components/complecs'
import Estetic from './components/estetic'
import Apartment from './components/apartment'

const App = () => {
  return (
    <>
    <div className="w-full flex justify-center">
      <div className="wrapper container mx-[320px]">
        <Header/>
        <Content/>
        <Location/>
        <Views/>
        <Special/>
        <Complecs/>
        <Estetic/>
        <Apartment/>
      </div>
    </div>
    </>
  )
}

export default App