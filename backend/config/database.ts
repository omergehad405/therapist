module.exports = ({ env }) => {
  const dbUrl = env("DATABASE_URL");
  const urlParts = new URL(dbUrl);

  return {
    connection: {
      client: "postgres",
      connection: {
        host: urlParts.hostname,
        port: parseInt(urlParts.port, 10),
        database: urlParts.pathname.substring(1),
        user: urlParts.username,
        password: urlParts.password,
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
        },
      },
      debug: false,
    },
  };
};
