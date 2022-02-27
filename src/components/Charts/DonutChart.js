import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      series: [1200, 11000, 45000, 12000, 4500, 5000],
      options: {
        theme: {
            monochrome: {
              enabled: true,
              color: '#7BCBD4',
              shadeTo: 'dark',
              shadeIntensity: 0.65
            }
          },
          labels: ['Travel', 'Restaurants', 'Shopping', 'Digital Payments', 'ATM', 'Other'],

          legend:{
            position: "bottom"
          },
        plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10
          }, 
          donut: {
            size: '35%',
            background: 'transparent',
            labels: {
              show: true,
              color: 'red',
              name: {
                show: false,
                fontSize: '22px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: "red",
                offsetY: 10,
                formatter: function (val) {
                  return val
                }
              },
           
             
              
            }
          },      
        }
      }},
      
      
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="400" />
      </div>
    );
  }
}

export default Donut;