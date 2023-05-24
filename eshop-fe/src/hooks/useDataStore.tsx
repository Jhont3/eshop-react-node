import { create } from "zustand";
import { HProduct } from "../interfaces/products";

interface DataProdStoreState {
	hairProducts: HProduct[];
	setHairProducts: (data: HProduct[]) => void;
	filterByPrice: (price: number) => void;
	sortByname: () => void;
	selectedItems: HProduct[];
	setSelectedItems: (data: HProduct[]) => void;
	cartState: boolean;
	setCartState: () => void
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
	sortByname: () => {
		set(state => ({
			hairProducts: state.hairProducts.sort((a, b) =>
				a.name.localeCompare(b.name)
			),
		}));
	},
	selectedItems: [],
	setSelectedItems: (data = []) =>
		set(state => ({ selectedItems: [...state.selectedItems, ...data] })),
	cartState: false,
	setCartState: () => set(state => ({ cartState: !state.cartState })), 
}));
