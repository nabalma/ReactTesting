import React, { useState } from 'react'
import Jest from "./Jest.png";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Compteurs = () => {

    const [valeur,setValeur]=useState(0)

    const onIncrement=()=>{       
        setValeur(valeur+1)
    }

    const onReset=()=>{       
        setValeur(0)
    }


  return (
    <div className="container">
        <div className='mt-3 w-25 mx-auto text-center fw-bold fs-5 bg-dark rounded-pill' style={{fontFamily:'Arial',color:"#ffff"}}>JEST TESTING COMPONENT </div>
         <div className="mt-3 w-25 mx-auto">
            <div className="card" style={{width:'20rem'}}>
            <div className="card-header">
                     <img src={Jest} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body bg-dark">
                    <p  className="card-text fw-bold text-center" style={{fontSize:"10rem",color:"#ffff"}} data-testid="valeur">{valeur}</p>
                </div>
               
                <div className="bg-light d-flex justify-content-center card-body">
                    <button onClick={onReset}  className='me-1 btn btn-danger'>Reset</button>  
                   <button onClick={onIncrement}  className='ms-1 btn btn-dark'>Increment</button>  
                   
                </div>
            </div>                
        </div>    
    </div>
  )
}

export default Compteurs
