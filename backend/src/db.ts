import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "final",
  password: "qwerty",
  port: 5432,
});


export { pool };
