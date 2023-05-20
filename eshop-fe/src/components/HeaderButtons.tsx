export const HeaderButtons = () => {
	return (
		<div className='flex gap-2 '>
			<button className='bg-blue-1 hover:bg-blue-2 text-white py-2 px-4 rounded hover:scale-105'>
				<span>Login</span>
			</button>
			<button className='bg-blue-1 hover:bg-blue-2 text-white py-2 px-4 rounded hover:scale-105'>
				<span>Sign up</span>
			</button>
		</div>
	);
};
