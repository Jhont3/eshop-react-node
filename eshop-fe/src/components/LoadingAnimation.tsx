import { useEffect, useRef } from "react";
import gsap from "gsap";

export const LoadingAnimation = () => {
	const iconRef = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline({ repeat: -1 });

		tl.to(iconRef.current, {
			rotation: 360,
			duration: 2,
			ease: "linear",
		});
	}, []);

	return (
		<div className='h-[75vh]'>
			<i
				className='fa-solid fa-circle-notch'
				style={{ animation: "none" }}
				ref={iconRef}
			></i>
			&nbsp;
			<span>Loading...</span>
		</div>
	);
};
