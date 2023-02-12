import React from "react";
import "./profileDropdown.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
export default function ProfileDropDoen(prop) {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log(theme);

  let bg = null;
  let Color = " #fff";
  if (theme == "dark") {
    bg = "#1e1e2d";
    Color = "#fff";
  } else {
    bg = "#fff";
    Color = "#000";
  }

  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}

        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );
  return (
    <Dropdown >
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
        <div className="profile-sec-nav" dir="LTR" >
          <img className="profileImg-nav" src="./profs/300-14.jpg" alt="" />
          <div className="prof-info-nav">
            <span className="profileName-nav">darcy</span>
            <span className="profileJob-nav">designer</span>
          </div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu
        as={CustomMenu}
        dir='rtl'
        className="dropDown-Con"
        style={{ width: "275px", height: "430px", background: bg }}
      >
        <Dropdown.Item eventKey="1" className="D-item" style={{ color: Color }}>
          {" "}
          <div className="profile-sec-nav" dir='rtl' >
            <img className="profileImg-nav" style={{width:'100px',height:'100px'} } src="./profs/300-14.jpg" alt="" />
            <div className="prof-info-nav" style={{paddingRight:'10px'}}>
              <span className="profileName-nav" style={{color:Color,fontSize:'20px'}}>darcy</span>
              <span className="profileJob-nav" style={{color:Color}} dir='ltr'>...@gmail.com</span>
            </div>
            
          </div>
         
        </Dropdown.Item> <hr />
        <Dropdown.Item eventKey="2" className="D-item" style={{ color: Color }}>
          پروفایل من
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" className="D-item" style={{ color: Color }}>
          {" "}
          پروژه های من
        </Dropdown.Item>
        <Dropdown.Item eventKey="1" className="D-item" style={{ color: Color }}>
          اشتراک من
        </Dropdown.Item>
        <Dropdown.Item eventKey="1" className="D-item" style={{ color: Color }}>
          بیانه های من
        </Dropdown.Item>
        <hr />
        <Dropdown.Item eventKey="1" className="D-item" style={{ color: Color }}>
          تنظیمات
        </Dropdown.Item>
          <Dropdown.Item eventKey="1" className="D-item" style={{ color: Color }}>
         خروج
        </Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}
