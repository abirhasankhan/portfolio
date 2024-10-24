// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetail = () => {
	const { id } = useParams();
	const project = projects.find((proj) => proj.id === parseInt(id, 10));

	if (!project) {
		return (
			<div className="text-gray-800 dark:text-white">
				Project not found
			</div>
		);
	}

	return (
		<div className="container mx-auto py-20 px-6 text-gray-800 dark:text-white">
			<h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
				{project.title}
			</h1>
			<p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
				{project.description}
			</p>
			<p className="text-gray-600 dark:text-gray-300 mb-4">
				{project.details}
			</p>
			<img
				src={project.image}
				alt={project.title}
				className="w-full h-auto rounded-lg shadow-lg"
			/>
		</div>
	);
};

export default ProjectDetail;
