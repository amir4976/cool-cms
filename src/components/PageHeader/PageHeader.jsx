import React from 'react'
import './PageHeader.css'
import Mode from '../../Hooks/Mode'
export default function PageHeader(prop) {
    let [mode,color] = Mode()
  return (
    <div className='pageHeader'>
            <h4 style={{color:color}}>{prop.title}</ h4>
            
            <div className='PageHeader-btns'>
                <button className='pageHeader-btn' style={{background:mode ,color:color}}>فیلتر</button>
                <button className='pageHeader-btn' style={{background:color ,color:mode}}>ساختن</button>
            </div>
    </div>
  )
}
