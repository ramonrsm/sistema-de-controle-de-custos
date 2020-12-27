import { Router } from 'express';
import vFuncionario from '../validators/vFuncionario';
import cFuncionario from '../controllers/cFuncionario';

const funcionariosRoutes = Router();

funcionariosRoutes.post('/funcionarios', vFuncionario.validarCadastroFuncionario, cFuncionario.criarFuncionario);

export default funcionariosRoutes;