'use client';
import { useEffect, useState } from "react";
import { client } from "../../../../../../sanity/lib/client";
import { useParams } from "next/navigation";
import { PRODUCT_DETAILS } from "@/queries";
import { formatPrice } from "@/lib/utils";
import ProductImageCarousel from "@/components/website/ProductImageCarousel";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Star, HelpCircle, CalendarPlusIcon, CameraIcon, HeartIcon, Heart, Share } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";


const ProductDetailsPage = () => {
    const productSlug = useParams().product as string;
    const [isHovered, setIsHovered] = useState(false);
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
            console.log(data);
            setProductDetails(data);
        }
    }, [isSuccess, data])
    
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
                    <div className="actions flex gap-4 items-center">
                        <Share className="h-6 w-6 text-slate-500 cursor-pointer hover:text-slate-700 active:text-slate-900" />
                        <Heart
                            className="h-6 w-6 text-red-500 cursor-pointer" 
                            color={isHovered ? "#8A053C" : "#EC0868"}
                            fill={isHovered ? "#8A053C" : "none"}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                        <Button color="primary" className="text-white px-8">
                            <CalendarPlusIcon className="w-6 h-6 mr-2" />
                            <span className="text-md font-semibold text-white">AGENDAR</span>
                        </Button>
                    </div>
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
                </div>
            </div>
            <section className="product-information grid grid-cols-3 gap-4 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="col-span-2">
                    <h3 className="text-2xl font-bold text-muted-foreground border-b border-solid pb-4 my-4">Descrição</h3>

                    <ReactMarkdown className="text-slate-500 whitespace-pre-wrap">
                        {productDetails.description}
                    </ReactMarkdown>

                    <h3 className="text-2xl font-bold text-muted-foreground border-b border-solid pb-4 my-4">Descrição</h3>

                    <ReactMarkdown className="text-slate-500 whitespace-pre-wrap">
                        {productDetails.description}
                    </ReactMarkdown>
                </div>
                <div>
                    <div className="flex bg-slate-50 rounded-xl min-h-[300px] py-6 px-4 border border-solid border-slate-300 sticky top-30">
                        <div className="book p-2 flex flex-col items-center w-full">
                            <h3 className="text-left w-full text-2xl font-bold mb-4">R$ 800,00</h3>
                            <div className="date-and-infos border border-solid w-full border-slate-300 rounded-lg py-4">
                                <div className="date flex pb-4 px-2 gap-2">
                                    <span className="text-muted-foreground">Data:</span>
                                    <span className="text-slate-500 ml-auto">12/12/2022</span>
                                </div>
                                <div className="time border-t border-solid border-slate-300 px-2 pt-4 flex gap-2">
                                    <span className="text-muted-foreground">Horário:</span>
                                    <span className="text-slate-500 ml-auto">12:00</span>
                                </div>
                            </div>
                            <Button className="w-full p-6 my-4 bg-gradient-to-r from-slate-900 to-slate-700 text-slate-200 font-bold">
                                <CalendarPlusIcon className="w-6 h-6 mr-2" />
                                Reservar essa data
                            </Button>
                        </div>
                        <div className="summary">

                        </div>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-4">
                    <div className="bg-slate-300 min-h-[400px] rounded-lg flex items-center justify-center text-white font-bold">
                        1
                    </div>
                    <div className="bg-slate-300 min-h-[400px] rounded-lg flex items-center justify-center text-white font-bold">
                        2
                    </div>
                </div>

                <div className="col-span-3">
                    <h3 className="text-2xl font-bold text-muted-foreground border-b border-solid pb-4 my-4">Descrição</h3>

                    <ReactMarkdown className="text-slate-500 whitespace-pre-wrap">
                        {productDetails.description}
                    </ReactMarkdown>
                </div>

                <div className="col-span-3 grid grid-cols-2 gap-4">
                    <div className="bg-slate-300 min-h-[400px] rounded-lg flex items-center justify-center text-white font-bold">
                        1
                    </div>
                    <div className="bg-slate-300 min-h-[400px] rounded-lg flex items-center justify-center text-white font-bold">
                        2
                    </div>
                </div>
            </section>
            
            
        </div>
    );
}

export default ProductDetailsPage;