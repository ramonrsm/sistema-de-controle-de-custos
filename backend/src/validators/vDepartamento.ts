import { celebrate, Segments, Joi } from "celebrate";

export interface IDepartamento {
    id: string
    nome: string
}

export interface ICadastroDepartamento {
    nome: string
}

export default { 
    validarCadastroDepartamento: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required().min(2).max(100)
        })
    }),
    buscarDepartamentos: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number()
        })
    })
 }