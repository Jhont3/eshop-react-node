import { ProductCard } from ".";
import { useDataStore } from "../hooks";

export const ShoppingCart = () => {

    const { cartState, selectedItems } = useDataStore();

    return (
		<span>
			{cartState && (
				<aside className='flex justify-end bg-slate-500 relative'>
					<section className='w-[25vw] bg-green-1 flex flex-wrap justify-center absolute z-40 gap-2 rounded-md py-3'>
						{selectedItems?.map(item => (
							<ProductCard
								img={item.image[0]}
								title={item.name}
								key={item.id}
								id={item.id}
								price={item.price}
							/>
						))}
					</section>
				</aside>
			)}
		</span>
	);
};
