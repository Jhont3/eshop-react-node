import { useState } from "react";

export const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedValue, setSelectedValue] = useState("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Aquí puedes realizar la acción de búsqueda con el término ingresado y el valor seleccionado
		console.log("Realizando búsqueda con el término:", searchTerm);
		console.log("Valor seleccionado:", selectedValue);
	};
	return (
		<form onSubmit={handleSubmit} className='flex mt-5 items-center w-full justify-center'>
                  <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar..."
        className="p-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
      />
      <select
        value={selectedValue}
        onChange={handleSelect}
        className="border border-gray-300 rounded-r px-4 py-2 bg-white focus:outline-none focus:border-blue-500"
      >
        <option value="">Seleccionar...</option>
        {[...Array(7)].map((_, index) => (
          <option key={index} value={(index + 1) * 50}>
            {(index + 1) * 50}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Buscar
      </button>

			{/* <input
				type='text'
				placeholder='Search...'
				className='p-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-2'
			/>
			<button
				type='submit'
				className='bg-blue-2 hover:bg-blue-1 text-white px-4 py-2 rounded-r'
			>
				Buscar
			</button> */}
		</form>
	);
};
