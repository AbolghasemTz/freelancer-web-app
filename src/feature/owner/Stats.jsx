import React from 'react'
import {HiCollection, HiCurrencyDollar, HiOutlineViewGrid} from 'react-icons/hi'
import Stat from '../../ui/Stat';
function Stats({projects}) {
const numOfProjects = projects.length;
const numOfAcceptedProject = projects.map((p) => p.status === 2 ).length
const numOfProposals =projects.reduce((acc,cur) => cur.proposals.length + acc,0)
  return (
    <div className='grid grid-cols-3 gap-x-8'>
     
        <Stat color="primary" title="پروژه ها" value={numOfProjects} icon={<HiOutlineViewGrid className='w-20 h-20'/>}/>
        <Stat color="green" title="پروژه های واگذار شده" value={numOfAcceptedProject} icon={<HiCurrencyDollar className='w-20 h-20'/>}/>
        <Stat color="blue" title="درخواست ها" value={numOfProposals} icon={<HiCollection className='w-20 h-20'/>}/>

    </div>
  )
}

export default Stats