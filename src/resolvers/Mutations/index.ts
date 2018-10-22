import { auth } from './auth';
import { itemMutations } from './items';
import { orderMutations } from './orders';
import { userMutations } from './users';

export const mutations = {
    ...auth,
    ...itemMutations,
    ...orderMutations,
    ...userMutations
};
