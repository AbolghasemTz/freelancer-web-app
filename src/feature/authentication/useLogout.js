import { useMutation, useQueryClient } from "@tanstack/react-query"

import { logoutApi } from "../../services/authService"
import { useNavigate } from "react-router-dom"

export default function useLogout() {
    const querClient = useQueryClient()
  const navigate =  useNavigate()
 const {isPending,mutate:logout} =   useMutation({mutationFn:logoutApi,
        onSuccess: (data) => {
            querClient.removeQueries()
            navigate("/auth",{replace:true})
          },
         
    })
    return {isPending,logout}
}