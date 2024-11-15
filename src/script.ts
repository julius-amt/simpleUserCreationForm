import http from "http";
import { requestHandler } from "./controllers/requestController";
import { logger } from "./helper";

const PORT = 3000;

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    logger("Server is running on port 3000");
});
