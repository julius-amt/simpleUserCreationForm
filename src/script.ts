import http, { IncomingMessage, ServerResponse } from "http";
import { readFile } from "./helper";
import path from "path";

const PORT = 3000;

const requestHandler = (request: IncomingMessage, response: ServerResponse) => {
    const { url, method } = request;
    response.writeHead(200, { "Content-Type": "text/html" });
    console.info(`${new Date().toISOString()} - ${method} ${url}`);

    switch (url) {
        case "/":
            const pathToGreetingsFile = path.resolve(
                __dirname,
                "view",
                "greetings.html"
            );
            const greet = readFile(pathToGreetingsFile);

            response.write(greet);
            break;
        case "/users":
            const pathToUsersFile = path.resolve(
                __dirname,
                "view",
                "users.html"
            );
            const users = readFile(pathToUsersFile);

            response.write(users);
            break;
        default:
            const pathToErrorFile = path.resolve(__dirname, "view", "404.html");
            const error = readFile(pathToErrorFile);

            response.write(error);
    }
    response.end();
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
