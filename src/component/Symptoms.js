import React from 'react'
import s1 from './images/s1.jpg'
import s2 from './images/s2.jpg'
import s3 from './images/s3.jpg'
function Symptoms() {
    return (
        <>
           <div className="container my-5">
           <h1 className="text-center mt-5 text-danger"> Symptoms</h1>
           <hr className="w-30 "/>
               <div className="row ">

               <div className="col-10 col-lg-4 col-md-4 mb-5 mx-auto">
               <div class="card symp" >
  <img class="card-img-top" src={s3} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-danger">Most common symptoms</h5>
      <ul className="ml-5">
          <li>fever</li>
          <li>dry cough</li>
          <li>tiredness</li>
      </ul>
  </div>
</div>
               </div>
               <div className="col-10 col-md-4 col-lg-4  mb-5 mx-auto">
               <div class="card symp" >
  <img class="card-img-top" src={s1} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title text-danger">Less common symptoms</h5>
    <ul className="ml-5">
    <li>aches and pains</li>
    <li>sore throat</li>
    <li>diarrhoea</li>
    
   </ul>
  </div>
</div>
               </div>
               <div className="col-10 col-lg-4 col-md-4 mx-auto">
               <div class="card symp" >
  <img class="card-img-top" src={s2} alt="Card image cap" style={{height:'260px'}}/>
  <div class="card-body">
  <h5 class="card-title text-danger">Serious symptoms</h5>
      <ul className="ml-5">
          <li>difficulty breathing or  breath</li>
          <li>chest pain or pressure</li>
          <li>loss of speech or movement</li>
      </ul>
  </div>
</div>
               </div>
               </div>
           </div>
        </>
    )
}

export default Symptoms
