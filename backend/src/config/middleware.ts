import { Express, json } from 'express';
import helmet from 'helmet';
import cors from 'cors';

export default (app: Express) => {
    app.use(helmet());
    app.use(json());
    app.use(cors());
    console.log('Middlewares importados.');    
}