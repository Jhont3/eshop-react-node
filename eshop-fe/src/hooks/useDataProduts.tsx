import { useQuery } from "@tanstack/react-query";
import { eshopApi } from "../api/eshopApi";
import { HProduct } from "../interfaces/products";
import { useDataStore } from ".";

const getHairProducts = async (): Promise<HProduct[]> => {
	const { data } = await eshopApi.get<HProduct[]>("/products");
	console.log(data);
	useDataStore.getState().setHairProducts(data);
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
