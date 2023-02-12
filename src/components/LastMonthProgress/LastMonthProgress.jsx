import React from 'react'
import './LastMonthProgress.css'
import Mode from '../../Hooks/Mode'
import Chart from '../chart/Chart'
export default function LastMonthProgress() {
    let [mode,color] = Mode()
  return (
    <div className='lastMonthProgress-container' style={{ background:`${mode}`,color:color}}>

        <div className="LastMonthProgress-title">
            <h1 style={{margin:0}}>662,000<span style={{color:'rgb(116, 116, 116)',fontSize:'20px'}}>$</span></h1>
            <span className='lastMonth-name'>درآمد پروژه ها در فروردین</span>
        </div>
        <ul style={{width:'100%',height:'60px',margin:'0',padding:'0'}}>
            <li className='lastMothProgress-items'><span style={{color:'rgb(116, 116, 116)'}}>سیستم</span> <span>4500$</span></li>
            <li className='lastMothProgress-items'><span style={{color:'rgb(116, 116, 116)'}}>اپ ها</span> <span>4500$</span></li>
            <li className='lastMothProgress-items'><span style={{color:'rgb(116, 116, 116)'}}>سایر</span> <span>4500$</span></li>
        </ul>
    </div>
  )
}
