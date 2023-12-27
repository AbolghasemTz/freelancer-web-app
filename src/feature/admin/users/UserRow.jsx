import React, { useState } from 'react'
import Table from '../../../ui/Table'
import Modal from '../../../ui/Modal'
import ChangeUserStatus from './ChangeUserStatus';


const userStatus = [
    {
      label: "رد شده",
      className: "badge--danger",
    },
    { label: "در انتظار تایید", className: "badge--secondary" },
    { label: "تایید شده", className: "badge--success" },
  ];
function UserRow({user,index}) {
    const [open, setIsOpen] = useState(false);
    const {status} = user
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td> {user.name}</td>
      <td> {user.email}</td>
      <td> {user.phoneNumber}</td>
      <td> {user.role}</td>
      <td className={`badge mt-4 ${userStatus[status].className}`}>
        {userStatus[status].label}
      </td>
      <td>
      <Modal
          title="تغییر وضعیت درخواست"
          open={open}
          onClose={() => setIsOpen(false)}
        >
          <ChangeUserStatus
            userId={user._id}
            onClose={() => setIsOpen(false)}
          />
        </Modal>
        <button onClick={() => setIsOpen(true)}>تغییر وضعیت کاربر</button>
      </td>
    </Table.Row>
  )
}

export default UserRow