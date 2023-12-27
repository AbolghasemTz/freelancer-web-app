import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const {isLoading,user} =  useUser()
 const {pathname} = useLocation()

 let isAuthenticated = false;
 if(user) isAuthenticated =true
 
 let isAuthroized = false
 let isActive = false
 if(user && Number(user.status) === 2) isActive = true
// if(pathname.includes("owner")){
//     if(user && user.role ==="OWNER") isAuthroized = true
// }
// if(pathname.includes("freelancer")){
//     if(user && user.role ==="FREELANCER") isAuthroized = true
// }
// if(pathname.includes("admin")){
//     if(user && user.role ==="ADMIN") isAuthroized = true
// }

const ROLES ={
    admin:"ADMIN",
    freelancer:"FREELANCER",
    owner:"OWNER"
}
const desierdRole =pathname.split("/").at(1) 

if(Object.keys(ROLES).includes(desierdRole)){
    if(user && user.role === ROLES[desierdRole]) isAuthroized = true
}
return {isLoading,isAuthenticated,isAuthroized,user,isActive}





}