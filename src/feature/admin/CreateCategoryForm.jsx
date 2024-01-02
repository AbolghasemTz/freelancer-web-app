import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";
import useAddCreategory from "./useCreateCategory";
function AddCategoryForm() {
    // const [date, setDate] = useState(new Date());
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();


  

  const { isCreating, createCategories } = useAddCreategory();

//   const {isEditing,editProject} = useEditProject()
  const onSubmit = (data) => {
    const newCategory = {
      ...data,
     type:"project"
     
   };

    createCategories(newCategory, {
        onSuccess: () => {
          reset();
        },
      }); 
   
  
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان"
        name="title"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 5,
            message: "حداقل 5 کاراکتر را وارد کنید",
          },
        }}
      />
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
        label="عنوان انگلیسی"
        name="englishTitle"
        type="text"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "عنوان انگلیسی ضروری است",
        }}
      />

   

      {isCreating ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}

export default AddCategoryForm;
