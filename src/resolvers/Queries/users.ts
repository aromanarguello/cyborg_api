export const userQueries = {
    async fetchUsers(_, {}, ctx, info) {
        return ctx.db.users({}, info)
    },
    async fetchUser(_, {email}, ctx, info) {
        await ctx.db.user({email}, info)
    }
}
