import { SchemaTypeDefinition } from "sanity";

export const ProviderSchema: SchemaTypeDefinition ={
  name: 'provider',
  title: 'Provider',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'users', title: 'User' }],
      description: 'The user that is a provider',
      validation: Rule => Rule.custom((user, context) => {
        return true;
      })
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [{type: 'url'}],
    },
    {
      name: 'legalNumbers',
      title: 'Legal Numbers',
      type: 'array',
      of: [{type: 'string'}],
    },
    // Add more fields as needed
  ],
}