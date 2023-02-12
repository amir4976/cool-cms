import React from 'react'
import './pey.css'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme'
import WidgetHeader from '../actionsStatus/widgetHeader/WidgetHeader'
import { person } from '../../data'
export default function Peyments() {
    let [{theme,isDark},toggleTheme] = useContext(ThemeContext)
    let mode = null
    

        if(theme=='dark'){
            mode = { background: "rgb(30, 30, 45)", color: "#fff" };
        }else{
            mode = { background: "#fff"}
        }

  return (
    <div className='Files-container' style={mode}>
        <WidgetHeader title='پرداخت ها' discretion='یک هفته اخیر'/>
    <div className="files-dashboard-warper">
        {person.map((person)=>(
                <div className="file-container">
                    <img className='cover-file-dushbord' src={person.cover} alt="" />
                    <span>{person.title}</span>
                    <span className='peyment'>{person.peyment}</span>
                    <span>20%</span>
                </div>
        ))}
    </div>
    </div>
  )}