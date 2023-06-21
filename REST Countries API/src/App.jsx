// import { useState } from 'react'
import './App.css'
import { ContextProvider } from './components/FetchDataAndSetContext';
import Home from './components/Home';

function App() {

  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  )
}

export default App;