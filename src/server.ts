import 'dotenv/config';
import HealthCheckController from './api/HealthCheck/healthCheck.controller';
import App from './app';

const app = new App([new HealthCheckController()]);

app.listen();
