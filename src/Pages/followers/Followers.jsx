import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './followers.css'
import UserMainProfile from '../../components/usermainProfile/UserMainProfile'
import FollowersList from '../../components/follower/FollowersList'
export default function Followers() {
  return (
    <div className='Activity-page'>
      <PageHeader title='فالوور ها'/>
      <UserMainProfile/>
      <FollowersList/>
    </div>
  )
}
