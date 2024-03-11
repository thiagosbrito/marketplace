import { SchemaTypeDefinition } from "sanity";

export const OrdersSchema: SchemaTypeDefinition  = {
    name: 'orders',
    title: 'Orders',
    type: 'document',
    fields: [
        {
            name: 'user',
            title: 'User',
            type: 'reference',
            to: [{ type: 'users' }]
        },
        {
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'products' }] }]
        },
        {
            name: 'schedule',
            title: 'Schedule',
            type: 'object',
            fields: [
                {
                    name: 'scheduleDate',
                    title: 'Schedule Date',
                    type: 'datetime'
                },
                {
                    name: 'product',
                    title: 'Product',
                    type: 'reference',
                    to: [{ type: 'products' }]
                }
            ]
        },
        {
            name: 'totalPrice',
            title: 'Total Price',
            type: 'number'
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Completed', value: 'completed' },
                    { title: 'Cancelled', value: 'cancelled' }
                ]
            }
        }
    ]
}
