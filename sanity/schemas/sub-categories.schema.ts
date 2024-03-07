import { SchemaTypeDefinition } from "sanity";

export const SubCategoriesSchema: SchemaTypeDefinition = {
    name: 'subCategories',
    title: 'Sub Categories',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'category',
            title: 'Parent Category',
            type: 'reference',
            to: [{ type: 'categories' }]
        }
    ]
}
