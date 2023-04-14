import { Todo } from './todo.entity';

export interface ITodoRepository {
  findAll(): Promise<Todo[]>;
  findOne(id: number): Promise<Todo>;
  create(todo: Partial<Todo>): Promise<Todo>;
  update(id: number, todo: Todo): Promise<void>;
  delete(id: number): Promise<void>;
}
