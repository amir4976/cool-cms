import React,{useState} from "react";
import "./navbar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SwipeableTemporaryDrawer from '../modalSideBar/ModalSideBar'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import ProfileDropDoen from "../profiledropDown/ProfileDropDown";
export default function Navbar() {

  const [{theme,isDark},toggleTheme] = useContext(ThemeContext)
  console.log(theme)
           
     let ModeIcon = null
  if(theme == "dark"){
    ModeIcon = <LightModeIcon  className="modeIcon" onClick={toggleTheme}/>
  }else if(theme == 'light'){
    ModeIcon = <DarkModeIcon  className="modeIcon" onClick={toggleTheme}/>
    }

    return (
    <div className="Navbar-container" >
      <div className="navbar">
        
        <div className="logoPlace">
        <SwipeableTemporaryDrawer/>
          <img className="Logo" src="./logo192.png" alt="" />
          <button className="Department-btn" >
            <span className="departmentTitle">داشبورد</span> <ExpandMoreIcon />{" "}
          </button>
        </div>
        <div className="Navbar-Navigation" >
          <svg
          className="svgsIcon"

            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.5"
              x="17.0365"
              y="15.1223"
              width="8.15546"
              height="2"
              rx="1"
              transform="rotate(45 17.0365 15.1223)"
              fill="currentColor"
            ></rect>
            <path
              d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
              fill="currentColor"
            ></path>
          </svg>
        
        
         


          <svg
          className="svgsIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="9"
              width="3"
              height="10"
              rx="1.5"
              fill="currentColor"
            ></rect>
            <rect
              opacity="0.5"
              x="13"
              y="5"
              width="3"
              height="14"
              rx="1.5"
              fill="currentColor"
            ></rect>
            <rect
              x="18"
              y="11"
              width="3"
              height="8"
              rx="1.5"
              fill="currentColor"
            ></rect>
            <rect
              x="3"
              y="13"
              width="3"
              height="6"
              rx="1.5"
              fill="currentColor"
            ></rect>
          </svg>

          <svg
          className='svgsIcon'
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
              fill="currentColor"
            ></path>
            <rect
              x="6"
              y="12"
              width="7"
              height="2"
              rx="1"
              fill="currentColor"
            ></rect>
            <rect
              x="6"
              y="7"
              width="12"
              height="2"
              rx="1"
              fill="currentColor"
            ></rect>
          </svg>

          <svg
          className="svgsIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="9"
              height="9"
              rx="2"
              fill="currentColor"
            ></rect>
            <rect
              opacity="0.3"
              x="13"
              y="2"
              width="9"
              height="9"
              rx="2"
              fill="currentColor"
            ></rect>
            <rect
              opacity="0.3"
              x="13"
              y="13"
              width="9"
              height="9"
              rx="2"
              fill="currentColor"
            ></rect>
            <rect
              opacity="0.3"
              x="2"
              y="13"
              width="9"
              height="9"
              rx="2"
              fill="currentColor"
            ></rect>
          </svg>
          {ModeIcon}

          <ProfileDropDoen/>
        </div>
      </div>
    </div>
  );
}
