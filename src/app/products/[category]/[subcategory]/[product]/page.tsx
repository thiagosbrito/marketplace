'use client';
import { useEffect, useState } from "react";
import { client } from "../../../../../../sanity/lib/client";
import { useParams } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PRODUCT_DETAILS } from "@/queries";
import Image from "next/image";
import { formatImageURL } from "@/lib/utils";

const ProductDetailsPage = () => {
    
    const productSlug = useParams().product as string;
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        if (productSlug) {
            const query = PRODUCT_DETAILS.replace("${slug}", productSlug as string);
            client.fetch(query).then(product => setProductDetails(product));
        }
    }, [productSlug]);

    return (
        <div className="flex flex-col justify-between mt-6">
            <div className="container mx-auto">
                { !productDetails ? null : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Carousel>
                                <CarouselContent className="bg-slate-900">
                                    {(productDetails as any).gallery.images.map((image: any, i: number) => (
                                        <CarouselItem className="flex w-full" key={i}>
                                                
                                            <Image
                                                width={500}
                                                height={500}
                                                src={formatImageURL(image)}
                                                alt={image.alt || ""} />
                                        </CarouselItem>
                                    ))}    
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">{(productDetails as any).name}</h1>
                            <p className="text-muted-foreground">{(productDetails as any).description}</p>
                            <p className="text-2xl font-bold mt-4">{(productDetails as any).price}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default ProductDetailsPage;
