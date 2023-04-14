import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from '../../domain/todo/todo.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // 使用するデータベースの種類
  host: 'localhost', // データベースのホスト
  port: 5432, // データベースのポート
  username: 'rootuser', // データベースへの接続に使用するユーザー名
  password: 'passw0rd', // データベースへの接続に使用するパスワード
  database: 'todoapp', // 使用するデータベースの名前
  entities: [Todo], // 使用するエンティティの配列
  synchronize: true, // 開発中はtrueに設定して、自動的にデータベースと同期させる
};
