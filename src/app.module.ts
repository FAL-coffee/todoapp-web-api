import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './infrastructure/orm/typeorm-config';
import { TodoModule } from './application/todo/todo.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TodoModule],
})
export class AppModule {}
