import { Component } from 'react';
import Productos from './Components/Productos'


class App extends Component {
  state={
    productos: [
      {name:'Tmate',price:11,img:'/images/tomate.jpg'},
      {name:'Arbejas',price:12,img:'/images/arbejas.jpg'},
      {name:'Lechuga',price:13,img:'/images/lechuga.jpg'},
    ]
  }
  render(){
    return (
      <div>
        <Productos agregarAlCarro={()=>console.log('no hace nada')} 
        productos = {this.state.productos}
        />
        
    </div>
    )

  }
}

export default App;
