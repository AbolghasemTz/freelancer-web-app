import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import ReactSelect from "../../ui/ReactSelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";
function AddProjectForm({ onClose,projectToEdite={} }) {

   const {_id:editId} = projectToEdite;
   const isEditSession = Boolean(editId);
   const {title,description,budget,category,deadline,tags:prevTags} = projectToEdite
   let editValues = {}
   if(isEditSession){
editValues ={
    title,description,budget,category:category._id
}
   }
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({defaultValues:editValues});

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));

  const { categories } = useCategories();
  const { isCreating, creatProject } = useCreateProject();
  const {isEditing,editProject} = useEditProject()
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if(isEditSession){
        editProject({id:editId,newProject},{
            onSuccess: () => {
                onClose();
                reset();
              },
        }); 
    }else{
        creatProject(newProject, {
            onSuccess: () => {
              onClose();
              reset();
            },
          }); 
    }
  
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
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
      />
      <ReactSelect
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
      />
      <div className="">
        <label htmlFor="" className="mb-2 block text-secondary-700">
          تگ
        </label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>

      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
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

export default AddProjectForm;
