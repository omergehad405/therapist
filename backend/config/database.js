module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "aws-0-eu-central-1.pooler.supabase.com"),
      port: env.int("DATABASE_PORT", 6543),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres.aboyoqwycthwusaglnks"),
      password: env("DATABASE_PASSWORD", "*$AJ_hS8MkjV*RF"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});
