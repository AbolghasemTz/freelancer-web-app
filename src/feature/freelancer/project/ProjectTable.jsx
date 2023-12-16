import React from "react";
import Table from "../../../ui/Table";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import useProjects from "../../../hooks/useProjects";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useProjects();
  console.log(projects);
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه ای" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه </th>

        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
