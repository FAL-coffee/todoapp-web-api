export const appConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  cqrsOptions: {
    origin: process.env.CQRS_ORIGIN || 'http://localhost:3000',
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME || 'rootuser',
    password: process.env.DB_PASSWORD || 'passw0rd',
    name: process.env.DB_NAME || 'todoapp',
  },
});
