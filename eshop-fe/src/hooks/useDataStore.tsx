import { create } from "zustand";
import { HProduct } from "../interfaces/products";

interface DataProdStoreState {
	hairProducts: HProduct[];
	setHairProducts: (data: HProduct[]) => void;
	filterByPrice: (price: number) => void;
}

export const useDataStore = create<DataProdStoreState>(set => ({
	hairProducts: [],
	setHairProducts: (data = []) => set({ hairProducts: data }),
	filterByPrice: price => {
		set(state => ({
			hairProducts: state.hairProducts.filter(
				product => product.price <= price
			),
		}));
	},
}));
