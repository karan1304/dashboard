import React, { useState } from 'react'
import './Card.css'
// import {AnimateSharedLayout} from 'framer-motion';
import { LayoutGroup, motion } from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons'
import Chart from 'react-apexcharts';



const Card = (props) => {
const [expanded , setExpanded] = useState(false);
  return (
    <LayoutGroup>
        { expanded ? <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>:<CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>}
        
    </LayoutGroup> 
  )
}

function ExpandedCard({param, setExpanded})
{
    const data = {
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

    return(
        <motion.div className='ExpandedCard' style={{background:param.color.background, boxShadow : param.color.boxShadow}} LayoutId='expandableCard'>

            <div style={{alignSelf:'flex-end',cursor:'pointer',color:'white'}}>
                <UilTimes onClick={setExpanded} />
            </div>

            <span>{param.title}</span>

            <div className='chartContainer'>
                
                <Chart series={param.series} type='area' options={data.options}/>

            </div>

            <span>Last 24 hours</span>

        </motion.div>
    )
}

function CompactCard ({param, setExpanded})
{
    const Png = param.png;
    return (
        <motion.div className="CompactCard" style={{background:param.color.background, boxShadow:param.color.boxShadow}} onClick={setExpanded} LayoutId='expandableCard'>
            <div className="radialBar">
                <CircularProgressbar 
                value={param.barValue}
                text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                    <Png/>
                    <span>${param.value}</span>
                    <span>Last 24 hours</span>
                </div>
        </motion.div>
    );
}



export default Card
