import * as express from 'express';
import teamsRouter from './database/routes/TeamsRoutes';
import 'express-async-errors';
import errorMiddleware from './database/middlewares/error';
import matchesRouter from './database/routes/MatchesRoutes';
import loginRouter from './database/routes/LoginRoutes';
import lbRouter from './database/routes/LeaderBoardRoutes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/teams', teamsRouter);
    this.app.use('/matches', matchesRouter);
    this.app.use('/login', loginRouter);
    this.app.use('/leaderboard', lbRouter);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
