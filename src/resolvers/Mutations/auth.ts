import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getUserId } from '../../utils';

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
    },
    async changePassword(_, args, ctx: IContext) {
        let user;
        let emailValid;
        let id;

        try {
            id = getUserId(ctx);
        } catch (error) {
            id = null;
        }

        user = await ctx.db.user({ id });
        emailValid = args.email === user.email ? true : false;

        const password = await hash(args.newPassword, 10);
        if (emailValid)
            await ctx.db.updateUser({
                where: { id: user.id },
                data: { password }
            });
        else
            throw new Error('Not Authorized!');
    }
};
