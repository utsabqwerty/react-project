
import './App.css';
import Navbar from './Components/Navbar';

import {useState} from 'react';
import Calculator from './Components/calculator.jsx';
function App() {
  let [count, setCount] = useState(0)
  return (
    <div className="App">
      {/* top  navbar*/}
     <Navbar/>
     <Calculator/>

     <div>
      {count}
</div>
<button onClick={()=>{
  setCount(
    (prevState)=> prevState + 1
  )
}}>Increment</button>
<button onClick={()=>{
  setCount(
    (prevState)=> prevState - 1
  )
}}>Decrement</button>
<button onClick={()=>{
  setCount(
    (prevState)=> 0
  )
}}>Reset</button>
  

    </div>
  );
}

export default App;
