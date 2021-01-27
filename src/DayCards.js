import React from 'react';
import './DayCards.css';



var moment = require('moment');

const DayCards = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  var iconcode = reading.weather[0].icon;
  const imgURL = "http://openweathermap.org/img/w/" + iconcode + ".png"
  //const imgURL1 = `owi owi-${reading.weather[0].icon} owi-4x`

  return (

    <div className="col-sm-2" class="cardbody">
    <div class= "flip-card">
      <div class= "flip-card-inner">
        <div class= "flip-card-front">
          <h3 className="card-title" >{moment(newDate).format('dddd')}</h3>
          <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
          <img src={imgURL} height="70px"></img>
         
          <h4>{Math.round(reading.main.temp_min)}  &#176;F</h4>
          
        </div>
        <div class="flip-card-back">
          <h3>Details</h3>
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
          <h4>Min: {Math.round(reading.main.temp_min)}  &#176;F</h4>
          <h4>Max: {Math.round(reading.main.temp_max)} &#176;F</h4>
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
   
  </div>
   
  )
}

export default DayCards;
/* <div class="container col-sm-2">
    <a class="card1">
    <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
    <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
    <img src={imgURL}></img>
    <p class="small"> <h2>{Math.round(reading.main.temp)} °F</h2></p>
    <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
    <div class="go-corner">
      <div class="go-arrow">
        →
      </div>
      
    </div>
   
  </a>
  </div>
    /*<div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
       <img src={imgURL}></img>
        <h2>{Math.round(reading.main.temp)} °F</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
    
    
     <div className="info" data-hover>
            
            <div className="card-body">
            <h4>Min: {Math.round(reading.main.temp_min)}  &#176;F</h4>
            <h4>Max: {Math.round(reading.main.temp_max)} &#176;F</h4>
              <p className="card-text">{reading.weather[0].description}</p>
    </div>
    </div>
    */