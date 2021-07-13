import React, { useEffect } from 'react'
import p1 from './images/p1.jpeg'
import p2 from './images/p2.jpeg'
import p3 from './images/p3.jpeg'
function Prevetion() {
    return (
       <>
<div class="container-fluid mt-0">
  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>


    <div class="carousel-inner prev">
      <div class="item active  ">
        <img src={p1} alt="Los Angeles" style={{width:'100%', height:"80vh"}}/>
      </div>

      <div class="item">
        <img src={p2} alt="Chicago" style={{width:'100%', height:"80vh"}}/>
      </div>
    
      <div class="item">
        <img src={p3} alt="New york" style={{width:'100%', height:"80vh"}}/>
      </div>
    </div>

 
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
<div className="container">
<h1 className="text-center mt-5 text-success"> Prevention from Covid-19</h1>
<hr className="w-30 "/>
 <div className="row">
 <div className="col-10 mx-auto">
     <h3 className="text-primary">Protect yourself and others from COVID-19</h3>
     <hr className="m-20"/>
     <p className="prep" >If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work. Do it all!</p>
 </div>
 <div className="col-10 mx-auto">
     <h3 className="text-primary">What to do to keep yourself and others safe from COVID-19</h3>
     <hr className="m-20"/>
     <p className="prep" >Maintain at least a 1-metre distance between yourself and others to reduce your risk of infection when they cough, sneeze or speak. Maintain an even greater distance between yourself and others when indoors. The further away, the better.
Make wearing a mask a normal part of being around other people. The appropriate use, storage and cleaning or disposal are essential to make masks as effective as possible.</p> </div>
  </div>
</div>
       </>

    )
}

export default Prevetion;
