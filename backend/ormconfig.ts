const env = require('./.env');

module.exports = {
    type: "mysql",
    host: env.DB_CONFIG.host,
    port: env.DB_CONFIG.port,
    username: env.DB_CONFIG.username,
    password: env.DB_CONFIG.password,
    database: env.DB_CONFIG.database,
    synchronize: true,
    logging: false
}