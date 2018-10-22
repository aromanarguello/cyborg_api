import { getUserId } from '../../utils';
import { IContext } from '../Types/context';

export const userMutations = {
    async updateUserRole(_, { newRole }, ctx: IContext) {
        const userId = getUserId(ctx);
        const { role } = await ctx.db.user({ id: userId});

        if (role  === 'Admin') {
            const user = await ctx.db.updateUser({
                where: {
                    id: userId
                },
                data: {
                    role: newRole
                }
            });
                return user;
        } else throw new Error('Not Authorized!');
    }
};
