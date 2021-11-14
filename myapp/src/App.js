
import './App.css';
import React,{useState} from 'react';

import Discount from './components/Discount';

import Eventlist from './components/Eventlist';
import Title from './components/Title';

function App() {
  //the first value is the value itself and the second is the function which use to change the variable name.
  // the useState function returns a function triggers the react to  reevaluate the react component

  const [showDiscount,setShowDiscount]=useState(true);
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
    setShowDiscount(true)
    setEvent(
      (preEvents)=>{
        console.log(preEvents);
        return (
preEvents.filter((event)=>{
      return event.id!==id
    })   )}
    )  }
    const handleDiscount=()=>{
      if(showDiscount===true){

      setShowDiscount(false)
      }else{
        
      setShowDiscount(true)
      }
    };

    
    const sub='List of my thoughts!';
  return (
    <div className="App">
     


      <Title title='My thoughts in a Day!' sub={sub}/>
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
  
{showEvent && <Eventlist events={events} handleOnchild={handleClick}/>}
      {showDiscount && ( <Discount handleOnchild={handleDiscount}>
        
     <h2>Be mindful of you world!!</h2> 
     <br/>
     <p>Keep watch your thoughts and be vigilant!!</p>
      </Discount >
)}
              </div>
  );
}

export default App;
