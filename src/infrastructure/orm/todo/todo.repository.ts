import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../../domain/todo/todo.entity';
import { ITodoRepository } from '../../../domain/todo/todo.repository.interface';

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return await this.repository.findOne({ where: { id } });
    // typeormを使い、idに一致するTodoを取得する
    // return await this.repository.findOneByOrFail({ where: { id } });
  }

  async create(todo: Todo): Promise<Todo> {
    return await this.repository.save(todo);
  }

  async update(id: number, todo: Todo): Promise<void> {
    await this.repository.update(id, todo);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
