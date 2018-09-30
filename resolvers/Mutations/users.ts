export const userMutations = {
    createUser(_, args, context) {
        return context.prisma.createUser(
            {
                firstName: args.firstName,
                lastName: args.lastName,
                middleName: args.middleName,
                email: args.email,
            },
        );
    },
};