import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreatePropsal";
function CreatePorposal({ onClose, projectId }) {
  const {isCreating,creatProposal}=  useCreateProposal()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   creatProposal({...data,projectId},{
    onSuccess:() => {
        onClose()
    }
   })
  }
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
      />
      <TextField
        label="قیمت"
        name="price"
        type="number"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "قیمت ضروری است",
        }}
      />
      <TextField
        label="مدت زمان"
        name="duration"
        type="number"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "مدت زمان ضروری است",
        }}
      />
      <div className="mb-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreatePorposal;
