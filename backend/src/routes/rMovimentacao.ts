import { Router } from 'express';
import vMovimentacao from '../validators/vMovimentacao';
import mMovimentacao from '../controllers/cMovimentacao';

const movimentacoesRoutes = Router();

movimentacoesRoutes.post('/movimentacoes', vMovimentacao.validarCadastroMovimentacao, mMovimentacao.criarMovimentacao);

export default movimentacoesRoutes;