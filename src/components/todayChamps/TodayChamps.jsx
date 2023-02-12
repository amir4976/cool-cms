import React from 'react'
import './TodayChamps.css'
import Mode from '../../Hooks/Mode'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function TodayChamps() {
 let [mode,color]=Mode()
    return (
    <div className="TodayChamps-container" style={{background:mode,color:color}}>
        <div className="todayChamps-header">
            <span className='champs-Person'>350نفر</span>
            <span className='Champs-title'>حرفه ای</span>
        </div>
        <div className="today-Champs-preview">
        <span>قهرمانان امروز</span>
        <AvatarGroup className='AvatarGroup' total={24}>
      <Avatar alt="Remy Sharp" src="/profs/omid-armin-b5yGzWOpkMo-unsplash.jpg" />
      <Avatar alt="Travis Howard" src="/profs/jake-nackos-IF9TK5Uy-KI-unsplash.jpg" />
      <Avatar alt="Agnes Walker" src="/profs/300-14.jpg" />
      <Avatar alt="Trevor Henderson" src="/profs/stefan-stefancik-QXevDflbl8A-unsplash.jpg" />
    </AvatarGroup>
        </div>
    </div>
  )
}
