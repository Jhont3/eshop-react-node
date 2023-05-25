import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export const AnimationAboutTitle = () => {
	const titleRef = useRef(null);

	useEffect(() => {
		gsap.to(titleRef.current, {
			duration: 2,
			motionPath: {
				path: [
					{ x: 0, y: 0 },
					{ x: 25, y: 25 },
					{ x: 25, y: -25 },
					{ x: -25, y: 0 },
					{ x: 0, y: 0 }, 
				],
			},
		});
	}, []);

	return (
		<h1
			ref={titleRef}
			className='text-4xl text-blue-2 bg-green-1 rounded-t-2xl border-2 border-gray-400 p-2 font-bold mb-3'
		>
			JHONATAN ESCOBAR
		</h1>
	);
};
