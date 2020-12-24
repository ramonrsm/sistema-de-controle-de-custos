import { Express } from 'express';
import celebrate from 'celebrate';

export default (app: Express) => {
    app.use(celebrate.errors());
}