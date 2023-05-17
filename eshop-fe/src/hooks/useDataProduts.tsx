import { useQuery } from "@tanstack/react-query";

const getHairProducts = async (): Promise<any> => {
	const res = await fetch("http://localhost:4000/api/products");
	const data = await res.json();
	console.log(data);
	return data;
};

export const useDataProduts = () => {
    const query = useQuery(
        ['hairProducts'],
        getHairProducts
    );
    return query;
}
