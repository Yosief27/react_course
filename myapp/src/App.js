
import './App.css';
import {useState} from 'react';

function App() {
  //the first value is the value itself and the second is the function which use to change the variable name.
  // the useState function returns a function triggers the react to  reevaluate the react component
  let [name,setName]=useState('Fight a good fight!')
  const [showEvent,setShowevent]=useState(true);
  console.log(showEvent);
  const[events,setEvent]=useState([
    {title:'I am alive,for that I thank you God!',id:1},

    {title:'Make today better than Yesterday! ',id:2}
    ,
    {title:'Search deep in your  heart !',id:3},

    {title:'Remeber those who suffer all over the world!',id:4},
  ])
  const handleClick=(id)=>{
    console.log(id);

    setEvent(
      (preEvents)=>{
        console.log(preEvents);
        return (
preEvents.filter((event)=>{
      return event.id!==id
    })   )}
    )  }
  return (
    <div className="App">
      <h1>{name}</h1>
     {!showEvent &&
(<div>
        <button onClick={()=>{setShowevent(true)}}>
          Show me my thoughts!
        </button>
      </div>
) 
     }      <br/>
    {showEvent && (  <div>
        <button onClick={()=>{setShowevent(false)}}>
          Hide my thoughts!
        </button>

      </div>
)}       
{showEvent && events.map((event,index)=>
        (
          <div key={event.id}>
            <h1>{index}--{event.title}</h1>
            <button onClick={()=>handleClick(event.id)}>Click to Delete Your thought</button>

          </div>
        )
      )}
    </div>
  );
}

export default App;
