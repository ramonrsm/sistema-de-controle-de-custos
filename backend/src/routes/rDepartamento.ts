import { Router } from 'express';
import vDepartamento from '../validators/vDepartamento';
import cDepartamento from '../controllers/cDepartamento';

const departamentosRoutes = Router();

departamentosRoutes.post('/departamentos', vDepartamento.validarCadastroDepartamento, cDepartamento.criarDepartamento);

export default departamentosRoutes;