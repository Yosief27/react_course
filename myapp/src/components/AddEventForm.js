import './AddEventForm.css';
import { useState } from 'react';
export default function AddEventForm() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
   const handlerest=()=>{
       setTitle('');
       setDate('');
   } 

        return (
<form className='new-event-form'>

    <label >
            <span>Event Title:</span>
            <input type="text"
                onChange={(e)=>setTitle(e.target.value)} 
                value={title}
            />
    </label>
    <label >
            <span>Event Date:</span>
            <input type="date" 
                onChange={(e)=>setDate(e.target.value)} 
                value={date}
            />

    </label>
    <button>Submit!</button>
            <h3>{title}</h3>
            <p>{date }</p>
    <button onClick={handlerest}>Reset!</button>
</form>
            
    )
}
