import { auth } from './auth';
import { orderMutations } from './orders';

export const mutations = {
    ...auth,
    ...orderMutations
};
