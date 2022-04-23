import { Module, VuexAction, VuexModule, VuexMutation } from 'nuxt-property-decorator';
import { TaskType } from '~/models/Todo';

interface TodoState {
  _tasks: TaskType[]
}

@Module({
  name: 'todo',
  stateFactory: true,
  namespaced: true
})
export default class TodoStore extends VuexModule {
  private _tasks: TodoState['_tasks'] = [];

  @VuexMutation
  _addTask(task: string): void {
    this._tasks = [{ content: task, done: false }, ...this._tasks];
  }

  @VuexMutation
  _removeTask(task: TaskType): void {
    this._tasks.splice(this._tasks.indexOf(task), 1);
  }

  @VuexMutation
  _toggleTask(task: TaskType): void {
    task.done = !task.done;
  }

  @VuexAction
  addTask(task: string): void {
    this._addTask(task);
  }

  @VuexAction
  removeTask(task: TaskType): void {
    this._removeTask(task);
  }

  @VuexAction
  toggleTask(task: TaskType): void {
    this._toggleTask(task);
  }

  get tasks(): TodoState['_tasks'] {
    return this._tasks;
  }
}