import { useMutation, useQueryClient } from "@tanstack/react-query"
import { creatProjectApi } from "../../services/projectService"
import toast from "react-hot-toast"

export default function useCreateProject() {
    const querClient = useQueryClient()
 const {isPending:isCreating,mutate:creatProject} =   useMutation({mutationFn:creatProjectApi,
        onSuccess: (data) => {
            toast.success(data.message);
            querClient.invalidateQueries({
              queryKey:["owner-projects"]
            })
          },
          onError: (err) => toast.error(err?.response?.data?.message),
    })
    return {isCreating,creatProject}
}