import React from 'react'
export default function Eventlist({events,handleOnchild}) {
    return (
        <div >
            {events.map((event,index)=>   (
                    <React.Fragment key={event.id}>
                    <h2>{index}--{event.title}</h2>
                    <button onClick={()=>handleOnchild(event.id)}>Delete My thoughts!!</button>
                    </React.Fragment>
                )
              
            
            )
            }
            
        </div>
    )   
}

