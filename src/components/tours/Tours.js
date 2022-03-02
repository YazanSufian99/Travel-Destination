import "./Tours.css"
// import data from "./data/data.json";  
import React from 'react';

const Tours = (props)=>{
    return(
        <>
        {
            props.city.map(city =>{
                return(
                  <div id="div1">
                    <h3>{city.name}</h3>
                    <p>{city.info}</p>
                    <h5>{city.price}</h5>
                    <img src={city.image} alt="" />
                  </div>
                )
                
            })
        }
        {/* <Tours city={data}/> */}
        </>
    )
    };
    export default Tours;