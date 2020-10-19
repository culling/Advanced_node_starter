import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
 
class Server {
  public app: express.Application;
  public port: number;
 
  constructor(routes:any, port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.static();
  }
 
  private static(){
    this.app.use(express.static(path.join(__dirname, './../client/build/')));
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeRoutes(routes:any) {
    routes.forEach((route: any) => {
      this.app.use('/', route.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default Server;