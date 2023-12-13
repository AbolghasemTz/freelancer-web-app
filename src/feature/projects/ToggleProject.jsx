import { useState } from "react";
import { Switch } from "@headlessui/react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProject({ project }) {
//   const [enabled, setEnabled] = useState(
//     project.status === "OPEN" ? true : false
//   );
const enabled =  project.status === "OPEN" ? true : false;
  const { isToggleing, toggleProjectStatus } = useToggleProjectStatus();
  const toggleHandler = (e) => {
    const status = project.status === "OPEN" ? "CLOSE" : "OPEN";
    toggleProjectStatus(
      {
        id: project._id,
        data: { status },
      },
    //   {
    //     onSuccess: () => {
    //       setEnabled((prev) => !prev);
    //     },
    //   }
    );
  };
  return (
    <div className="w-[5rem]">
      {isToggleing ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          enabled={enabled}
          label={project.status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProject;
