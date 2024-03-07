"use client";

import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { client } from "../../../sanity/lib/client";

const NavItems = () => {
  	const [activeIndex, setActiveIndex] = useState<null | number>(null)
	const isAnyOpen = activeIndex !== null;
  	const navRef = useRef<HTMLDivElement | null>(null);

	const [categories, setCategories] = useState<any[]>([]);

  	useOnClickOutside(navRef, () => setActiveIndex(null));
  	useEffect(() => {
		const fetchCategories = async () => {
			const query_res = await client.fetch(`*[_type == 'categories']{
        		...,
        		"subcategories": *[_type == 'subCategories' && references(^._id)]
			}`);
			setCategories(query_res);
		};
		fetchCategories();
    	const handler = (e: KeyboardEvent) => {
      		if (e.key === "Escape") {
        		setActiveIndex(null);
      		}
    	}
    	document.addEventListener("keydown", handler);

    	return () => {
      		document.removeEventListener("keydown", handler)
    	}
  	}, [])


  	return (
    	<div className="flex gap-4 h-full" ref={navRef}>
      		{categories.map((cat, i) => {
        		const handleOpen = () => {
					if (activeIndex === i) {
						setActiveIndex(null)
					} else {
						setActiveIndex(i)
					}
				}
				const isOpen = i === activeIndex;
        		return (
					<NavItem category={cat} handleOpen={handleOpen} isOpen={isOpen} key={cat._id} isAnyOpen={isAnyOpen} />
				)
			})}
    	</div>
  	)
}

export default NavItems;