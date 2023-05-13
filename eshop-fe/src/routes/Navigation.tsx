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
				<nav className='flex justify-around items-center bg-green-300'>
					<img src={logo} alt='React Logo' className='p-1.5' />
					<ul className='flex gap-5'>
						<li>
							<NavLink
								to='/home'
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/about'
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/users'
								className={({ isActive }) => (isActive ? "nav-active" : "")}
							>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route
						path='/about'
						element={
							<h1 className='text-3xl font-bold w-1/2 underline'>
								Hello world!
							</h1>
						}
					></Route>
					<Route path='/users' element={<h1>Users Page</h1>}></Route>
					<Route path='/home' element={<h1>Home Page</h1>}></Route>

					<Route path='/*' element={<Navigate to='/Home' replace />}></Route>
				</Routes>
			</div>
		</Router>
	);
};
