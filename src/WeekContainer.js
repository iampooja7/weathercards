import React from 'react';
import DayCards from './DayCards'

import './weekcontainer.css';
import DayCharts from './DayCharts';

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: [],
    location:"Nagpur, IN",
    n:5
  }
  onSubmit(e){
    e.preventDefault();
    this.state.location = this.location.value;
    this.state.n = this.n.value;
    console.log(this.state.location);
    console.log(this.state.n);
    this.componentDidMount();
}
  componentDidMount = () => {
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&units=metric&APPID=8f1ba39fd41e0255848e2d7c87a467e7`
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
    
    
  }
  
  formatDayCards = () => {
    return this.state.dailyData.slice(0,this.state.n).map((reading, index) => 
    <DayCards reading={reading} key={index} />)
  }

 
  render() {

    return (
    <div className="container  ">
      <br></br>
      <h1 className="text-light">Weather Forcast</h1>
      <br></br>
  <div class="row justify-content-center" >
    <div class="col-xs-10 col-xs-offset-1">
  <form action="#" method="#" role="search">
    <div class="input-group">
    <input class="form-control" placeholder="Enter city"  type="text" ref={(c) => (this.location=c)}></input>
    <input class="form-control" placeholder="Enter no. of day"  type="text" ref={(d) => (this.n=d)} ></input>
    
     <div class="input-group-btn">
    <button type="submit" id="searchbtn" onClick={this.onSubmit.bind(this)}>
    search</button>
    </div>
    </div>
    </form>
    </div>
    </div>
    <br></br>
   
    <h3 className="display-5 text-light">{this.state.location}</h3>
      <br></br>
      <div class="adjacent" >
        <div className="row justify-content-center"  >

          {this.formatDayCards()}
          
     
       </div>
       </div> 
       <br></br>
       <div class="adjacent" >
      <DayCharts data1={this.state.dailyData} n1={this.state.n}></DayCharts>
      </div>
    </div>
 
    )

  }
}

export default WeekContainer;