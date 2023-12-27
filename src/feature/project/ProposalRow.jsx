import React, { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];
function ProposalRow({ proposal, index }) {
  const { status, user } = proposal;
  const [open, setIsOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user?.name}</td>
      <td>
        <p> {truncateText(proposal?.description, 50)}</p>
      </td>
      <td>{proposal?.duration} روز</td>
      <td>{proposal?.price}</td>
      <td className={`badge mt-4 ${statusStyle[status].className}`}>
        {statusStyle[status].label}
      </td>
      <td>
        <Modal
          title="تغییر وضعیت درخواست"
          open={open}
          onClose={() => setIsOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setIsOpen(false)}
          />
        </Modal>
        <button onClick={() => setIsOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
