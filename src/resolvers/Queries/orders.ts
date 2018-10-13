export const orderQueries = {
    async fetchOrders(_, {}, ctx, info) {
        return ctx.db.orders({}, info);
    }
};
