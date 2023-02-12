import React from 'react'
import './dushbord.css'
import WeekleyReport from '../../components/weeklyReport/WeekleyReport'
import 'bootstrap/dist/css/bootstrap.css'
import {Row,Col} from 'react-bootstrap'
import Widgets from '../../components/widgets/Widgets'
import Actions from '../../components/actionsStatus/actions/Actions'
import Notife from '../../components/actionsStatus/notif/Notife'
import TodosStatus from '../../components/actionsStatus/todo/TodosStatus'
import Files from '../../components/files/Files'
import Peyments from '../../components/peyments/Peyments'
import PageHeader from '../../components/PageHeader/PageHeader'
import UserMainProfile from '../../components/usermainProfile/UserMainProfile'
export default function Dushbord() {
  return (
    <>
      <div className="dushbord">
      <PageHeader title="داشبورد" />
      <UserMainProfile/>
      <Row className='firstRow'>
      <Col xl={4} md={12} >
        <WeekleyReport/>
      </Col>
        <Col xl={8} md={12}>
          <Widgets/>
        </Col>
      </Row>
        <div className="actionStatus-container">
          <TodosStatus/>
          <Actions/>
          <Notife/>
        </div>
        <div className="actionStatus-container">
          <Files/>
          <Peyments/>
        </div>

      </div>
    </>
  )
}
