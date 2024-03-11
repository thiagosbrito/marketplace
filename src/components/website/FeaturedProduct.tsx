import { Button } from "@/components/ui/button";
import { formatImageURL, formatPrice } from "@/lib/utils";
import Image from "next/image";

const FeatureProduct = ({ product }: { product : any}) => {
    return (
        <div className="w-auto bg-white shadow-xl rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
                <Image src={formatImageURL(product.gallery?.images[0])} width={300} height={500} alt="Product" className="h-80 w-auto object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-auto">
                    <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                    <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                    <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">{formatPrice(product.price)}</p>
                    { product.deal_price ? (
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">{formatPrice(product.deal_price)}</p>
                        </del>
                    ): null }
                    <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default FeatureProduct;