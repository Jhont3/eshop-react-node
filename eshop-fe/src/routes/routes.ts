import { Shopping, About, User } from "../pages";

interface Route {
    to: string,
    path: string,
    component: () => JSX.Element;
    name: string
}

export const routes: Route[] = [
	{
		to: "/home",
		path: "home",
		component: Shopping,
        name: 'Home'
	},
	{
		to: "/about",
		path: "about",
		component: About,
        name: 'About us'
	},
	{
		to: "/user",
		path: "user",
		component: User,
        name: 'My account'
	},
];
