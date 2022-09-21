import {ConnectionOptions} from "typeorm";
import dotenv from "dotenv";
import path from "path";
import {Todo} from "./src/entity/Todo";
dotenv.config();

const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
    database: process.env.POSTGRES_DB || "pg_data",
    entities: [Todo],
    // ssl:{rejectUnauthorized:false},
    // migrationsRun: true,
    migrations:[
        path.join(__dirname, "src/db/migrations/**/*.ts")
    ],
    logging: true,
    synchronize: true,
}

export default config;
