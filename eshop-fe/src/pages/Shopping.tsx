import {
	LoadingAnimation,
	ProductCard,
	SearchBar,
	AnimatedTitle,
	ShoppingCart,
} from "../components";
import { useDataProduts, useDataStore } from "../hooks";

export const Shopping = () => {
	const productsQuery = useDataProduts();
	const productsByZustand = useDataStore(
		DataProdStoreState => DataProdStoreState.hairProducts
	);

	console.log(productsByZustand, "zustand");

	if (productsQuery.isLoading) return <LoadingAnimation />;

	return (
		<>
			<ShoppingCart />
			<section className='relative'>
				<article className='grid grid-cols-1 justify-center items-center gap-5 md:grid-cols-2'>
					<AnimatedTitle />
					<p
						className='absolute z-30 font-semibold top-1/2 left-1/4 transform 
						w-2/3 text-black rounded-md p-1 translate-y-1'
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
						asperiores voluptatem commodi aliquam. Exercitationem!
					</p>
				</article>
				<div className='relative '>
					<img
						src='./bg-1.jpg'
						alt='forest'
						className='w-full h-72 object-cover opacity-90'
					/>
				</div>
			</section>

			<SearchBar />

			<h2 className='text-center font-bold text-4xl py-8 text-blue-2'>
				Products:
			</h2>
			<section className='grid grid-cols-1 mx-11 gap-5 justify-center items-center md:grid-cols-2 lg:grid-cols-4'>
				{productsByZustand?.map(item => (
					<ProductCard
						img={item.image[0]}
						title={item.name}
						key={item.id}
						id={item.id}
						price={item.price}
					/>
				))}
			</section>
		</>
	);
};

export default Shopping;
