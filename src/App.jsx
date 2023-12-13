import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Toaster} from "react-hot-toast"
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Owner from "./pages/Owner";
import AppLayout from "./ui/AppLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
   <div className="">
   <Routes>
     
     <Route path="/auth" element={<Auth />} />
     <Route path="/complete-profile" element={<CompleteProfile />} />
     <Route path="/owner" element={<AppLayout />}>

     <Route index element={<Navigate to="dashboard" replace />} />
     <Route path="dashboard" element={<OwnerDashboard />} />
     <Route path="projects" element={<Projects />} />
     <Route path="project" element={<Project />} />
     </Route>



     <Route path="/" element={<Home />} />
       <Route path="*" element={<NotFound />} />
   </Routes>
   </div>
    </QueryClientProvider>
  );
}

export default App;
