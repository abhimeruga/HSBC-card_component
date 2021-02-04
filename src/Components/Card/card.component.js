import React from 'react';
import './card.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FileBreak, Printer, ExclamationCircleFill, CaretDown } from 'react-bootstrap-icons';
function CardComponent( props ) {
    const {heading, subHeading, referenceId, category, status } = {...props.cardData};
    return (
        <div className="" style={{margin:'auto', width:'90%',}}>
        <div className=" card text-center">
         <div className="card-header">
             <div style={{display: "flex"}}>
               <div style={{flex:2}}>
                 <h4 style={{textAlign:'left'}}>{heading} </h4>
                 <h6 style={{textAlign:'left'}}>{subHeading}</h6>
               </div>
               <div style={{flex:2}}>
                 <div className="">
                   <Printer size={20} style={{marginRight:10}}/> | 
                   <FileBreak style={{marginLeft:10}} size={20}/>
                   <button className="btn btn-outline-secondary" style={{marginLeft:50}}>Reject</button>
                   <button className="btn btn-secondary" style={{marginLeft:10}}>Authorize</button>
                 </div>
               </div>
             </div>
         </div>
         <div className="card-body" style={{width:'60%'}}>
           <div style={{display: "flex"}}>
            <div style={{display: "flex", flex:2}}>
             <div style={{flex:2}}>
             <div>
               <div style={{color: 'gray'}}>
                Request Reference
               </div>
               <div>
                {referenceId}
               </div>
             </div>
             </div>
             <div style={{flex:1}} > 
                <div> | </div>  
                <div> | </div> 
             </div>
             <div style={{flex:1}} >
               <div>
                 <div style={{color: 'gray'}}>
                   Category
                 </div>
                 <div>
                   {category} 
                 </div>
               </div>
             </div>
             <div style={{flex:1}}> 
                <div> | </div>  
                <div> | </div> 
             </div>
             <div style={{flex:1}}>
               <div>
                 <div style={{color: 'gray'}}>
                   Request Status
                 </div>
                 <div>
                   <ExclamationCircleFill color="yellow"/> {status} 
                 </div>
               </div>
             </div>
             </div>
           </div>
         </div>
         <div style={{textAlign:'right', marginRight:'12%'}}><a href="Javascript:void(0)">View Details <CaretDown/></a></div>
       </div>
       </div>
    )
}

export default CardComponent
