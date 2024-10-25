// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
	<motion.div
		className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105"
		initial={{ opacity: 0, y: 50 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
	>
		<h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
		<p className="text-gray-600 mt-2">{project.description}</p>
		<Link to={`/projects/${project.id}`}>
			<button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
				Learn More
			</button>
		</Link>
	</motion.div>
);

export default ProjectCard;
