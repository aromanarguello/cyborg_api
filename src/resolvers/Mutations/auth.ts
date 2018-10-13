import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { IContext } from '../Types/context';

export const auth = {
    async signup(_, args, ctx: IContext) {
        const hashedPassword = await hash(args.password, 10);
        const user = await ctx.db.createUser(
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
            token: sign({ userId: user.id }, process.env.CREDENTIALS_SECRET),
            user
        };
    },
    async login(_, { email, password }, ctx: IContext) {
        const user = await ctx.db.user({ email });
        if (!user) throw new Error(`Email: ${email}, does not exist`);
        const valid = await compare(password, user.password);
        if (!valid) throw new Error('Invalid Password');

        return {
            token: sign({ userId: user.id }, process.env.CREDENTIALS_SECRET),
            user
        };
    }
};
