export const Footer = () => {
	return (
		<article className='bg-green-2 mt-10 flex items-center'>
			<div
				className='flex justify-center items-center [&>a]:text-4xl [&>a]:text-center [&>a]:p-4 w-2/3 gap-5'
			>
				<a href="https://www.facebook.com/" className='fa-brands fa-facebook hover:scale-105'></a>
				<a href="https://www.instagram.com/" className='fa-brands fa-instagram hover:scale-105'></a>
				<a href="https://www.linkedin.com/" className='fa-brands fa-linkedin hover:scale-105'></a>
				<a href="https://www.github.com/" className='fa-brands fa-github hover:scale-105'></a>
			</div >
			<div className="w-auto font-extrabold text-lg hover:scale-105"> Copyrigth MIT - Jhont3 </div>
		</article>
	);
};
