import { AnimationAboutTitle } from "../components";

export const About = () => {
	return (
		<section className='background-image h-[80.5vh] flex flex-col justify-start items-center gap-4'>
			<div className="rounded-full bg-white p-1 mt-4 border-x-8 border-gray-400	">
				<img
					src='icon-shopping-car2.png'
					alt='Jhonatan'
					className='w-64 rounded-full hover:scale-105'
				/>
			</div>
			<AnimationAboutTitle/>
			<p className='w-[40vw] text-center text-blue-2 text-2xl font-medium'>
				I am a FullStack Developer from Colombia, who enjoys video games and
				great any kind of music, besides... I am seeking job opportunities!
			</p>
		</section>
	);
};

export default About;
