import { IContext } from '../Types/context';

export const orderMutations = {
    newOrder(_, args, ctx: IContext) {
        const { item, price, provider, owner: { email } } = args;
        return ctx.db.createOrder({
            item,
            price,
            provider,
            owner: { connect: { email} }
        });
    }
};
