import React,{useState} from "react";

function App() {
  const [count, setCount]=useState(0);
  return (
    <div className="container my-5" >
      <div className="card text-center my-5"><h1>Counter App</h1>
      <div className="my-5">
      <h2 className="my-5">{count}</h2>
      <button type="button" class="btn btn-success mx-3" onClick={
        ()=>setCount(count+1)}
        // disabled={count===20} 
        >Increment</button>

      <button type="button" class="btn btn-danger mx-3" onClick={
        ()=>setCount(count -1)}
        disabled={count===0}
        >Decrement</button>

      <button type="button" class="btn btn-warning mx-3" onClick={
        ()=>setCount(0)}
        disabled={count===0}
        >Reset</button>
      </div>
      </div>
    </div>
  );
}

export default App;
