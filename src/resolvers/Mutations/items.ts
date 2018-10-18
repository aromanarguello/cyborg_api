import { getUserId } from '../../utils';

import { IContext } from '../Types/context';

export const itemMutations = {
    async createItem(_, { input }, ctx: IContext ){
        getUserId(ctx);

        const newItem = await ctx.db.createItem({
            ...input
        });

        return newItem;
    }
}