import { auth } from './auth';
import { itemMutations } from './items';
import { orderMutations } from './orders';

export const mutations = {
    ...auth,
    ...itemMutations,
    ...orderMutations
};
