import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
    
      options: {
        theme: {
            monochrome: {
              enabled: true,
              color: '#7BCBD4',
              shadeTo: 'dark',
              shadeIntensity: 0.65
            }
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
              value: {
                show: false,
                fontSize: '16px',
                
                fontWeight: 400,
                color: undefined,
                offsetY: 100,
                formatter: function (val) {
                  return val
                }
              },
             
              total: {
                show: false,
                showAlways: false,
                label: 'Total',
                fontSize: '22px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: '#373d3f',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)
                }
              }
            }
          },      
        }
      }},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;