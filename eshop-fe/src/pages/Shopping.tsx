import { ProductCard } from "../components";
import { products } from "../data/products";

export const Shopping = () => {
	return (
		<>
			<section className='relative'>
				<article className='grid grid-cols-1 justify-center items-center gap-5 md:grid-cols-2 '>
					<h1 className='z-30 text-blue-2 font-bold text-4xl absolute top-1/3 left-1/4 transform -translate-y-1/2 shadow-2xl'>
						HAIRY MONSTER
					</h1>
					<p className='absolute z-30 text-blue-2 font-bold top-1/2 left-1/4 transform -translate-y-1/2 shadow-2xl'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
						asperiores voluptatem commodi aliquam. Exercitationem!
					</p>
				</article>
				<div className='relative '>
					<img
						src='./bg-1.jpg'
						alt='forest'
						className='w-full h-72 object-cover'
					/>
				</div>
			</section>
			<h2 className='text-center font-bold text-4xl py-8 text-blue-2'>
				Products:
			</h2>
			<section className='grid grid-cols-1 mx-11 gap-5 justify-center items-center md:grid-cols-2 lg:grid-cols-4'>
				{products.map(product => (
					<ProductCard
						img={product.img}
						title={product.name}
						key={product.id}
						price={product.price}
					/>
				))}
			</section>
		</>
	);
};

export default Shopping;
