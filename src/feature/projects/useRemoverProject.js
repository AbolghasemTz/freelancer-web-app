import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import {toast} from "react-hot-toast"
export default function useRemoveProject() {
    const querClient = useQueryClient()
  const {mutate: removeProject,isPending:isDeleting} =  useMutation({
    mutationFn: removeProjectApi,
    onSuccess: () => {
      toast.success("پروژه با موفقیت حذف شد");
      querClient.invalidateQueries({
        queryKey:["owner-projects"]
      })
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return {removeProject , isDeleting}
}
