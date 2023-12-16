import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import { CoustomNavLink } from '../../ui/CustomNavLink'
import { HiCollection, HiHome } from 'react-icons/hi'

function FreelancerLayout() {
  return (
    <AppLayout>
    
    <Sidebar>
        <CoustomNavLink to="/freelancer/dashboard">
          <HiHome />
          <span>خانه</span>
        </CoustomNavLink>

        <CoustomNavLink to="/freelancer/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CoustomNavLink>
        <CoustomNavLink to="/freelancer/proposals">
          <HiCollection />
          <span> درخواست ها</span>
        </CoustomNavLink>
      </Sidebar>
   </AppLayout>
  )
}

export default FreelancerLayout