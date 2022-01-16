import * as React from 'react'
import './App.css'
//import './web3storage/put-files.js'

export default function App() {
function foo(){
   alert('how DARE you!! >:( ');
}

function bar(){
    alert('You changed the file!');
}

  return (
      <main>
      <h1>Hello World!</h1>
      <h2>React⚛️ + Vite⚡ + Replit🌀</h2>
      <button type="button" onClick={foo}>Do NOT Click Me!</button>
      <br />
      <input type="file" onChange={bar}/>
      <button type ="button">Upload File</button>
    </main>
  )
}