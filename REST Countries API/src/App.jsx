// import { useState } from 'react'
import './App.css'
import { ContextProvider } from './components/FetchDataAndSetContext';
import DisplayAndFilterData from './components/DisplayAndFilterData'

function App() {

  return (
    <ContextProvider>
      <DisplayAndFilterData />
    </ContextProvider>
  )
}

export default App;