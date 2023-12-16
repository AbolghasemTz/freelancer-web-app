import React from 'react'
import {HiCollection, HiCurrencyDollar, HiOutlineViewGrid} from 'react-icons/hi'
import Stat from './Stat';
import { toPersianNumbersWithComma } from '../../utils/toPersianNumber';
function Stats({proposals}) {
const numOfproposals = proposals.length;
const acceptedProposals = proposals.filter((p) => p.status === 2)
// const numOfProposals =proposals.reduce((acc,cur) => cur.proposals.length + acc,0)
const balance = acceptedProposals.reduce((acc,cur) => acc + cur.price,0)
  return (
    <div className='grid grid-cols-3 gap-x-8'>
     
        <Stat color="primary" title="درخواست ها" value={numOfproposals} icon={<HiOutlineViewGrid className='w-20 h-20'/>}/>
        <Stat color="green" title="درخواست های قبول شده" value={acceptedProposals.length} icon={<HiCurrencyDollar className='w-20 h-20'/>}/>
        <Stat color="blue" title="کیف پول" value={toPersianNumbersWithComma(balance)} icon={<HiCollection className='w-20 h-20'/>}/>

    </div>
  )
}

export default Stats