import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export const signup = {
    async signup(_, args, ctx) {
        const hashedPassword = await hash(args.password, 10);

        const newUser = await ctx.db.createUser(
            {
                firstName: args.firstName,
                lastName: args.lastName,
                middleName: args.middleName,
                email: args.email,
                role: args.role,
                password: hashedPassword
            }
        );

        return {
            token: sign({userId: newUser.id}, process.env.SIGNUP_SECRET),
            newUser
        };
    }
};
