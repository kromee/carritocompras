import { Component } from 'react';
import Productos from './Components/Productos'
import Layout from './Components/Layout'


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
        <Layout>
        <Productos agregarAlCarro={()=>console.log('no hace nada')} 
        productos = {this.state.productos}
        />
        </Layout>
        
        
    </div>
    )

  }
}

export default App;
