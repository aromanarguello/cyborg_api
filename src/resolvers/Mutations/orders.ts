import { getUserId } from '../../utils';
import { IContext } from '../Types/context';

export const orderMutations = {
    async newOrder(_, args, ctx, info) {
        const { input: { item, price, provider, owner: { email } } } = args;
        const userId = getUserId(ctx);
        const user = await ctx.db.user({ id: userId });

        if (user.email !== email) throw new Error('User does not exist');

        // to do fix create order to take an 
        // array of items
        return ctx.db.createOrder({
            item,
            price,
            provider,
            owner: {
                connect: { email }
            }
        }, info);
    },
    async updateOrder(_, { input: { item, price, provider, id } }, ctx: IContext) {
        getUserId(ctx);
        return ctx.db.updateOrder({
            where: {
                id
            },
            data: {
                item,
                price,
                provider
            }
        })
    }
};
