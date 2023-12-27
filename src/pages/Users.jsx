import React from "react";
import UsersTable from "../feature/admin/users/UsersTable";

function Users() {
  return (
    <div className="">
      <h1 className="font-black text-secondary-700 text-xl mb-8">
        کاربران 
      </h1>
   <UsersTable />
    </div>
  );
}

export default Users;
