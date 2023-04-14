import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './infrastructure/orm/typeorm-config';
import { TodoModule } from './application/todo/todo.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    TodoModule,
  ],
  providers: [AppService],
})
export class AppModule {}
