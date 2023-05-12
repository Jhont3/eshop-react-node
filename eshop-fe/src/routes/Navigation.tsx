import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	Navigate,
} from "react-router-dom";

import logo from "/vite.svg";

export const Navigation = () => {
	return (
		<Router>
			<div>
				<nav>
					<img src={logo} alt='React Logo' />
					<ul>
						<li>
							<NavLink to='/home'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/about'>About</NavLink>
						</li>
						<li>
							<NavLink to='/users'>Users</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='/about' element={<h1>About Page</h1>}></Route>
					<Route path='/users' element={<h1>Users Page</h1>}></Route>
					<Route path='/home' element={<h1>Home Page</h1>}></Route>

					<Route path='/*' element={<Navigate to='/Home' replace />}></Route>
				</Routes>
			</div>
		</Router>
	);
};
