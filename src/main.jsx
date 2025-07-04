import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Portfolio from "./pages/Portfolio";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Portfolio />} />
				</Route>
			</Routes>
		</Router>
	</StrictMode>
);
