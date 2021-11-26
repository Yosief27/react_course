import {useState,useEffect} from 'react';
export  const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [IsPending ,setIsPending]=useState(false);
    const [findError ,setFindError]=useState(null);
    useEffect(()=>{
        setIsPending(true);
            const Fetch= async ()=>{
                setIsPending(true)
                try{
                    
                    const res=await fetch(url)
                    if(!res.ok){
                            throw new Error(res.statusText)
                    }
                    const json=await res.json()
                    setData(json)
                    setIsPending(false);
                    setFindError(null)
                } 
                catch(err){
                    setIsPending(false)
                    setFindError('could not fetch a data!')
                    console.log(err.message)
                }
        }
   Fetch()
    }, [url])

   return {data,IsPending,findError} 
}