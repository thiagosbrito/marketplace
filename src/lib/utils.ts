import imageUrlBuilder from '@sanity/image-url'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { client } from "../../sanity/lib/client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "BRL",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const {currency = "BRL", notation = "standard"} = options;

  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numericPrice);
}

export function formatImageURL(source: SanityImageSource): string {
  const builder = imageUrlBuilder(client);
  return builder.image(source).url()
}