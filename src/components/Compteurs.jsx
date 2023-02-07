import React from 'react'
import Jest from "./Jest.png";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Compteurs = () => {
    const onIncrement=()=>{
        console.log("clicked")

    }


  return (
    <div className="container">
         <div className="mt-3 w-25 mx-auto">
            <div className="card" style={{width:'18rem'}}>
            <div className="card-header">
                     <img src={Jest} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <p className="card-text fw-bold text-center" style={{fontSize:"10rem"}}>0</p>
                </div>
               
                <div className="bg-light d-flex justify-content-center card-body">
                   <button onClick={onIncrement}  className='btn btn-outline-dark'>Increment</button>  
                </div>
            </div>                
        </div>    
    </div>
  )
}

export default Compteurs
