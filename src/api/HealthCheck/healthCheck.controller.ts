import { Request, Response, Router } from 'express';
import { ILogger } from 'src/lib/logger';
import Controller from 'src/interface/controller.interface';

class HealthCheckController implements Controller {
  public path: string = '/healthcheck';
  public router: Router = Router();

  constructor(private log: ILogger) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getHealthCheck);
    this.router.post(this.path, this.postHealthCheck);
  }

  private getHealthCheck = (request: Request, response: Response) => {
    this.log.info('OK');
    response.send('OK');
  };

  private postHealthCheck = (request: Request, response: Response) => {
    console.log(request.body);
    response.send(request.body);
  };
}

export default HealthCheckController;