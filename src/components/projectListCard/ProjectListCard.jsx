import React, { useEffect } from 'react'
import './ProjectListCard.css'
import Mode from '../../Hooks/Mode'


export default function ProjectListCard(prop) {
    let statusLogo = null
    if (prop.status == 'pending') {
        statusLogo = <span className='pending-projectListCard'>در حال انجام</span>
        console.log('first')
    } else if (prop.status == 'deslined') {
        statusLogo = <span className='deslined-projectListCard'>منقضی شده</span>
    } else if (prop.status == 'done') {
        statusLogo = <span className='done-projectListCard'>انجام شده</span>
    }

    let [mode, color] = Mode()

    return (
        <div className='projectListCard-container' style={{background:mode,color:color}}>
            <div className="projectListCard">
                <div className="projectListCardHeader">
                    <img className='projectListCardHeader-icon' src={prop.componyIcon} alt="" />
                    {statusLogo}
                </div>
            <div className="projectList-infos">
            <h4>{prop.name}</h4>
                <span>برنامه برای {prop.programFor}</span>
            </div>

            <div className="projectListCard-performance">
                <div className="projectListCard-performance-box"><span className='projectListCard-performance-box-performance'>120000</span><span className='projectListCard-performance-box-title'>بودجه</span></div>
                <div className="projectListCard-performance-box"><span className='projectListCard-performance-box-performance'>120000</span><span className='projectListCard-performance-box-title'>بودجه</span></div>
            </div>

            <div className="projectListCard-progress">
                <div className="projectListCard-trigger" style={{width:prop.progress}}></div>
            </div>
            </div>
        </div>
    )
}
