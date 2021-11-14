import style from './Eventlist.module.css';
import React from 'react';
export default function Eventlist({events,handleOnchild}) {
    return (
        <div >
            {events.map((event,index)=>   (
                    <div className={style.card} key={event.id}>
<h2>{index}--{event.title}</h2>
                    <button onClick={()=>handleOnchild(event.id)}>Delete My thoughts!!</button>
                    </div>
                )
              
            
            )
            }
            
        </div>
    )   
}

