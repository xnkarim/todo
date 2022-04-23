import { Store } from 'vuex';
import { getModule } from 'nuxt-property-decorator';

type PublicModule<M> = Omit<M, 'modules' | 'state' | 'getters' | 'mutations' | 'namespaced' | 'actions' | 'context'>;

import TodoStore from './todo';

export let todoStore: PublicModule<TodoStore>;

export const initStore = (store: Store<any>): void => {
  todoStore = getModule(TodoStore, store);
}
