import type { IDishMutation } from './dish-mutation';

export interface IDishApi {
  [key: string]: IDishMutation;
}
