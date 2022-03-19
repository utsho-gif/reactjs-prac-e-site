import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Component/Menubar/Menubar';
import AllProducts from './Component/AllProducts/AllProducts';
import { useState } from 'react';
function App() {
  const [count, setCount] =useState(0)
  const increseCart = () => setCount(count + 1);
  const disCart =() => setCount(count - 1);
  if(count === 0){
    
  }
  return (
    <div className="App bg-dark">
      <Menubar count={count}></Menubar>
      <AllProducts increseCart = {increseCart} disCart = {disCart}></AllProducts>
    </div>
  );
}

export default App;
