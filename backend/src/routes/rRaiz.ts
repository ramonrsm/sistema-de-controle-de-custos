import { Router, Request, Response } from 'express';

const raizRoute = Router();

raizRoute.get('/', (request: Request, response: Response) => {
    const nome = request.query.nome || '';
    return response.json({
        mensagem: `Bem-vindo ${nome ? `${nome} ao` : 'ao'} Sistema De Controle De Custos API.`
    });
});

export default raizRoute;