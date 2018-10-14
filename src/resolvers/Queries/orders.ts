export const orderQueries = {
    async fetchOrders(_, {}, ctx, info) {
        return ctx.db.orders({}, info);
    },
    async fetchOrderById(_, { id }, ctx, info) {
        return ctx.db.order({ id }, info);
    }
};
