import { createConnection } from 'typeorm';

export default {
    conectar: async () => {

        try {
            console.log("Conectando ao banco de dados...");

            await createConnection();

            console.log('Conectado ao banco de dados com sucesso.');

        } catch (error) {
            console.log("Falha ao conectar ao banco de dados. Erro:", error.message);
        }
    }
}