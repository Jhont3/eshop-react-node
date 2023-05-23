import { useState } from "react";
import { useDataProduts, useDataStore } from "../hooks";

export const SearchBar = () => {
	const { filterByPrice, setHairProducts } = useDataStore();
	const [selectedValue, setSelectedValue] = useState("");

	const productsQuery = useDataProduts();

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (selectedValue !== "") {
			const price = parseInt(selectedValue);
			filterByPrice(price);
		}
		console.log("Valor seleccionado:", selectedValue);
	};

	console.log(productsQuery.data, "aca")

	const resetProdData = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		productsQuery.data && setHairProducts(productsQuery.data)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex mt-5 items-center w-full justify-center gap-1'
		>
			<select
				value={selectedValue}
				onChange={handleSelect}
				className='border border-gray-300 rounded-r px-4 py-2 bg-white focus:outline-none focus:border-blue-1 rounded-md'
			>
				<option value=''>Select max price...</option>
				{[...Array(6)].map((_, index) => (
					<option key={index} value={(index + 1) * 50}>
						{(index + 1) * 50}
					</option>
				))}
			</select>
			<button
				type='submit'
				className='bg-blue-2 hover:bg-blue-1 text-white px-4 py-2 rounded-md hover:scale-105'
			>
				Search
			</button>
			<button
				type='reset'
				className='bg-blue-2 hover:bg-blue-1 text-white px-3 py-2 rounded-md hover:scale-105'
				onClick={resetProdData}
			>
				Reset
			</button>
		</form>
	);
};
