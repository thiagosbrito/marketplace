import { SchemaTypeDefinition } from "sanity";

export const UserSchema: SchemaTypeDefinition = {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Admin', value: 'admin' },
          { title: 'User', value: 'user' },
          { title: 'Provider', value: 'provider' },
        ]
      }
    }
  ]
}