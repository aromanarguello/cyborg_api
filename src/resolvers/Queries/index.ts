import { itemQueries } from './items';
import { orderQueries } from './orders';
import { userQueries } from './users';

export const queries = {
    ...userQueries,
    ...orderQueries,
    ...itemQueries
};
