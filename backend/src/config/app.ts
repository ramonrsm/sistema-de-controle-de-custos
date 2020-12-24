import express from 'express';
import middlewares from './middleware';
import routes from './routes';
import celebrateErros from './celebrateErros';

const app = express();

middlewares(app);
routes(app);
celebrateErros(app);

export default app;