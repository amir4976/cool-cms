import React from 'react'
import { NavLink } from 'react-router-dom'
import './userMainprofile.css'
import { profile } from '../../data'
import Mode from '../../Hooks/Mode'
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import {Row , Col} from 'react-bootstrap'
// import Stack from '@mui/material/Stack';
export default function UserMainProfile() {
    let [mode, Color] = Mode()
    return (
       <div className="usermainProfile-warper">
         <div className="userMainProfile-container" style={{ background: mode, color: Color }}>
            <div className="usermainprofile">
                <div className="usermainProfile-profile-sec">
                    <div className="usermainProfile-profile-img">
                        <img src={profile.profile} alt="" />
                    </div>
                    <div className="usermainprofile-profile">
                        <Row  className="usermainprofile-profile-header">

                            <Col md={12} lg={6}  className='usermainprofile-profile-header-name'>
                                <h3>{profile.name}</h3>
                                <div className='userMainProfile-user-info-reference'>
                                    <span>{profile.job}</span>
                                    <span>محل زندگی</span>
                                    <span>{profile.email}</span>
                                </div>
                            </Col>

                            <Col className='usermainprofile-profile-header-performans-btns'>
                                <button className='follow-BTN' >دنبال کردن</button><button className='haired-BTN'>مرا استخدام کن</button><button className='more-BTN' style={{ color: Color }}>...</button>
                            </Col>


                        </Row>
                        <div className='usermainprofile-profile-progressive'>
                            <div className='usermainprofile-progressive-boxes'>
                                <div className='usermainprofile-progressive-box'>$45,000 <span className='usermainprofile-progressive-box-dis'>درامد</span></div>
                                <div className='usermainprofile-progressive-box'>80 <span className='usermainprofile-progressive-box-dis'>درامد</span></div>
                                <div className='usermainprofile-progressive-box'>60% <span className='usermainprofile-progressive-box-dis'>درامد</span></div>
                            </div>

                            <div className='usermainProfile-profile-progressive-bar'>
                                <div className="usermainProfile-profile-progressive-bar-header">
                                    <span>تکمیل پروفایل</span> <span>50%</span>
                                </div>
                                <div className="usermainProfile-profile-progressive-bar-container">
                                    <div className="usermainProfile-profile-progressive-bar-trigger">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="usermainProfile-nav-sec">
                    <NavLink className={e => e.isActive ? 'userMainProfile-navLink userMainProfile-navLink-active' : 'userMainProfile-navLink'} to='/'>پروفایل کاربری</NavLink>
                    <NavLink className={e => e.isActive ? 'userMainProfile-navLink userMainProfile-navLink-active' : 'userMainProfile-navLink'} to='/project'>امار پروژه ها</NavLink>
                    <NavLink className={e => e.isActive ? 'userMainProfile-navLink userMainProfile-navLink-active' : 'userMainProfile-navLink'} to='/projectList'>پروژه ها</NavLink>
                    <NavLink className={e => e.isActive ? 'userMainProfile-navLink userMainProfile-navLink-active' : 'userMainProfile-navLink'} to='/Followers'>فالوور ها</NavLink>
                    <NavLink className={e => e.isActive ? 'userMainProfile-navLink userMainProfile-navLink-active' : 'userMainProfile-navLink'} to='/campaigns'>کمپین ها</NavLink>
                    <NavLink className={e => e.isActive ? 'userMainProfile-navLink userMainProfile-navLink-active' : 'userMainProfile-navLink'} to='/security'>امنیت</NavLink>
                </div>
            </div>
        </div>
       </div>
    )
}
