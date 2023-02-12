import React from "react";
import "./Sidebar.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { Link, NavLink } from "react-router-dom";
export default function SideBar() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  let sideBarTheme = null;
  let sideBarLink = null
  let sideBarTitle = null
  if(theme == 'dark'){
  sideBarTheme = { background: "#1e1e2d" }
    sideBarTitle= {color:'#ffffff59'}
    sideBarLink= {color:'#fff'}
  }else{
    sideBarTheme = { background: "#fff" } 
    sideBarTitle= {color:'rgba(0, 0, 0, 0.551)'}
    sideBarLink= {color:'#000'}
    
  }
  
  return (
    <div className="sidebar-container">
      <div className="mainSideBar" style={sideBarTheme}>
        <ul className="sideBar-ul-container">
          <li className="Link-container">
            <span className="rotesTitle" style={sideBarTitle}>کاربری</span>
           
              <NavLink to='/' className={(link)=>link.isActive?'links active':'links'} style={sideBarLink}>پروفایل کاربری</NavLink>
              <NavLink to='/Project' className="links" style={sideBarLink}>امار پروژه ها</NavLink>
              <NavLink to='/ProjectList' className="links" style={sideBarLink}>پروژه ها</NavLink>

              <NavLink to='/followers' className="links" style={sideBarLink}>فالوور ها</NavLink>
              <NavLink to='/campaigns' className="links" style={sideBarLink}>کمپین</NavLink>
              <NavLink to='/security' className="links" style={sideBarLink}>امنیت</NavLink>
            
          </li>
          
           {/* <li className="Link-container">
            <span className="rotesTitle" style={sideBarTitle}>قیمت گذاری</span>
          
              <NavLink to='/s' className="links" style={sideBarLink}>ستونی</NavLink>

         
          </li>  */}
           <li className="Link-container">
            <span className="rotesTitle" style={sideBarTitle}>چت ها</span>
           
              <NavLink to='/privetChat' className="links" style={sideBarLink}>چت خصوصی</NavLink>
              <NavLink to='/chatDrawer' className="links" style={sideBarLink}>کشو چت</NavLink>
           
          </li>
           <li className="Link-container">
            <span className="rotesTitle" style={sideBarTitle}>کلی</span>
            
              <NavLink to='/e' className="links" style={sideBarLink}>تیکت ها</NavLink>
              <NavLink to='/e' className="links" style={sideBarLink}>تنظیمات</NavLink>
              <NavLink to='/e' className="links" style={sideBarLink}>درباره ما</NavLink>
            
          </li>

        </ul>
      </div>
    </div>
  );
}
