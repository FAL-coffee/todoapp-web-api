import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { NestHttpExceptionFilter } from './common/exception-filter/ExceptionFilter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './infrastructure/orm/typeorm-config';
import { TodoModule } from './application/todo/todo.module';
import { Todo } from './domain/todo/todo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      imports: [ConfigModule],
    }),
    TypeOrmModule.forFeature([Todo]),
    TodoModule,
  ],
  providers: [
    TypeOrmConfigService,
    ConfigService,
    {
      provide: APP_FILTER,
      useClass: NestHttpExceptionFilter,
    },
  ],
  exports: [TypeOrmModule],
})
export class AppModule {}
