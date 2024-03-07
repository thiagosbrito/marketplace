"use client";

import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { cn, formatImageURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useRouter } from "next/navigation";

interface NavItemProps {
  category: {
    name: string;
    description: string;
    image: SanityImageSource;
    slug: {
      current: string;
      _type: string;
    };
    subcategories: {
      description: string;
      name: string;
      slug: {
        current: string;
        _type: string;
      };
      image: SanityImageSource;
    }[]
  }
  handleOpen: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

const NavItem = ({isAnyOpen, category, handleOpen, isOpen}: NavItemProps) => {
  const router = useRouter();
  const mapped_categories = category.subcategories.map((item) => {
    return {
      ...item,
      parent: category
    }
  });

  const navigateToProductsPage = (category: any) => () => {
		router.push(`/products/${category.slug.current}`);
  }

  return <div className="flex">
    <div className="relative flex items-center">
      <Button className="gap-1.5" onClick={handleOpen} variant={isOpen ? 'secondary' : 'ghost'}>
        {category.name}
        <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
          "-rotate-180" : isOpen
        })}></ChevronDown>
      </Button>
    </div>
    {isOpen ? (
      <div className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground", {
        "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen
      })}>
        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
              <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                {mapped_categories.map((item) => (
                  <div key={item.name} className="group relative text-base sm:text-sm">
                    <div className="relative aspect-video overflow-hidden cursor-pointer rounded-lg bg-gray-100 group-hover:opacity-75" onClick={navigateToProductsPage(category)}>
                      <Image src={formatImageURL(item.image)} alt="experience image" fill className="object-cover object-center"/>
                    </div>
                    <Link href={`/products/${item.parent.slug.current}/${item.slug.current}`} className="mt-6 block font-medium text-gray-900">
                      {item.name}
                      <p className="mt-1 text-muted-foreground" aria-hidden="true">See offers</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null}
  </div>
}

export default NavItem;