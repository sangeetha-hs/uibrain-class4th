import React from "react";

let CssCard = (props)=>{
    console.log(props)
    return(
        <>
     <div className="card">
     <div className="card-body">
     <h3>{props.message}</h3>
     <p>lorem20</p>
     </div>

     </div>


        </>
    )
}
//functioal component

export default CssCard;