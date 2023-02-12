import React from 'react'
import './campaigns.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import UserMainProfile from '../../components/usermainProfile/UserMainProfile'
import { campaigns } from '../../data'
import {Row , Col} from 'react-bootstrap'
import Mode from '../../Hooks/Mode'
export default function Campaigns() {
 let [mode, color] = Mode()
  return (
    <div className="campaigns-container">
        <PageHeader title='کمپین ها'/>
        <UserMainProfile/>
    <Row className="campaigns-row">
      {campaigns.map((campaign)=>(
        <Col className='campaigns-col' md={12} xxl={4}>
          <div className="campaign" style={{background:mode,color:color}}>
            <div className="campaign-Header">
              <div className="campaign-Info">
                <img className='campaign-Header-icon' src={campaign.icon} alt="" />
                  <span>{campaign.campaignsName}</span>
              </div>
              <div className="campaign-ListBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
																</g>
															</svg>
              </div>
            </div>

            <div className="campaign-title"><h4>{campaign.campaignsName}</h4></div>

            <div className="campaign-weekleyCheck-report">
                <span style={{color:campaign.rise ?'green' : 'red' }}>{campaign.weeklyCheck}</span> <span>{campaign.dis}</span>
            </div>
            <div className="campaign-footer">
              <span className="campaign-footerInfo">{campaign.footerInfo}</span>
              <span className="campaign-footerDIS">{campaign.footerDIS}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
    </div>
  )
}
