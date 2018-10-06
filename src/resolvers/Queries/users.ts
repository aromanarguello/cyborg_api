export const userQueries = {
    fetchUsers(_, {}, ctx, info) {
        return ctx.db.users({}, info);
    }
};
