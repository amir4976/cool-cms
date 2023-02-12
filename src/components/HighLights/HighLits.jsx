import React from "react";
import Mode from "../../Hooks/Mode";
import "./HighLits.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
export default function HighLits() {
  let [mode, color] = Mode();
  return (
    <div
      className="HighLights-container"
      style={{ background: mode, color: color }}
    >
      <div className="HighLight-header">
        <span>هایلایت ها</span>
      </div>
      <div className="main-HighLights">
        <ul className="HighLights-ul">
          <li className="HighLights-list-item">
            <span className="HighLight">میانگین رتبه بندی مشتری</span>
            <span> <span style={{marginLeft:'10px',color:'green'}}> <TrendingUpIcon/></span>   7.8 <span style={{fontSize:'13px',color:'rgb(116, 116, 116)'}}>/10</span></span>
            
          </li><hr />
          <li className="HighLights-list-item">
            <span className="HighLight">میانگین</span>
            <span><span style={{marginLeft:'10px',color:'red'}}><TrendingDownIcon/></span> 730</span>
           
          </li> <hr />
          <li className="HighLights-list-item">
            <span className="HighLight">میانگین درآمد</span>
            <span><span style={{marginLeft:'10px',color:'green'}}> <TrendingUpIcon/></span>  $2.309</span>
            
          </li>
        </ul>
      </div>
    </div>
  );
}
