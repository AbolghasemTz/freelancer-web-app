import React from 'react'
import Loading from '../../ui/Loading'
import DashboardHeader from '../../ui/DashboardHeader'
import useProposals from '../proposals/useProposals'
import useProjects from '../../hooks/useProjects'
import useUsers from './useUsers'
import Stats from './Stats'

function DashboardLayout() {
    const {isLoading,proposals} =useProposals()
  const {isLoading:isProjecting,projects} =  useProjects()
  const {isLoading:isUsering,users} = useUsers()
 if(isLoading && isProjecting && isUsering) return <Loading />

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals.length} projects={projects.length} users={users.length}/>
    </div>
  )
}

export default DashboardLayout