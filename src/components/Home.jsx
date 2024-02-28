import { useEffect, useState } from "react";
import GrocerList from "./GroceryList";
import useFetch from "../custom hooks/useFetch";
import Adds from "./Adds";

const Home = () => {

    // let[groceries , setGroceries] = useState(null);
    // let[pending , setPending] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:4000/groceries")
    //         .then((res)=>{return res.json()})
    //         .then((data)=>{console.log(data); setGroceries(data); setPending(false);})
    //     }, 2000);
    // } , [])
    // return ( <div className="home-cont">

    //                 {pending && <div id="loader"></div>}

    //                 { groceries && <div className="grocery-list">
    //                                     <h1>All Grocery</h1>
    //                                     <div className="card-list">
    //                                         {
    //                                             groceries.map((v,i,a)=>{
    //                                                 return(
    //                                                     <div className="card" key={i}>
    //                                                         <img src={v.image} alt="" />
    //                                                         <h2>{v.gname}</h2>
    //                                                         <h3>{v.price} &#8377;</h3>
    //                                                     </div>
    //                                                 )})
    //                                         }
    //                                     </div>

    //                                </div>
    //                 }
    //          </div> 
    // );

    let[forceRender , setForceRender] = useState(0);
   let{data : groceries , error , pending } = useFetch("http://localhost:4000/groceries");

    
    

    return(<div className="home-cont">
            
            {error && <h1>{error}</h1>}
            {pending && <div id="loader"></div>}
            {groceries && <Adds/>}
            {groceries && <GrocerList forceRender={forceRender} setForceRender={setForceRender} groceries={groceries} title="All Grocery"/>}
            {groceries && <GrocerList forceRender={forceRender} setForceRender={setForceRender} groceries={groceries.filter(v=> v.type=="fruit")} title = "Fruits"/>}
            {groceries && <GrocerList forceRender={forceRender} setForceRender={setForceRender} groceries={groceries.filter(v=> v.type=="vegetable")} title = "Vegetable"/>}
            {groceries && <GrocerList forceRender={forceRender} setForceRender={setForceRender} groceries={groceries.filter(v=> v.type=="Softdrink")} title = "Soft Drinks"/>}
            {groceries && <GrocerList forceRender={forceRender} setForceRender={setForceRender} groceries={groceries.filter(v=> v.type=="snack")} title = "Snacks"/>}
            {groceries && <GrocerList forceRender={forceRender} setForceRender={setForceRender} groceries={groceries.filter(v=> v.type=="baby-care")} title = "Baby Care"/>}

    </div>)
}
 
export default Home;