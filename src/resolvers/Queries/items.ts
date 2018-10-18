export const itemQueries = {
    async fetchItems(_, {}, ctx, info) {
        return ctx.db.items({}, info);
    }
}