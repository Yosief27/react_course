
import './App.css';
import {useState} from 'react';

function App() {
  //the first value is the value itself and the second is the function which use to change the variable name.
  // the useState function returns a function triggers the react to  reevaluate the react component
  let [name,setName]=useState('josi')
  const[events,setEvent]=useState([
    {title:'I am alive',id:1},

    {title:'Make today better than Yesterday! ',id:2}
    ,
    {title:'Search for you heart ',id:3}
  ])
  const handleClick=()=>{
    setName('akile');
    console.log(name);
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleClick}>Click to change the name!</button>
      {events.map((event,index)=>
        (
          <div key={event.id}>
            <h1>{index}--{event.title}</h1>
          </div>
        )
      )}
    </div>
  );
}

export default App;
