import React from 'react'
import useProject from '../feature/project/useProject'
import Loading from '../ui/Loading'
import ProjectHeader from '../feature/project/ProjectHeader'
import ProposalTable from '../feature/project/ProposalTable'


function Project() {
 const {isLoading,project} = useProject()
if(isLoading) return <Loading />
  return (
    <div>
     <ProjectHeader project={project}/>
     <ProposalTable proposals={project.proposals}/>
    </div>
  )
}

export default Project
