
import Chart from "react-apexcharts";
import {FaInfoCircle}  from 'react-icons/fa';
import './styles.css';
import React from 'react';

//Gráfico de barras
function Bar() {
    const series = [
      {
        name: "series-1",
        //      0    1    2    3    4    5    6     7
        data: [900, 430, 448, 470, 540, 580, 690, 1100/*, 1200, 1380*/],
      },
    ];

    const xaxis = {
      categories: [
        //        0               1            2             3            4               5          6            7
        "Distrito Federal","Minas Gerais","Mato Grosso","São Paulo","Rio de Janeiro","Pernambuco","Bahia", "Santa Catarina",
      ],
    };
  
    const options = {
      chart: {
        type: "bar",
        
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
  
      xaxis,
    };
  
    return (
      <div className="boxBar">

      <div className="titleGraph">
          Barras
          <button className='info'> 
              <FaInfoCircle size={17} color="#19D7AA"/>
          </button>
      </div>

        <div className="graph">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="100%"
          />
        </div>
      </div>
  
    );
  }

export default Bar;
