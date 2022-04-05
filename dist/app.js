"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
class App {
    constructor(controllers) {
        this.app = express();
        this.initializeControllers(controllers);
        this.initializeMiddlewares();
    }
    listen() {
        const port = process.env.PORT || 8000;
        this.app.listen(port, () => {
            console.log(`App listening on the port ${port}`);
        });
    }
    getServer() {
        return this.app;
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    }
}
exports.default = App;
