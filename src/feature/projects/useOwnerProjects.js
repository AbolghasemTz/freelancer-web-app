import {useQuery} from "@tanstack/react-query";
import { getUser } from "../../services/authService";
import { getOwnrProjectApi } from "../../services/projectService";
export default function useOwnerProjects() {
  const {data,isLoading} = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnrProjectApi,
   
    
  });

const {projects} = data || {}
return {isLoading,projects}
}
