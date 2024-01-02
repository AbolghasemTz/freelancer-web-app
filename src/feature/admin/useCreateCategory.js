import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCategoryApi } from "../../services/categoryService";

export default function useAddCreategory() {
  const querClient = useQueryClient();
  const { isPending: isCreating, mutate: createCategories } = useMutation({
    mutationFn: createCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);
      querClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isCreating, createCategories };
}
