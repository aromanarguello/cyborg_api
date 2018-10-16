export const orderQueries = {
    async fetchOrders(_, {}, ctx, info) {
        return ctx.db.orders({}, info);
    },
    async fetchOrderById(_, { id }, ctx, info) {
        return ctx.db.order({ id }, info);
    },
    async fetchOrderByUser(_, { email }, ctx, info) {
        return ctx.db.orders({ 
            where: {
                owner: { email }
            }
        }, info);
    }
};
