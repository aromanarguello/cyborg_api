import { getUserId } from '../../utils';
import { IContext } from '../Types/context';

export const orderMutations = {
    async newOrder(_, args, ctx: IContext) {
        const { item, price, provider, owner: { email } } = args;
        const userId = getUserId(ctx);

        const user = await ctx.db.user({ id: userId });

        const argsEmail = email;

        if (user.email !== argsEmail) throw new Error('Email does not exist');

        return ctx.db.createOrder({
            item,
            price,
            provider,
            owner: { connect: { email } }
        });
    }
};
