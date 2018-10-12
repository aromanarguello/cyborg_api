import { Prisma } from '../../generated/prisma-ts';

export interface IContext {
    db: Prisma
    request: any
}
