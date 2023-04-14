import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from '../../domain/todo/todo.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // 使用するデータベースの種類
  host: 'localhost', // データベースのホスト
  port: 5432, // データベースのポート
  username: 'your_username', // データベースへの接続に使用するユーザー名
  password: 'your_password', // データベースへの接続に使用するパスワード
  database: 'your_database', // 使用するデータベースの名前
  entities: [Todo], // 使用するエンティティの配列
  synchronize: true, // 開発中はtrueに設定して、自動的にデータベースと同期させる
};
