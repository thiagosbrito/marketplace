import { useQuery } from "@tanstack/react-query";
import { client } from "../../../sanity/lib/client";
import { HIGHLIGHTED_PRODUCTS } from "../../../sanity/queries";
import FeatureProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["featured-products"],
        queryFn: () => client.fetch(HIGHLIGHTED_PRODUCTS)
    });
    if (isLoading) return <p>Loading...</p>;
    return data.map((product: any) => <FeatureProduct key={product._id} product={product} />)
};
export default FeaturedProducts;
