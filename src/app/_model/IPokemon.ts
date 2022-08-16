import { Type } from './IType';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}
