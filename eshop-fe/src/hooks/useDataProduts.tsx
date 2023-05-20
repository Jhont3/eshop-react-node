import { useQuery } from '@tanstack/react-query';
import { eshopApi } from '../api/eshopApi';
import { HProduct } from '../interfaces/products';


const getHairProducts = async (): Promise<HProduct[]> => {
	const { data } = await eshopApi.get<HProduct[]>('/products');
	console.log(data);
	return data;
};

export const useDataProduts = () => {
	const query = useQuery(["hairProducts"], getHairProducts, {
		retry: 1,
		refetchOnWindowFocus: false,
		// staleTime?
	});

	return query;
};
