import { ITypes } from '../../generated/resolvers';

import { IContext } from './context';

export interface ITypeMap extends ITypes {
    Context: IContext,
}
