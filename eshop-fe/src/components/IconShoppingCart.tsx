import { useDataStore } from "../hooks";

export const IconShoppingCart = () => {
	const { setCartState } = useDataStore();
	return (
		<div>
			<img
				src={"icon-shopping-car2.png"}
				alt='Shopping Cart'
				className='w-16 hover:scale-105'
				onClick={() => setCartState()}
			/>
		</div>
	);
};
