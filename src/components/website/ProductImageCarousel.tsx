import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "../ui/carousel";
import Image from "next/image";
import { formatImageURL } from "@/lib/utils";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { set } from "sanity";

const ProductImageCarousel = ({ gallery }: {gallery: any}) => {
    // set the initial image of my carousel as my gallery.images[0]

    const [api, setApi] = useState<CarouselApi | null>(null)
    const [loading, setLoading] = useState(true);
    
    const [activeImage, setActiveImage] = useState<SanityImageSource | null>(null);
    if (gallery?.images.length > 0 && !activeImage) {
        setActiveImage(gallery.images[0]);
    }
    // setActiveImage(gallery);
    
    const imageLoaded = () => {
        if (activeImage) {
            setLoading(false);
        }
    }

    const handleClick = (image: SanityImageSource) => {
        if (activeImage === image) return;
        setActiveImage(image);
    };

    return (
        <>
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 shadow-lg">
                <div className="h-full w-full relative md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    {!activeImage ? 
                        <p>Loading...</p> : 
                        <Image
                            src={formatImageURL(activeImage!)}
                            fill
                            className="object-cover rounded-lg"
                            alt="Product image"
                            onLoad={imageLoaded}
                        />
                    }
                </div>
            </div>
            {/* <Carousel setApi={setApi} className="">
                <CarouselContent className="">
                    {gallery?.images.map((image: any, index: number) => (
                        <CarouselItem key={index}>
                            <Image
                                src={formatImageURL(image)}
                                fill
                                className="object-contain rounded-lg"
                                alt="Product image"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
            </Carousel> */}
            <div className="flex h-32 gap-6 flex-row">
                {gallery?.images.map((image: any, index: number) => (
                    <div
                        key={index}
                        className="w-32 cursor-pointer opacity-75 h-auto relative shadow-lg rounded-lg bg-gray-100 flex items-center justify-center transition-all ease-in hover:w-36 hover:scale-110 hover:opacity-100"
                        onClick={() => handleClick(image)}
                    >
                        <Image
                            src={formatImageURL(image)}
                            fill
                            className="object-cover rounded-lg"
                            alt="Product image"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
export default ProductImageCarousel;
