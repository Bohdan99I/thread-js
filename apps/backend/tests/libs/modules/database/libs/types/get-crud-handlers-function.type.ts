import { type Knex } from 'knex';

import { type CountParameters } from './count-parameters.type.js';
import { type InsertParameters } from './insert-parameters.type.js';
import { type RemoveParameters } from './remove-parameters.type.js';
import { type SelectParameters } from './select-parameters.type.js';
import { type UpdateParameters } from './update-parameters.type.js';

type GetCrudHandlersFunction = (_getKnex: () => Knex) => {
  count: <T extends Record<string, unknown>, K extends Record<string, unknown>>(
    _parameters: CountParameters<T, K>
  ) => Promise<number>;
  insert: <T extends Record<string, unknown>, K extends T>(
    _parameters: InsertParameters<T>
  ) => Promise<K[]>;
  rawQuery: <T extends Record<string, unknown>>(_query: string) => Promise<T[]>;
  remove: <T extends Record<string, unknown>>(
    _parameters: RemoveParameters<T>
  ) => Promise<Record<string, unknown>[]>;
  select: <
    T extends Record<string, unknown>,
    K extends Record<string, unknown> = T
  >(
    _parameters: SelectParameters<T, K>
  ) => Promise<T | T[]>;
  update: <T extends Record<string, unknown>>(
    _parameters: UpdateParameters<T>
  ) => Promise<Record<string, unknown>[]>;
};

export { type GetCrudHandlersFunction };
