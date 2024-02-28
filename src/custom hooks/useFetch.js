import { useEffect, useState } from "react";

const useFetch = (api) => {
    let[data , setData] = useState(null);
    let[pending , setPending] = useState(true);
    let[error , setError] = useState(null);


    useEffect(()=>{
        setTimeout(()=>{
            fetch(api)
            .then((res)=>{
                if(res.ok){
                return res.json();}
                throw new Error("Sorry invalid request")
            })
            .then((data)=>{
                console.log(data); 
                setData(data); 
                setPending(false)})
            .catch((err)=>{setError(err.message)}, setPending(false))
        } , 2000)

        if(localStorage.getItem("cartItems")==null)
       {
        localStorage.setItem("cartItems", "[]")
        localStorage.setItem("items" , "[]")
       }
    } , [])

    return {data , error , pending};
}
 
export default useFetch;