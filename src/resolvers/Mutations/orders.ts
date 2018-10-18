import { getUserId } from '../../utils';
import { IContext } from '../Types/context';

export const orderMutations = {
    async newOrder(_, args, ctx: IContext) {
        const { input: { itemId, price, provider, owner: { email } } } = args;
        const userId = getUserId(ctx);
        const user = await ctx.db.user({ id: userId });

        if (user.email !== email) throw new Error('User does not exist');

        return ctx.db.createOrder({
            itemId: {
                set: itemId
            },
            price,
            provider,
            owner: {
                connect: { email }
            }
        });
    },
    async updateOrder(_, { input: { itemId, price, provider, id } }, ctx: IContext) {
        getUserId(ctx);
        return ctx.db.updateOrder({
            where: {
                id
            },
            data: {
                itemId: {
                    set: itemId
                },
                price,
                provider
            }
        });
    }
};
