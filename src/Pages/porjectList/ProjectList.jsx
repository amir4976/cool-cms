import React from 'react'
import UserMainProfile from '../../components/usermainProfile/UserMainProfile'
import PageHeader from '../../components/PageHeader/PageHeader'
import './ProjectList.css'
import Mode from '../../Hooks/Mode'
import { projectList } from '../../data'
import ProjectListCard from '../../components/projectListCard/ProjectListCard'
import {Row,Col} from 'react-bootstrap'
export default function ProjectList() {
  return (
    <div className='projectList-container'>
      <PageHeader title='لیست پروژه ها'/>
      <UserMainProfile/>
      <Row>
        {projectList.map((project)=>(
         <Col className='projectListItem' md={12} xxl={4}>
         <ProjectListCard name={project.name}  programFor={project.programFor} status={project.status} income={project.income} date={project.date} componyIcon={project.camponyIcon} progress={project.progress}/>
         </Col> 
        ))}

      </Row>
    </div>
  )
}
