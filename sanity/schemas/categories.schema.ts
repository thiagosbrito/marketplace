import { SchemaTypeDefinition } from "sanity";

export const CategoriesSchema: SchemaTypeDefinition = {
    name: 'categories',
    title: 'Categories',
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
        }
    ]
}
