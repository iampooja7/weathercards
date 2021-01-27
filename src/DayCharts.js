import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import './DayCards.css';
const DayCharts = ({data1,n1}) => {
    var data= [];
    var i=0;
   console.log("data  "+n1)
   console.log(data1)
    while(i<n1){
        console.log(i)
        data[i]=data1[i]
        i++;
    }
   
   
  return (
   
   <div class="colordiv">
       
       
       <br></br>
   <div className="section col-md-6">
        <h3 className="section-title"></h3>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300} width={1000}>
            <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <Tooltip />
              <XAxis dataKey="dt_txt" />
              <YAxis />
              <CartesianGrid stroke="grey" strokeDasharray="5 5" />
              <Legend/>
              <Line type="monotone" dataKey="main.temp_min" stroke="red" />
              <Line type="monotone" dataKey="main.temp_max" stroke="blue" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
  </div>
   
  )
}

export default DayCharts;