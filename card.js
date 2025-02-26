import React from "react";
import { useNavigate } from "react-router-dom";


function Card(){
    const navigate = useNavigate()
    return(<div>
    <h1> add to card</h1>
    <button onClick={()=>navigate(-1)} >go back</button>
    </div>)
}

export default Card;