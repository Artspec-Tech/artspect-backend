import 'dotenv/config';
import HealthCheckController from './api/HealthCheck/healthCheck.controller';
import App from './app';
import { Logger } from './lib/logger';

const log = new Logger(__filename);

const app = new App([new HealthCheckController(log)]);

app.listen();
