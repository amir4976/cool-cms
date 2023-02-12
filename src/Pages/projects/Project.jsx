import React from "react";
import "./Projects.css";
import { Row, Col } from "react-bootstrap";
import Mode from "../../Hooks/Mode";
import ProjectProsess from "../../components/project-progress/Project-progress";
import LastMonthProgress from "../../components/LastMonthProgress/LastMonthProgress";
import PageHeader from "../../components/PageHeader/PageHeader";
import TodayChamps from "../../components/todayChamps/TodayChamps";
import HighLits from "../../components/HighLights/HighLits";
import TodayNews from "../../components/todayNews/TodayNews";
import SpecialProject from "../../components/specialProj/SpecialProject";
import UpgradePlan from "../../components/upGraidPlan/UpgradePlan";
import UserMainProfile from "../../components/usermainProfile/UserMainProfile";
export default function Project() {
  const [mode, color] = Mode();
  return (
    <div className="project-container">
      <PageHeader title="پروژه ها" />
      <UserMainProfile/>
      <div className="main-project">
        <Row>
          <Col xl={3} lg={6} md={12} className="first-section-in-projects-col">
            <ProjectProsess />
            <TodayChamps />
          </Col>
          <Col xl={3} lg={6} md={12} className="first-section-in-projects-col">
            <LastMonthProgress />
            <HighLits />
          </Col>
          <Col xl={6} lg={12}  md={12} className="first-section-in-projects-col Col-mb">
            <TodayNews/>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6} className='second-section-in-project-col' >
            <SpecialProject/>
          </Col>
          <Col md={12} lg={6} className='second-section-in-project-col' >
            <UpgradePlan/>
          </Col>


        </Row>
      </div>
    </div>
  );
}
