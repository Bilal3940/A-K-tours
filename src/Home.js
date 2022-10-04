import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Switch } from 'react-switch'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function Home() {
  const [ loading, setLoading] = useState(true);
  const [ tours, setTours] = useState([]);
  const removeTour =(id)=>{
    const newTours = tours.filter((tour)=>tour.id!== id);
    setTours(newTours);
  } 
  const fetchTours= async()=>{
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      alert("Error Occured");
    }
  }
    useEffect(()=>{
      fetchTours();
    },[]); 

  if(loading){
  return <main>
    <Loading/>
  </main>
  }
  if(tours.length===0){
    return(
      <main>
    <div className='title'>
        <h2>No Tours left</h2>
        <button className='btn' onClick={fetchTours}>Refresh</button>
    </div>
    </main>
    )
  }
  return (
    <main>
        <Tours tours ={tours} removeTour ={removeTour}/>
    </main>
       
  )
}
export default Home;