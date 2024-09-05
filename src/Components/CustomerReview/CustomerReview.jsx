import React from 'react'
import './CustomerReview.css'
import Chart from 'react-apexcharts';

const CustomerReview = () => {

    const data = {
        series:[
            {
            name:"Review",
            data:[10, 50, 30, 90, 40, 120, 100]
            }
        ],
        options:{
            chart:{
                type:"area",
                height:'auto'
            },
            dropShadow:{
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color:'#000',
                opacity:0.35,
            },
            fill:{
                color:['#fff'],
                type:'gradient'
            },
            dataLables:{
                enabled:false
            },
            stroke:{
                curve:'smooth',
                color:['white']
            },
            tooltip:{
                x:{
                    format:'dd/mm/yy HH:MM'
                },
            },
            grid:{
                    show:true
            },
            xaxis:{
                type:'datetime',
                categories:[
                    '2024-04-20T00:00:00:000Z',
                    '2024-04-20T01:30:00:000Z',
                    '2024-04-20T02:30:00:000Z',
                    '2024-04-20T03:30:00:000Z',
                    '2024-04-20T04:30:00:000Z',
                    '2024-04-20T05:30:00:000Z',
                    '2024-04-20T06:30:00:000Z'
            ]
            }

        }
    };


  return (
    <div className='CustomerReview' >
        <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview
