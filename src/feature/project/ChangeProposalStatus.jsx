import React from "react";
import ReactSelect from "../../ui/ReactSelect";
import {useForm} from "react-hook-form"
import useChangeProposalSatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

const options = [
    {label:"رد شده",value:0},
    {label:"در انتظار تایید",value:1},
    {label:"تایید شده",value:2},
]
function ChangeProposalStatus({ proposalId, onClose }) {
    const {id:projectId} = useParams()
    const {register,handleSubmit}=useForm()
   const {isChanging,ChangeProposalStatus} = useChangeProposalSatus()
const queryClient = useQueryClient()
    const onSubmit = (data) => {
      ChangeProposalStatus({id:proposalId,data},{
        onSuccess:() => {
            onClose(),
            queryClient.invalidateQueries({queryKey:["project",projectId]})
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

export default ChangeProposalStatus;
