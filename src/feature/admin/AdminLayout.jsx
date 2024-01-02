import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import { CoustomNavLink } from '../../ui/CustomNavLink'
import { HiCollection, HiHome,HiUser } from 'react-icons/hi'

function AdminLayout() {
  return (
    <AppLayout>
    
    <Sidebar>
        <CoustomNavLink to="/admin/dashboard">
          <HiHome />
          <span>خانه</span>
        </CoustomNavLink>
        <CoustomNavLink to="/admin/users">
          <HiUser />
          <span>کاربران</span>
        </CoustomNavLink>

        <CoustomNavLink to="/admin/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CoustomNavLink>
        <CoustomNavLink to="/admin/proposals">
          <HiCollection />
          <span> درخواست ها</span>
        </CoustomNavLink>
        <CoustomNavLink to="/admin/category">
          <HiCollection />
          <span>اضافه کردن دسته بندی</span>
        </CoustomNavLink>
      </Sidebar>
   </AppLayout>
  )
}

export default AdminLayout