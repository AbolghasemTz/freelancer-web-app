import { useQuery } from "@tanstack/react-query";

import { getUsersApi } from "../../services/authService";
export default function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsersApi(),
  });
// console.log(data,"data");
  const { users } = data || {};
  return { isLoading, users };
}
