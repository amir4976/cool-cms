import React from "react";
import { Row, Col } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css'
import "./widgets.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import TimelineIcon from "@mui/icons-material/Timeline";
import CountUp from "react-countup";

export default function Widgets() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  let mode = null;
  theme == "dark"
    ? (mode = { background: "#1e1e2d" })
    : (mode = { background: "#fff", color: "#000" });

  return (
    <div className="AllWidgets-container cols">
      <div className="mini-widgets">
        <Row className="main-mini-widgets-container">
          <Col className="widget-container" lg={6}>

            <Row className="small-widget-row cols">
              
              <Col className="small-widget bulding" lg={12}>
                <span className="bulding-title">سقف سازی</span>
              </Col>

              <Col className="small-widget new-customer" style={mode} lg={12}>
                <TimelineIcon style={{ fontSize: "30px" }} />
                <div className="allNewCustomer">
                  <CountUp end={8952} duration={2} />
                </div>
                <span className="newCustomerTitle">مشتریان جدید</span>
              </Col>

            </Row>

          </Col>

          <Col className="widget-container cols" lg={6}>
            <div className="makeReport">
              <span className="MakeReportTitle">ساختن گزارشات با اپلیکیشن</span>
              <button className="discoveryBTN">پیمایش</button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="cols ideas-sec" lg={12}>
            <div className="makeidea">
              <span className="makeIdeatıtle">ایده های ناب یوتیوب</span>
              <button className="discoveryBTN">پیمایش</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
