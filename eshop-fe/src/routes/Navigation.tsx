import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	Navigate,
} from "react-router-dom";

import { routes } from "./routes";
import { HeaderButtons, IconShoppingCart, Footer } from "../components";

export const Navigation = () => {
	return (
		<Router>
			<div>
				<nav className='flex justify-around items-center bg-green-3'>
					<img src={"./logo-eshop.png"} alt='React Logo' className=' w-16 hover:scale-105' />
					<ul className='flex gap-5'>
						{routes.map(({ to, name }) => (
							<li key={to}>
								<NavLink
									to={to}
									className={({ isActive }) => (isActive ? "nav-active" : "") }
								>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
					<div className="flex justify-around items-center">
						<HeaderButtons/>
						<IconShoppingCart />
					</div>
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
				<Footer/>
			</div>
		</Router>
	);
};
