import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { createProposalApi } from "../../services/proposalService"

export default function useCreateProposal() {
    const querClient = useQueryClient()
 const {isPending:isCreating,mutate:creatProposal} =   useMutation({mutationFn:createProposalApi,
        onSuccess: (data) => {
            toast.success(data.message);
            querClient.invalidateQueries({
              queryKey:["propsals"]
            })
          },
          onError: (err) => toast.error(err?.response?.data?.message),
    })
    return {isCreating,creatProposal}
}