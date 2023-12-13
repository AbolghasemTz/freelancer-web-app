import { useMutation, useQueryClient } from "@tanstack/react-query"
import {  editProjectApi, toggleProjectApi } from "../../services/projectService"
import toast from "react-hot-toast"

export default function useToggleProjectStatus() {
    const querClient = useQueryClient()
 const {isPending:isToggleing,mutate:toggleProjectStatus} =   useMutation({mutationFn:toggleProjectApi,
        onSuccess: (data) => {
            toast.success(data.message);
            querClient.invalidateQueries({
              queryKey:["owner-projects"]
            })
          },
          onError: (err) => toast.error(err?.response?.data?.message),
    })
    return {isToggleing,toggleProjectStatus}
}