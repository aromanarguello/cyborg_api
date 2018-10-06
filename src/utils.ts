import { prisma } from './generated/prisma-client';

export interface IContext {
    db: prisma,
    request: any,
}
