const env = require('./.env');

export default {
    type: "mysql",
    host: env.DB_CONFIG.host,
    port: env.DB_CONFIG.port,
    username: env.DB_CONFIG.username,
    password: env.DB_CONFIG.password,
    database: env.DB_CONFIG.database,
    synchronize: true,
    logging: false,
    entities: [
        "src/models/**/*.{ts,js}"
    ],
    migrations: [
        "src/migrations/**/*.{ts,js}"
    ],
    cli: {
        migrationsDir: "src/migrations"
    }
}