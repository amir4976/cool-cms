import React from 'react'
import './notife.css'
import { useContext } from "react"
import { ThemeContext } from '../../../contexts/Theme'
import WidgetHeader from '../widgetHeader/WidgetHeader'
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import { LastNewNotif } from '../../../data'
export default function Notife() {
    let [{theme,isDark},toggleTheme] = useContext(ThemeContext)
    let mode = null
    console.log(theme);
    if(theme == 'dark'){
      mode = { background: "#1e1e2d", color:'#fff'}
    }else{
      mode = {background:'#fff' ,color:'#000'}
    }
  return (
    <div style={mode } className='notifListStatus-container'>
      <WidgetHeader title='اعلان ها'/>

      <div className="notification-warper">
        {LastNewNotif.map((notif)=>(
          <div className={`notification-container ${notif.Status}`}>
          <div className="notification-info">
            <LayersRoundedIcon/>
            <div className="notification-title">
              <span className='main-notification-title'>{notif.title}</span>
              <span className='notification-dis'>سررسید در {notif.timeOut} روز  </span>
            </div>
          </div>
          <span className='notification-progress'>{notif.progress}</span>
        </div>
        ))}
      </div>
    </div>
  )
}
