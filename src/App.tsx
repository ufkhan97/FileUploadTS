import React, {Component} from 'react'
import './App.css'
//import './web3storage/put-files.js'

export class App extends Component {
    state = {
        selectedFile: null
    }; 

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    foo():void {
        alert('how DARE you!! >:( ');
    };


return (
    <div>
      <main>
        <h1>Hello World!</h1>
        <h2>React⚛️ + Vite⚡ + Replit🌀</h2>
       // <button type="button" onClick={this.foo}>Do NOT Click Me!</button>
        <br />
       // <input type="file" onChange={this.onFileChange}/>
        //<button type ="button">Upload File</button>
     </main>
    </div>
  )

}