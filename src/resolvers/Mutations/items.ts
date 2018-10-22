import { getUserId } from '../../utils';

import { IContext } from '../Types/context';

export const itemMutations = {
    async createItem(_, { input }, ctx: IContext ) {
        const userId = getUserId(ctx);
        const user = await ctx.db.user({ id: userId});

        if (user.role !== 'Admin') throw new Error('Not Authorized!');
        const newItem = await ctx.db.createItem({
            ...input
        });

        return newItem;
    },
    async updateItem(_, { input, id }, ctx: IContext) {
        const userId = getUserId(ctx)
        const user = await ctx.db.user({ id: userId });

        if (user.role !== 'Admin') throw new Error('Not Authorized!');

        const item = await ctx.db.updateItem({
            where: {
                id
            },
            data: {
                ...input
            }
        });

        return item;
    }
};
