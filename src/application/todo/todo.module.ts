import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from '../../domain/todo/todo.service';
import { TodoRepository } from '../../domain/todo/todo.repository';
import { Todo } from '../../domain/todo/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, TodoRepository])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
