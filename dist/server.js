"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const healthCheck_controller_1 = require("./api/HealthCheck/healthCheck.controller");
const app_1 = require("./app");
const app = new app_1.default([new healthCheck_controller_1.default()]);
app.listen();
