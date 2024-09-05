import React from 'react'
import Header from './components/header'
import Content from './components/content'
import Location from './components/location'
import Views from './components/views'

const App = () => {
  return (
    <>
    <div className="w-full flex justify-center">
      <div className="wrapper container mx-[60px]">
        <Header/>
        <Content/>
        <Location/>
        <Views/>
      </div>
    </div>
    </>
  )
}

export default App