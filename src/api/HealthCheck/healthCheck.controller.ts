import { Request, Response, Router } from 'express';
import Controller from 'src/interface/controller.interface';

class HealthCheckController implements Controller {
  public path: string = '/healthcheck';
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .get(this.path, this.getHealthCheck)
      .post(this.path, this.postHealthCheck);
  }

  private getHealthCheck = (request: Request, response: Response) => {
    response.send('Hello');
  };

  private postHealthCheck = (request: Request, response: Response) => {
    response.send(request.body);
  };
}

export default HealthCheckController;
