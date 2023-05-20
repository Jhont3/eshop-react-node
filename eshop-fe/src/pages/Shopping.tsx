import { ProductCard } from "../components";
import { useDataProduts } from "../hooks";

export const Shopping = () => {
	const productsQuery = useDataProduts();

	if (productsQuery.isLoading) return <h1> Cargando... </h1>;

	return (
		<>
			<section className='relative'>
				<article className='grid grid-cols-1 justify-center items-center gap-5 md:grid-cols-2'>
					<h1
						className='z-30 font-bold text-4xl absolute top-1/3 left-1/4 
						transform hover:scale-105 text-black rounded-md p-1'
					>
						HAIRY MONSTER
					</h1>
					<p
						className='absolute z-30 font-bold top-1/2 left-1/4 transform 
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
			<h2 className='text-center font-bold text-4xl py-8 text-blue-2'>
				Products:
			</h2>
			<section className='grid grid-cols-1 mx-11 gap-5 justify-center items-center md:grid-cols-2 lg:grid-cols-4'>
				{productsQuery.data?.map(item => (
					<ProductCard
						img={item.image[0]}
						title={item.name}
						key={item.id}
						price={item.price}
					/>
				))}
			</section>
		</>
	);
};

export default Shopping;
