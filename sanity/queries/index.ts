

export const PRODUCTS_BY_CATEGORY_SUBCATEGORY = '*[_type == "products" && category->slug.current == "${category}" && subcategory->slug.current == "${subcategory}" ]';
export const PRODUCT_DETAILS = '*[_type == "products" && slug.current == "${slug}"][0]';
export const HIGHLIGHTED_PRODUCTS = '*[_type == "products" && highlighted == true]{...,"category_name": category->name, "category_slug": category->slug.current, "subcategory_name": subcategory->name, "subcategory_slug": subcategory->slug.current}';
export const ALL_PRODUCTS = '*[_type == "products"]{...,"category_name": category->name, "category_slug": category->slug.current, "subcategory_name": subcategory->name, "subcategory_slug": subcategory->slug.current}';