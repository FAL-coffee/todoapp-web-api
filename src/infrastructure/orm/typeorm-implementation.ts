import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../../domain/todo/todo.entity';
import { TodoRepository } from '../../domain/todo/todo.repository';
import { TodoService } from '../../domain/todo/todo.service';
import { TodoController } from '../../application/todo/todo.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Todo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TodoRepository]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
