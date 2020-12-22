import app from './src/config/app';
import database from './src/config/database';

const porta = 4000;

app.post('/', (request, response) => response.json(request.body));

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
    database.conectar();
});
