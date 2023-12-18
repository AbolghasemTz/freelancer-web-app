import {useQuery} from "@tanstack/react-query";
import queryString from "query-string"
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";
export default function useProjects() {
  const {search} =useLocation()
  const queryObject = queryString.parse(search)

  // console.log(queryObject,"omid");
  const {data,isLoading} = useQuery({
    queryKey: ["projects",queryObject],
    queryFn: () => getProjectsApi(search),
   
    
  });

const {projects} = data || {}
return {isLoading,projects}
}
