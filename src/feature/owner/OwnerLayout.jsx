import React from "react";
import Sidebar from "../../ui/Sidebar";
import { CoustomNavLink } from "../../ui/CustomNavLink";
import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";

function OwnerLayout() {
  return (
   <AppLayout>
    
    <Sidebar>
        <CoustomNavLink to="/owner/dashboard">
          <HiHome />
          <span>خانه</span>
        </CoustomNavLink>

        <CoustomNavLink to="/owner/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CoustomNavLink>
      </Sidebar>
   </AppLayout>
    
  );
}

export default OwnerLayout;
