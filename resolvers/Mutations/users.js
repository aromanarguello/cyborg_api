export const userMutations = {
    createUser(root, args, context) {
    return context.prisma.createUser(
        { name: args.name },
        )
    }
}