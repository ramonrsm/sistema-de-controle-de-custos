import fs from 'fs';
import path from 'path';
import { Express, Request, Response } from 'express';

export default (app: Express) => {

    const pastaDeRotas = fs.existsSync(path.resolve(__dirname, '..', 'routes'));

    const routeFiles = fs.readdirSync(path.resolve(__dirname, '..', 'routes'));

    if (!pastaDeRotas || routeFiles.length == 0) {

        app.get('*', (request: Request, response: Response) => {
            return response.send(`Adicione suas rotas a pasta src/routes`);
        })

        return console.log('Adicione suas rotas a pasta src/routes.');
    }

    let contadorDeRotasImportadas = 0;

    routeFiles.forEach(nomeArquivo => {

        const nomeArquivoFormatado = process.env.NODE_ENV === 'dev' ? nomeArquivo : nomeArquivo.replace('.ts', '.js');

        try {
            const route = require(`../routes/${nomeArquivoFormatado}`);
            app.use(route.default);
            contadorDeRotasImportadas++;
        } catch (error) {
            return console.log(`Falha ao importar rota ${nomeArquivo}: `, error.message);
        }
    });

    console.log(`Rotas importadas ${contadorDeRotasImportadas}.`);
};