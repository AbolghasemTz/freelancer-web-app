import React from 'react'
import ProposalTable from '../feature/proposals/ProposalTable'

function Proposals() {
  return (
   
        <div className="">
            <h1 className='font-black text-secondary-700 text-xl mb-8'>پروپوزال های شما</h1>
            <ProposalTable />
        </div>
    
  )
}

export default Proposals