import React from "react";
import CompleteProfileForm from "../feature/authentication/completeProfileForm";

function CompleteProfile() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <CompleteProfileForm />
      </div>
    </div>
  );
}

export default CompleteProfile;
