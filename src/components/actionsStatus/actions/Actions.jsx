import React from 'react'
import './action.css'
import { useContext } from "react"
import { ThemeContext } from '../../../contexts/Theme'
import WidgetHeader from '../widgetHeader/WidgetHeader'
import { lastActions } from '../../../data'
export default function Actions() {
    let [{theme,isDark},toggleTheme] = useContext(ThemeContext)
    let mode = null
    console.log(theme);
    if(theme == 'dark'){
      mode = { background: "#1e1e2d",color:'#fff'}
    }else{
      mode = {background:'#fff' ,color:'#000'}
    }
  return (
    <div style={mode } className='actionsListStatus-container'>
      <WidgetHeader title='فعالیت ها' discretion='890,344 فروش' />
      <div className="actions-container">
       {lastActions.map((action)=>(
             <div className="last-actions-report">
             <div className="timeZone">
             <span className="time">{action.time}</span>
               <div className="circle-color" style={{border:`5px solid ${action.color}`,background:theme=='dark'?'#1e1e2d':'#fff' }}></div>
             </div>
             <div className="actions-Dis" style={{color:action.isImport && '#757575'}}>{action.dis}</div>
           </div>
       ))}
       <div className="timeLine"></div>
      </div>
    </div>
  )
}
