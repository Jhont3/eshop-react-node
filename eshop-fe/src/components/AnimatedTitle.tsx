import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export const AnimatedTitle: React.FC = () => {
	const h1Ref = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		if (h1Ref.current) {
			gsap.to(h1Ref.current, {
				x: 75,
				duration: 1,
				backgroundColor: "#F0FFF1",
				border: "5px solid white",
				color: "#8367C7",
				borderColor: "#8367C7",
				borderRadius: "25%",
				ease: "bounce",
			});
		}
	}, []);

	return (
		<h1
			className='z-30 font-bold text-4xl absolute top-1/4 left-1/4 text-black rounded-md p-1'
			ref={h1Ref}
		>
			HAIRY MONSTER
		</h1>
	);
};

export default AnimatedTitle;
