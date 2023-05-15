export const ProductCard = ({ img, title }: { img: string, title: string }) => {
	return (
		<div className='flex flex-col justify-between bg-white shadow-md rounded-md gap-5 mx-5 h-96 md:h-max pb-5 md:w-92 hover:shadow-xl cursor-pointer hover:scale-110 transition-all duration-150'>
			<div className='overflow-hidden rounded-t-lg grow'>
				<img
					src={img}
					className=' grow w-full object-contain h-72 md:h-96 rounded-t-lg  hover:scale-110 cursor-pointer transition-all duration-150 hover:bg-black'
					alt={title}
				/>
			</div>

			<p className='text-center font-bold text-xl flex-none'>{title}</p>

			<div className='flex flex-col flex-wrap px-5 flex-none'>
				<p className='text-md md:text-base font-semibold'>
					<span>
						<i className='fa-solid fa-book text-gray-400 text-2xl mr-2'></i>
					</span>
					Publisher:
					<span className='ml-2 font-normal'>{title}</span>
				</p>

				<p className='text-md md:text-base font-semibold'>
					<span>
						<i className='fa-solid fa-user text-gray-400 text-2xl mr-2'></i>
					</span>
					Name:
					<span className='ml-2 font-normal'>{title}</span>
				</p>

				<p className='text-md md:text-base font-semibold'>
					<span>
						<i className='fa-solid fa-clock text-gray-400 text-2xl mr-2'></i>
					</span>
					First Appearance:
					<span className='ml-2 font-normal'>{title}</span>
				</p>

				<p className='text-md md:text-base font-semibold'>
					<span>
						<i className='fa-solid fa-user-group text-gray-400 text-2xl mr-2'></i>
					</span>
					Character:
					<span className='ml-2 font-normal'>{title}</span>
				</p>
			</div>
		</div>
	);
};
