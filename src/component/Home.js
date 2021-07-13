import React, { useState,useEffect } from 'react'

import pic1 from './images/pic1.jpg';
import pic2 from './images/corona.jpg';


function Home() {
    const [data,setData]=useState();
    
    const [input,setInput]=useState("");
   const [name,setName]=useState("");

   async function getData(){
       const covidData=await fetch('https://api.covid19api.com/summary');
    //    console.log(covidData);
    const jsonData=await covidData.json();
    setData(await jsonData.Countries);
  
       
   }
   
    useEffect(() => {
     getData();
    }, []);
    async function search(){
      if(data && input ){
           var country = await data.filter(item=>{
           return  item.Country==(input.charAt(0).toUpperCase() + input.slice(1));   
            });
    console.log(country[0]);
    setName(country[0]);
  
    }
      }   
    return (
        <div>
        <div className="container mt-5">
        <div class="home-search text-center">
            <h3 className="text-primary text-capitalized ">search your country status</h3>
            <hr className="w-20"/>
            <input id="inp" className="input w-50  mr-5 pl-5 py-2  text-capitalize" type="text" placeholder="please write country name" onChange={(e)=>{
                // e.preventDefault();
                setInput(e.target.value)}}/>
            {/* <a className="btn btn-primary text-20 but" href={`#${id}`} onClick={()=>search()}>Search</a> */}
         
<button type="button" className="btn btn-primary but" data-toggle="modal" onClick={()=>search()} data-target={"#exampleModal"}>
  Search
</button>
{name?
<div class="modal fade model-container" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        
      <div class="modal-header">

    
            <h2 className="text-center text-dark px-5 py-1"  >{name.Country}</h2>
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       
      <div className=" model-wrapper bg-info">
             <h4>TotalConfirmed</h4>
            <p className="text-center text-white ">{`${name.TotalConfirmed}`}</p>
        </div>
        <div className="model-wrapper bg-success">
        <h4>TotalRecovered</h4>
            <p className="text-center  text-white">{name.TotalRecovered}</p>
        </div>
        <div className="model-wrapper bg-danger">
        <h4>TotalDeaths</h4>
            <p className="text-center  text-white">{name.TotalDeaths}</p>
        </div>
        <div className="model-wrapper bg-info">
        <h4>NewConfirmed</h4>
            <p className="text-center  text-white">{name.NewConfirmed}</p>
        </div>
        <div className="model-wrapper bg-success">
        <h4>NewRecovered</h4>
            <p className="text-center  text-white">{name.NewRecovered}</p>
        </div>
        <div className="model-wrapper bg-danger">
        <h4>NewDeaths</h4>
            <p className="text-center  text-white">{name.NewDeaths}</p>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary  but" data-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
:null}
        </div>
        <div className="row home-wrapper mt-auto">
        <div className="col-10 col-lg-3 col-md-3 pt-5 ">
         <img className="img" src={pic1} />
         </div>
         <div className="moral text-center col-lg-4 mx-auto">
         <h1 className="">Let's Stay, Fight Together Against Cor<img className="mx-0 coimg" src={pic2} height="100px" width="150px"/> na Virus</h1>
         </div>
        </div>
        </div>
        <div className="container mt-5">
        <div className="row">
        <div className="col-12 mt-5 ">
            <h1 className="text-uppercase text-center text-danger heading">covid-19 live updates of the world</h1>
            <hr className="m-30 text-center"/>
        </div>
        </div>
        
        </div>
        <div className="container-fluid mt-5">
        <div className="row cases">
        <div className="country">
            <p className="text-center text-secondry">Country Name</p>
        </div>
        <div className=" text-wrapper">
            <p className="text-center text-secondry">TotalConfirmed</p>
        </div>
        <div className="text-wrapper  ">
            <p className="text-center text-secondry">TotalRecovered</p>
        </div>
        <div className="text-wrapper">
            <p className="text-center text-secondry">TotalDeaths</p>
        </div>
        <div className="text-wrapper hid">
            <p className="text-center text-secondry ">NewConfirmed</p>
        </div>
        <div className="text-wrapper hid">
            <p className="text-center text-secondry ">NewRecovered</p>
        </div>
        <div className="text-wrapper hid">
            <p className="text-center text-secondry">NewDeaths</p>
        </div>
        </div> 
        </div>
          {data?data.map((val)=>{
              return(
                <div id ={val.ID} key={val.ID} className="container-fluid mt-1">
        <div className="row cases">
        <div className="country " style={{background:'purple'}}>
            <p className="text-center  text-white"  >{val.Country}</p>
        </div>
        <div className=" text-wrapper bg-info">
            <p className="text-center ">{val.TotalConfirmed}</p>
        </div>
        <div className="text-wrapper bg-success">
            <p className="text-center ">{val.TotalRecovered}</p>
        </div>
        <div className="text-wrapper bg-danger">
            <p className="text-center ">{val.TotalDeaths}</p>
        </div>
        <div className="text-wrapper bg-info hid">
            <p className="text-center ">{val.NewConfirmed}</p>
        </div>
        <div className="text-wrapper bg-success hid">
            <p className="text-center ">{val.NewRecovered}</p>
        </div>
        <div className="text-wrapper bg-danger hid">
            <p className="text-center ">{val.NewDeaths}</p>
        </div>
        </div> 
        </div>
              )
          }):null}
         
        </div>
    )
}

export default Home;
