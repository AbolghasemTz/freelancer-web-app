import React, { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  const navigate=useNavigate()
  const {register,  watch,handleSubmit,formState: { errors }} =useForm()
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const [role, setRole] = useState("");
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  const onSubmit = async (data) => {
  
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);
      if (!user.status !== 2) {
        navigate("/");
        toast.error("پروفایل شما در انتظار تایید است");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
     
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm ">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خاوادگی"
            name="name"
            // onChange={(e) => setName(e.target.value)}
            // value={name}
            required
            register={register}
            validationSchema={{
              required:"نام ضروری است"
            }}
            errors={errors}
          />
          <TextField
            label="ایمیل"
            name="email"
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
            required
            register={register}
            validationSchema={{
              required:"ایمیل ضروری است"
            }}
            errors={errors}
          />
          <div className="">
          <div className="flex items-center justify-center gap-x-8">
          <RadioInput
              label="کارفرما"
              value="OWNER"
              // onChange={(e) => setRole(e.target.value)}
              register={register}
              id="OWNER"
              name="role"
              watch={watch}
              validationSchema={{
                required:"انتخاب نقش ضروری است"
              }}
              errors={errors}
            />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              // onChange={(e) => setRole(e.target.value)}
              register={register}
              id="FREELANCER"
              name="role"
              checked={watch('role') === "FREELANCER"}
              watch={watch}
              validationSchema={{
                required:"انتخاب نقش ضروری است"
              }}
              errors={errors}
            />
          </div>
             {errors && errors['role'] && (
        <span className="text-error block text-sm mt-2 flex-1">
          {errors['role']?.message}
        </span>
      )}
          </div>
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary  w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
