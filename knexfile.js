// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },
  production: {
    client: 'sqlite3',
    connection: process.env.DATABASE_URL
  }
};
