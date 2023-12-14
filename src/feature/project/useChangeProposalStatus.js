
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { changeProposalStatusApi } from "../../services/proposalService"

export default function useChangeProposalSatus() {
    const querClient = useQueryClient()
 const {isPending:isChanging,mutate:ChangeProposalStatus} =   useMutation({mutationFn:changeProposalStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);
           
         },
          onError: (err) => toast.error(err?.response?.data?.message),
        
    })
    return {isChanging,ChangeProposalStatus}
}