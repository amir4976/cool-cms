import React, { useState } from 'react'
import './TodayNew.css'
import Mode from '../../Hooks/Mode'
import { dateReport } from '../../data'
export default function TodayNews() {
    let [mode, color] = Mode()
    let [Report, setReport] = useState([])
    console.log(dateReport)
    const getInfoFromDayN = (date) => {
        let DateReportIsActiveFalse = dateReport.forEach((report)=>{
            return report.isActive=false 
        })
        

        let isInDateReport = dateReport.filter((dateReport) => {
            return dateReport.date === date
        })
        let news = isInDateReport[0].isActive=true
        console.log(news);
        
        setReport(isInDateReport[0].reports)
        console.log(isInDateReport)
    }


    return (
        <div className='TodayNews-container' style={{ background: mode, color: color }}>
           
           
            <div className="TodayNews-header">
                <div className="todayHeader-title">
                    <span className='todayHeader-title'>اخبار امروز</span>
                    <span className='todayHeader-dis'>400000 کل تحویل ها</span>
                </div>
                <div className="todayReport-btn">
                    <button className='today-report' style={{ background: color, color: mode }} >گزارش</button>
                </div>
            </div>


            <div className="datePicker">
                {dateReport.map((date) => (
                    <button style={{color:color}} className={`dateBtn ${date.isActive ? 'activeDate': ' ' }`} onClick={() => getInfoFromDayN(date.date)}>
                        <span>{date.day}</span>
                        <span>{date.date}</span>
                    </button>
                ))}
                </div>

            <div className="report-container">
                {!Report && (
                    <h1> please pick a day</h1>
                )}
                {Report && Report.map((report)=>(
                     <div className="today-report-sec" style={{ borderRight: `5px solid ${report.color}` }}>
                     <div className="report-info" style={{marginRight:'10px'}}>
                         <span className='today-report-time'>{report.time} {' '}  <span className='dayTime'>{report.dayTime}</span> </span>
                         <span className='today-report-title'>{report.name}</span>
                         <span className='byWho'>توسط {report.by}</span>
                     </div>
                     <button className="discover-btn">
                         نمایش
                     </button>
                 </div>   
                ))}
            </div>


        
    </div >  
  )
}
