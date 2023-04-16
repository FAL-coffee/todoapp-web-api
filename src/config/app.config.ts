export const appConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME || 'rootuser',
    password: process.env.DATABASE_PASSWORD || 'passw0rd',
    database: process.env.DATABASE_NAME || 'todoapp',
  },
});
