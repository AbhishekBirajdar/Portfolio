// src/pages/ProjectsPage.jsx
import React from "react";
import { Works, Feedbacks } from "../components";

const ProjectsPage = () => {
  return (
    <main className="bg-[#ffefd5] min-h-screen pt-8 flex-col">
      <Works />
      <Feedbacks />
    </main>
  );
};

export default ProjectsPage;
