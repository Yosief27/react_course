import './Rooms.css';
import {useState,useEffect,useCallback} from 'react';
import {useFetch} from '../hooks/useFetch.js';
export default function Rooms(){
    
    const [url,setUrl]=useState('http://localhost:3000/tripsoo')
    //3rd way
    //using custom hook
    const {data:trips,IsPending ,findError}=useFetch(url);

    //2nd way
    //if we want to place a function in its sparate place  and use like fetchTipe for trip,fectchroom for room
    //then we usecallback hook and 
    //useCallback hook  prevents reevalution of function 
    /*const  fetchTrip=useCallback(async ()=>{
        const response=await fetch(url)
        const data=await response.json()
        setTrips(data)
    },[url]

    )    
    */
   /*
    useEffect(()=>{
        fetchTrip()
    },[fetchTrip])
    //
    /*1 st way 
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
            {IsPending && <div>It is still loading .....</div>}
            
            {findError && <div>{findError}</div>}
            {trips && trips.map((trip)=>(
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
