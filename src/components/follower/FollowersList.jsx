import React from 'react'
import './followers.css'
import { followers } from '../../data'
import {Row,Col} from 'react-bootstrap'
import Mode from '../../Hooks/Mode'
import DoneIcon from '@mui/icons-material/Done';
export default function FollowersList() {
  let [mode, color]= Mode()
  return (
    <Row className='followers-warper'>
        {followers.map((follow)=>(
              <Col md={12} xl={4} className="follower-container">
                  <div className="follower-cord" style={{background:mode,color:color}}>
                    <div className="follower-card-img" style={{backgroundImage:'url('+ follow.profile +')'}}></div>
                    <div className="follower-name">{follow.name}</div>
                    <span className='follower-job'>{follow.job}</span>

                    <div className="follower-performance">
                      <div className="follower-income">{follow.income} <span className='follow-performance-spans'>درامد</span> </div>
                      <div className="follower-sell">{follow.sell} <span className='follow-performance-spans'>فروش</span> </div>
                     
                    </div> <button className='followBtn'><DoneIcon/> followed </button>
                  </div>
              </Col>  
        ))}
    </Row>
  )
}
