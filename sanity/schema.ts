import { list } from 'postcss'
import { type SchemaTypeDefinition } from 'sanity'
import { UserSchema } from './schemas/user.schema'
import { CategoriesSchema } from './schemas/categories.schema'
import { SubCategoriesSchema } from './schemas/sub-categories.schema'
import { ProviderSchema } from './schemas/providers.schema'
import { ProductSchema } from './schemas/products.schema'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    UserSchema,
    CategoriesSchema,
    SubCategoriesSchema,
    ProviderSchema,
    ProductSchema
  ],
}

