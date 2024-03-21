'use client';
import { useEffect, useState } from "react";
import { client } from "../../../../../../sanity/lib/client";
import { useParams } from "next/navigation";
import { PRODUCT_DETAILS } from "@/queries";
import { formatPrice } from "@/lib/utils";
import ProductImageCarousel from "@/components/website/ProductImageCarousel";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Star, HelpCircle, CalendarPlusIcon, CameraIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";


const ProductDetailsPage = () => {
    const productSlug = useParams().product as string;
    const [productDetails, setProductDetails] = useState<{
        name: string;
        price: number;
        description: string;
        provider_name: string;
        gallery: any;
    } | null>(null);
    
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["product-details", productSlug],
        queryFn: () => {
            const query = PRODUCT_DETAILS.replace("${productSlug}", '"' + productSlug + '"');
            return client.fetch(query)
        },
    });


    useEffect(() => {
        if (isSuccess) {
            setProductDetails(data);
        }
    }, [isSuccess, data])
    
    

    // useEffect(() => {
    //     if (productSlug) {
    //         const query = PRODUCT_DETAILS.replace("${slug}", productSlug as string);
    //         client.fetch(query).then(product => setProductDetails(product));
    //     }
    // }, [productSlug]);
    if (isLoading) return <p>Loading...</p>;
    if (productDetails === null) return <p>Product not found</p>;
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex py-12 pl-1 bg-white items-center sticky top-24">
                    <div className="flex-col flex-1 text-slate-500">
                        <h2 className="text-2xl font-semibold">{productDetails.name}</h2>
                        <span>by: {productDetails.provider_name}</span>
                    </div>
                    <Button color="primary" className="text-white px-8">
                        <CalendarPlusIcon className="w-6 h-6 mr-2" />
                        <span className="text-md font-semibold text-white">AGENDAR</span>
                    </Button>
                </div>
                <div className="flex">
                    <div className="w-full min-h-[700px] md:min-h-[600px] flex-col md:flex-row flex gap-2 text-white font-bold text-2xl">
                        
                        <div className="w-full md:w-6/12 h-full">
                            <div className="w-full h-[400px] md:h-full bg-slate-300 hover:bg-slate-500 flex items-center justify-center rounded-t-xl lg:rounded-l-xl md:rounded-tr-none transition-all ease-in">
                                <CameraIcon className="h-12 w-12" />
                            </div>
                        </div>  
                        <div className="w-full md:w-6/12 flex flex-wrap h-full gap-2">
                            <div className="w-[calc(50%-4px)] h-[calc(50%-4px)] bg-slate-300 hover:bg-slate-500 flex items-center justify-center transition-all ease-in"><CameraIcon className="h-12 w-12" /></div>
                            <div className="w-[calc(50%-4px)] h-[calc(50%-4px)] bg-slate-300 hover:bg-slate-500 flex items-center justify-center md:rounded-tr-xl transition-all ease-in"><CameraIcon className="h-12 w-12" /></div>
                            <div className="w-[calc(50%-4px)] h-[calc(50%-4px)] bg-slate-300 hover:bg-slate-500 flex items-center justify-center rounded-bl-xl md:rounded-bl-none transition-all ease-in"><CameraIcon className="h-12 w-12" /></div>
                            <div className="w-[calc(50%-4px)] h-[calc(50%-4px)] bg-slate-300 hover:bg-slate-500 flex items-center justify-center rounded-br-xl transition-all ease-in"><CameraIcon className="h-12 w-12" /></div>
                        </div>
                    </div>
                    {/* <div className="flex-1 px-4">
                        <ProductImageCarousel gallery={productDetails.gallery} />
                    </div>
                    <div className="top-20 px-4 sticky">
                        <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                            {productDetails.name}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            By{" "}
                            <a href="#" className="text-indigo-600 hover:underline">
                                {productDetails.provider_name}
                            </a>
                        </p>
                        <div className="flex items-center space-x-4 my-4">
                            <div>
                                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                    <span className="text-indigo-400 mr-1 mt-1">R$</span>
                                    <span className="font-bold text-indigo-600 text-3xl">{formatPrice(productDetails.price).replace('R$', '')}</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                            </div>
                        </div>
                        <div className="flex py-4 space-x-4">
                            <div className="relative">
                                <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                                    Qty
                                </div>
                                <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                    />
                                </svg>
                            </div>
                            <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                                Add to Cart
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
            <section className="product-information max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <Tabs defaultValue="description" className="w-full">
                    <TabsList>
                        <TabsTrigger value="description" className="flex text-muted-foreground gap-2">
                            <Info className="w-4 h-4" />
                            <span>Description</span>
                        </TabsTrigger>
                        <TabsTrigger value="reviews" className="flex text-muted-foreground gap-2">
                            <Star className="w-4 h-4" />
                            <span>Reviews</span>
                        </TabsTrigger>
                        <TabsTrigger value="faq" className="flex text-muted-foreground gap-2">
                            <HelpCircle className="w-4 h-4" />
                            <span>F.A.Q</span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="description">
                        <div className="max-w-7xl py-6 px-4">
                            <ReactMarkdown>
                                {productDetails.description}
                            </ReactMarkdown>
                        </div>
                    </TabsContent>
                    <TabsContent value="reviews">Reviews Content</TabsContent>
                    <TabsContent value="faq">FAQ Content</TabsContent>
                </Tabs>
            </section>
        </div>
    );
}

export default ProductDetailsPage;