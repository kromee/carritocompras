import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state={
    productos: [
      {name:'Tmate',price:10,img:'images/tomate.jpg'},
      {name:'Arbejas',price:10,img:'images/arbejas.jpg'},
      {name:'Lechuga',price:10,img:'images/lechuga.jpg'},
    ]
  }
  render(){
    return (
      <div>
      <p>Hola mundo </p>
    </div>
    )

  }
}

export default App;
