
import React from "react";
import {useForm} from "react-hook-form"
import { useQueryClient } from "@tanstack/react-query";
import ReactSelect from "../../../ui/ReactSelect";
import Loading from "../../../ui/Loading";
import useChangeUserSatus from "./useChangeUserSatus";


const options = [
    {label:"رد شده",value:0},
    {label:"در انتظار تایید",value:1},
    {label:"تایید شده",value:2},
]
function ChangeUserStatus({ userId, onClose }) {
 
    const {register,handleSubmit}=useForm()
   const {isChanging,ChangeUserStatus} = useChangeUserSatus()
const queryClient = useQueryClient()
    const onSubmit = (data) => {
        ChangeUserStatus({userId,data},{
        onSuccess:() => {
            onClose(),
            queryClient.invalidateQueries({queryKey:["users"]})
        }
      })
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ReactSelect
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
        />
        <div className="mt-8">

       {isChanging ? <Loading /> :  <button type="submit" className="btn btn--primary w-full">تایید</button>}
        </div>
      </form>
    </div>
  );
}

export default ChangeUserStatus;
