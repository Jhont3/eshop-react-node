import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	Navigate,
} from "react-router-dom";

import logo from "/vite.svg";
import { routes } from "./routes";

// import { Home, ProductDetail, User } from "../pages";

export const Navigation = () => {
	return (
		<Router>
			<div>
				<nav className='flex justify-around items-center bg-blue-1'>
					<img src={logo} alt='React Logo' className='p-1.5' />
					<ul className='flex gap-5'>
						{routes.map(({ to, name }) => (
							<li key={to}>
								<NavLink
									to={to}
									className={({ isActive }) => (isActive ? "nav-active" : "")}
								>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<Routes>
					{routes.map(({ path, component: Component }) => (
						<Route key={path} path={path} element={<Component />}></Route>
					))}

					<Route
						path='/*'
						element={<Navigate to={routes[0].to} replace />}
					></Route>
				</Routes>
			</div>
		</Router>
	);
};
