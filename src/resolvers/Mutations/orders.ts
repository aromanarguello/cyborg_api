import { getUserId } from '../../utils';
import { IContext } from '../Types/context';

export const orderMutations = {
    async newOrder(_, args, ctx: IContext) {
        const { input: { item, price, provider, owner: { email } } } = args;
        const userId = getUserId(ctx);
        const user = await ctx.db.user({ id: userId });

        if (user.email !== email) throw new Error('User does not exist');

        return ctx.db.createOrder({
            item,
            price,
            provider,
            owner: {
                connect: { email }
            }
        });
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
