/** Database connection for Microblog. */
require("dotenv").config();
const { Client } = require("pg");

const { DB_USER, DB_PW } = process.env;
const dbName = "microblog";

const client = new Client(
  process.env.DATABASE_URL ||
    `postgresql://${DB_USER}:${DB_PW}@localhost/${dbName}`
);
client.connect();

module.exports = client;
