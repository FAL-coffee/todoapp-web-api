import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from './todo.repository';
import { Todo } from './todo.entity';
import { CreateTodoDto } from '../../application/todo/dto/create-todo.dto';
import { UpdateTodoDto } from '../../application/todo/dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository)
    private todoRepository: TodoRepository,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id });
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.complete = createTodoDto.complete;
    todo.contents = createTodoDto.contents;

    return await this.todoRepository.save(todo);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (updateTodoDto.title) {
      todo.title = updateTodoDto.title;
    }
    if (updateTodoDto.complete !== undefined) {
      todo.complete = updateTodoDto.complete;
    }
    if (updateTodoDto.contents) {
      todo.contents = updateTodoDto.contents;
    }

    return await this.todoRepository.save(todo);
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
