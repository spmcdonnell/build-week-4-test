// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/guidr-db',
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds'
        }
    }
};
