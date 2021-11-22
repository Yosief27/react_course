import './Rooms.css';
import {useState,useEffect,useCallback} from 'react';
export default function Rooms(){
    const [trips,setTrips]=useState([]);
    const [url,setUrl]=useState('http://localhost:3000/trips')
    //if we want to place a function in its sparate place  and use like fetchTipe for trip,fectchroom for room
    //then we usecallback hook and 
    //useCallback hook  prevents reevalution of function 
    const  fetchTrip=useCallback(async ()=>{
        const response=await fetch(url)
        const data=await response.json()
        setTrips(data)
    },[url]
    )    
    useEffect(()=>{
        fetchTrip()
    },[fetchTrip])
    //
    /*
    useEffect(()=>{
        fetch(url)
    .then((response)=>(response.json()))
    .then((data)=>(setTrips(data)))
    .catch((er)=>console.log(er));
    

    },[url])
    */
        return (
        <div className='trip-list'>
            <h1>List of available rooms with price !</h1>
            {trips.map((trip)=>(
                   <ul>
                       <li key={trip.id}>
                             <h2>{trip.title}</h2>
                             <p>{trip.price}</p>
                       </li>
                   </ul> 

 
            )
           )
            } 
            <div className="filters">
                <button onClick={()=>setUrl('http://localhost:3000/trips?loc=europe')}>
                    Click for Europe!
                </button>

                <button onClick={()=>setUrl('http://localhost:3000/trips')}>
                    Click for All!
                    </button>
                </div>           
            </div>
    )
}
