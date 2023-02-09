import React, { useEffect, useState } from 'react'
import Jest from "./Jest.png";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Compteurs = () => {

    const [valeur,setValeur]=useState(0)
    const [chrono,setChrono]=useState(0)



    const onIncrement=()=>{       
        setValeur(valeur+1)
    }

    const onReset=()=>{       
        setValeur(0)
    }

    const onDecrement=()=>{       
        setValeur(valeur-1)
    }

   const onChrono=()=>{
        setChrono(chrono+1);   
        }

      

        useEffect(()=>{
              setInterval(onChrono, 1000);  
        })
  

    
  return (
    <div className="container">
        <div className='mt-3 w-25 mx-auto text-center fw-bold fs-5 bg-dark rounded-pill' style={{fontFamily:'Arial',color:"#ffff"}}><span className='text-danger'>JEST</span> COMPONENT TESTING </div>
        <div className='mt-3 w-25 mx-auto text-center fw-bold fs-5 bg-light' style={{fontFamily:'Arial'}}>Chronomètre</div>
        <div className='mt-3 w-25 mx-auto text-center fw-bold fs-3' style={{fontFamily:'Arial'}}>{chrono}</div>
         <div className="mt-3 w-25 mx-auto" style={{height:'100px'}}>
            <div className="card" style={{width:'20rem'}}>
            <div className="card-header">
                     <img src={Jest} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body bg-dark">
                    <p  className="card-text fw-bold text-center" style={{fontSize:"7rem",color:"#ffff"}} data-testid="valeur">{valeur}</p>
                </div>
               
                <div className="bg-light d-flex justify-content-center card-body">
                <button onClick={onDecrement}  className='ms-1 btn btn-secondary me-1'>Decrement</button>  
                    <button onClick={onReset}  className='ms-1 btn btn-danger me-1'>Reset</button>  
                   <button onClick={onIncrement}  className='ms-1 btn btn-dark'>Increment</button>  
                   
                </div>
            </div>                
        </div>    
    </div>
  )
}

export default Compteurs
