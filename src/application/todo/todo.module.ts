import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from '../../domain/todo/todo.service';
// import { TodoRepository } from '../../infrastructure/orm/todo/todo.repository';
import { Todo } from '../../domain/todo/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])], // TodoRepositoryをDIする
  exports: [TypeOrmModule],
  controllers: [TodoController],
  providers: [TodoService], // TodoServiceをプロバイダーに追加する
})
export class TodoModule {}
