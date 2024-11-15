import { IncomingMessage, ServerResponse } from "http";
import { URLSearchParams } from "url";
import { readFile, logger, sendMethodNotAllowed } from "../helper";
import path from "path";

export const requestHandler = (
    request: IncomingMessage,
    response: ServerResponse
) => {
    const { url, method } = request;
    logger(`${new Date().toISOString()} - ${method} ${url}`);

    switch (url) {
        case "/":
            if (method === "GET") {
                const pathToGreetingsFile = path.resolve(
                    __dirname,
                    "..",
                    "views",
                    "greetings.html"
                );
                const greet = readFile(pathToGreetingsFile);
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(greet);
                response.end();
            } else {
                sendMethodNotAllowed(response);
            }
            break;

        case "/users":
            if (method === "GET") {
                const pathToUsersFile = path.resolve(
                    __dirname,
                    "..",
                    "views",
                    "users.html"
                );
                const users = readFile(pathToUsersFile);
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(users);
                response.end();
            } else {
                sendMethodNotAllowed(response);
            }
            break;

        case "/create-user":
            if (method === "POST") {
                request.on("data", (chunk: Buffer) => {
                    const data = chunk.toString();
                    const params = new URLSearchParams(data);

                    // Extract the username from the form data
                    const name = params.get("username");
                    logger(name);

                    // Redirect to / page
                    response.writeHead(302, { Location: "/" });
                    response.end();
                });
            } else {
                sendMethodNotAllowed(response);
            }
            break;

        default:
            const pathToErrorFile = path.resolve(
                __dirname,
                "..",
                "views",
                "404.html"
            );
            const error = readFile(pathToErrorFile);
            response.writeHead(404, { "Content-Type": "text/html" });
            response.write(error);
            response.end();
            logger("404 Not Found");
            break;
    }
};
