import React from "react";
import "./specialProject.css";
import Mode from "../../Hooks/Mode";
import LayersIcon from "@mui/icons-material/Layers";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import {Link} from 'react-router-dom'
export default function SpecialProject() {
  let [mode, color] = Mode();
  return (
    <div className="SpecialProject" style={{ background: mode, color: color }}>
      <div className="special-cover"></div>
      <div className="special-main">
        <div className="special-header">
          <div className="special-header-title">
            <span className="special">ویژه</span>
            <span className="special-title">طراحی وکتور ساحل</span>
          </div>
          <div className="special-header-status">
            <button className="special-btn" style={{ color: color }}>
              درحال پردازش
            </button>
          </div>
        </div>

        <div className="special-performances-container">
          <div className="special-performance">
            <div className="special-performance-cover">
              <LayersIcon />
            </div>

            <div className="special-performance-info">
              <span className="special-performance-title">مدیریت</span>
              <span className="special-performance-name"> علی سعیدی </span>
            </div>
          </div>

          <div className="special-performance">
            <div className="special-performance-cover special-performance-cover-img"></div>
            <div className="special-performance-info">
              <span className="special-performance-title">مدیریت</span>
              <span className="special-performance-name"> علی سعیدی </span>
            </div>
          </div>
        </div>

        <span className="main-special-project-title">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </span>

        <div className="special-project-pey-date-container">
          <div className="special-project-date-container">
            <span className="special-project-date">19بهمن .2022</span>
            <span className="special-project-date-dis">سررسید</span>
          </div>
          <div className="special-project-pay-container">
            <span className="special-project-pay">6650$</span>
            <span className="special-project-pay-dis">بودجه</span>
          </div>
        </div>

        <div className="special-project-liked-reference">
          <AvatarGroup max={4} className='avatar-group' >
            <Avatar className='special-avatars' alt="Remy Sharp" src="./profs/300-6.jpg" />
            <Avatar className='special-avatars' alt="Travis Howard" src="./profs/300-2.jpg" />
            <Avatar className='special-avatars' alt="Cindy Baker" src="./profs/omid-armin-b5yGzWOpkMo-unsplash.jpg" />
            <Avatar className='special-avatars' alt="Agnes Walker" src="./profs/stefan-stefancik-QXevDflbl8A-unsplash.jpg" />
            <Avatar className='special-avatars' alt="Trevor Henderson" src="./profs/ashton-bingham-EQFtEzJGERg-unsplash.jpg" />
          </AvatarGroup>


          <Link to='/'>اطلاعات بیشتر</Link>
        </div>
      </div>
    </div>
  );
}
