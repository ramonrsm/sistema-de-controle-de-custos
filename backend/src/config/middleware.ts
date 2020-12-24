import { Express, json } from 'express';
import helmet from 'helmet';

export default (app: Express) => {
    app.use(helmet());
    app.use(json());
    console.log('Middlewares importados.');    
}