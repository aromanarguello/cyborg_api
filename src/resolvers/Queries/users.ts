export const userQueries = {
    fetchUsers(_, {}, context) {
        return context.prisma.users();
    }
}