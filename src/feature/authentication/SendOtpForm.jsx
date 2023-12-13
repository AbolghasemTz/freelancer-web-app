import React from "react";
import TextField from "../../ui/TextField";

import Loading from "../../ui/Loading";

function SendOtpForm({ isSendingOtp,onSubmit,register }) {

 

  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          name="phoneNumber"
          label="شماره موبایل"
          register={register}
        />
      <div className="">
      {isSendingOtp ? (
          <Loading /> 
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
      </div>
      </form>
    </div>
  );
}

export default SendOtpForm;
