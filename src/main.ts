import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';

async function bootstrap() {
  const config = appConfig();
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port);
}
bootstrap();
