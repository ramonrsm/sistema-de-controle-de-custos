import { celebrate, Segments, Joi } from "celebrate";

export interface IMovimentacao {
    id: string
    funcionario_id: string,
    descricao: string,
    valor: number
}

export interface ICadastroMovimentacao {
    funcionario_id: string,
    descricao: string,
    valor: number
}

export default { 
    validarCadastroMovimentacao: celebrate({
        [Segments.BODY]: Joi.object().keys({
            funcionario_id: Joi.string().uuid().required(),
            descricao: Joi.string().required().min(5).max(500),
            valor: Joi.number().positive().less(100000).precision(2).required()
        })
    }),
    validarBuscarMovimentacoes: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number()
        })
    })
 }