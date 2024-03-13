import { SchemaTypeDefinition } from "sanity";

export const ProductSchema: SchemaTypeDefinition ={
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        type: 'string',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 200,
        },
    },
    {
        name: 'description',
        title: 'Description',
        type: 'text',
    },
    {
      name: 'provider',
      title: 'Provider',
      type: 'reference',
      to: [{ type: 'provider' }] // replace 'provider' with the actual type of your provider document
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number',
    },
    {
        name: 'deal_price',
        title: 'Deal Price',
        type: 'number',
    },
    {
        name: 'deal_exp_date',
        title: 'Deal Expiration Price',
        type: 'date',
    },
    {
        name: 'gallery',
        type: 'object',
        title: 'Gallery',
        fields: [{
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{
                name: 'image',
                type: 'image',
                title: 'Image',
                options: {
                    hotspot: true,
                },
                fields: [{
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }],
            }],
            options: {
                layout: 'grid',
            },
        },
        {
            name: 'display',
            type: 'string',
            title: 'Display as',
            description: 'How should we display these images?',
            options: {
                list: [
                    { title: 'Stacked on top of eachother', value: 'stacked' },
                    { title: 'In-line', value: 'inline' },
                    { title: 'Carousel', value: 'carousel' },
                ],
                layout: 'radio', // <-- defaults to 'dropdown'
            },
        },
        {
            name: 'zoom',
            type: 'boolean',
            title: 'Zoom enabled',
            description: 'Should we enable zooming of images?',
        }],
        preview: {
            select: {
                images: 'images',
                image: 'images.0',
            },
            prepare(selection) {
                const { images, image } = selection;

                return {
                    title: `Gallery block of ${Object.keys(images).length} images`,
                    subtitle: `Alt text: ${image.alt}`,
                    media: image,
                };
            },
        },
    },
    {
        name: 'isActive',
        title: 'Is product active?',
        type: 'boolean',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'categories' },
    },
    {
        name: 'subcategory',
        title: 'Subcategory',
        type: 'reference',
        to: [
            {
                type: 'subCategories',
                options: {
                    filter: ({ document }: { document: any }) => {
                        return {
                            filter: 'category._ref == $categoryId',
                            params: { categoryId: document.category._ref },
                        }
                    },
                },
            },
        ],
    },
    {
        name: 'highlighted',
        title: 'Is a highlighted product?',
        type: 'boolean',
    }
  ],
}