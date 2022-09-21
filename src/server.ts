import 'reflect-metadata';
import {createConnection} from "typeorm";
import config from "../ormconfig";
import {getApplication} from "./app";
import process from "process";

const port = process.env.PORT || 8888

const server = (): void => {
    createConnection(config)
        .then(() => {
            console.log(`Please wait for downloading... ⛑️`);
            const app = getApplication();
            app.listen(port, () => {
                console.log(`Server is running on port: ${port} ✔️ 🎉`);
            })
        }).catch((err: any) => {
        console.log(`Hello ...📌... My name is Error, I am here because downloading had gone unsuccessfully... 🚨`, err);
        throw err;
    });
};
server();
