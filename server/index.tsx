import Server from './Server';
import * as routes from './routes';
const server = new Server(
  [
    new routes.api.v1.ProjectsRoute()
  ],
  5000,
);

server.listen();
