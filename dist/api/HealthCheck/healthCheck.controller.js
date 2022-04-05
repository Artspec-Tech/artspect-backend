"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class HealthCheckController {
    constructor() {
        this.path = '/healthcheck';
        this.router = (0, express_1.Router)();
        this.getHealthCheck = (request, response) => {
            response.send('OK');
        };
        this.postHealthCheck = (request, response) => {
            console.log(request.body);
            response.send(request.body);
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router
            .get(this.path, this.getHealthCheck)
            .post(this.path, this.postHealthCheck);
    }
}
exports.default = HealthCheckController;
