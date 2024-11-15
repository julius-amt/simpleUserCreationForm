import fs from "fs";
import { ServerResponse } from "http";

export const readFile = (filePath: string): string => {
    return fs.readFileSync(filePath, "utf-8");
};

export const logger = (message: any) => console.log(message);

export const sendMethodNotAllowed = (response: ServerResponse) => {
    response.writeHead(405, { "Content-Type": "text/html" });
    response.write("<h1>Method Not Allowed</h1>");
    response.end();
};
