import React, { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
function AuthContainer() {
  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending : isSendingOtp, mutateAsync,data:otpResponse } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (data) => {
    

    try {
      const {message} = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const {handleSubmit,register,getValues} = useForm()
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
          onSubmit={handleSubmit(sendOtpHandler)}
          isSendingOtp={isSendingOtp}
            setStep={setStep}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
