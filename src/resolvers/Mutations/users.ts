export const userMutations = {
    createUser(_, args, ctx) {
        return ctx.db.createUser(
            {
                firstName: args.firstName,
                lastName: args.lastName,
                middleName: args.middleName,
                email: args.email,
                password: args.password,
                role: args.role
            }
        );
    }
};
