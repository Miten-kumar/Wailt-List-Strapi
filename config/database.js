module.exports = ({ env }) => ({

  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '192.168.2.108'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'liquidox-labs-waitlist'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'aspire@123'),
      schema: env('DATABASE_SCHEMA', 'public'), 
      ssl: false
    },
    debug: false,
  },
});