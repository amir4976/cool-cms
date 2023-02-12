import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import UserMainProfile from '../../components/usermainProfile/UserMainProfile'
import './security.css'
import Mode from '../../Hooks/Mode'
import ShortOfLast24h from '../../components/shortOfLast24h/ShortOfLast24h'
export default function Security() {
  let [mode, color] = Mode()
  return (
    <div className='security-container'>
      <PageHeader title='امنیت'/>
      <UserMainProfile/>
      <div className="security-first-row">
      <ShortOfLast24h/>
      <div className="testSecurityDiv">
        <div className="testDiv-child" style={{background:mode,color:color}}><h1> hi ist</h1></div>
        <div className="testDiv-child" style={{background:mode,color:color}}><h1> hi ist</h1></div>
      </div>
      </div>
    </div>
  )
}
