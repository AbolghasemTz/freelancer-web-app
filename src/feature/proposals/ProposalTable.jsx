import React from 'react'
import useProposals from './useProposals'
import Table from '../../ui/Table';
import Loading from '../../ui/Loading';
import ProposalRow from './ProposalRow';
import Empty from "../../ui/Empty"

function ProposalTable() {
  const {isLoading,proposals} =  useProposals()
  console.log(proposals,"s");
  if (isLoading) return <Loading />;
  if (!proposals.length) return <Empty resourceName="پروژه ای"/>;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
       <th>توضیحات</th>
       <th>زمان تحویل</th>
       <th>هزینه</th>
       <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable