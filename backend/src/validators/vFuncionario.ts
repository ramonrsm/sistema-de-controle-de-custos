import { celebrate, Segments, Joi } from "celebrate";
import { IDepartamento } from './vDepartamento';

export interface IFuncionario {
    id: string,
    nome: string,
    departamentos: [IDepartamento]
}

export interface ICadastroFuncionario {
    nome: string,
    departamentos: [IDepartamento]
}

export default { 
    validarCadastroFuncionario: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required().min(2).max(200),
            departamentos: Joi.array().items(Joi.object().keys({
                id: Joi.string().uuid().required(),
                nome: Joi.string().required().min(2).max(100).required()
            })).required().min(1)
        })
    }),
    validarBuscarFuncionarios: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number()
        })
    })
 }