import { verify } from 'jsonwebtoken';

export function getUserId(ctx) {
    const authorization = ctx.request.get('Authorization');
    if (authorization){
        const token = authorization.replace('Bearer', '');
        const verifiedToken: any = verify(token, process.env.CREDENTIALS_SECRET);
        return verifiedToken && verifiedToken.userId;
    }

    throw new AuthError();
}

export class AuthError extends Error {
    constructor() {
        super('Not Authorized');
    }
}
