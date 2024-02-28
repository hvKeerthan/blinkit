import { useState } from "react";
import { Link } from "react-router-dom";

const GroceryList = ({groceries , title,setForceRender,forceRender}) => {


    let addTocart = (grocery)=>{
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        cartItems.push({...grocery , quantity : 1});
        localStorage.setItem("cartItems" , JSON.stringify(cartItems));

        let items = JSON.parse(localStorage.getItem("items"));
        items.push(grocery.id);
        localStorage.setItem("items" , JSON.stringify(items));
        setForceRender(forceRender+1);
    }

    let removeFromCart = (grocery) => {
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        let items = JSON.parse(localStorage.getItem("items"));
        
        let ind = cartItems.findIndex((v,i,a) =>{return grocery.id===v.id});

        cartItems.splice(ind , 1);
        items.splice(ind , 1);

        localStorage.setItem("cartItems" , JSON.stringify(cartItems));
        localStorage.setItem("items" , JSON.stringify(items));
        setForceRender(forceRender+1);

    }

    return (  <div className="grocery-list">
                <h1>{title}</h1>
                <div className="card-list">
                {
                    groceries.map((v,i,a)=>{
                        return(<div className="card" key={i}>
                                    <Link to={`/product-desc/${v.id}`}>
                                        <img src={v.image} alt="" />
                                        <h2>{v.gname}</h2>
                                        <h3>{v.price} &#8377; </h3>
                                    </Link>
                                    {!JSON.parse(localStorage.getItem("items")).includes(v.id) && <button className="add-btn" onClick={()=>{addTocart(v)}}>Add</button>}
                                    { JSON.parse(localStorage.getItem("items")).includes(v.id) && <button className="rmv-btn" onClick={()=>{removeFromCart(v)}}> Remove </button>}
                                </div>)
                    })
                }    
                </div>
            </div> );
}
 
export default GroceryList;


        // if( cartItems.some( (v)=>{return v.id==grocery.id} ) == false)
        // {
        //     cartItems.push(grocery);
        //     localStorage.setItem("cartItems" , JSON.stringify(cartItems));
        //     alert("new item added to cart");
        // }
        // else
        // {
        //     alert("Itrm already in cart list !")
        // }
