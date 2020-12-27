import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { ICadastroDepartamento } from '../validators/vDepartamento';
import mDepartamento from '../models/mDepartamento';

import mDepartamentos from '../models/mDepartamento';

import { BadRequest, ServerError } from '../utils/RequestResponse';

export default {
    criarDepartamento: async (request: Request, response: Response) => {

        try {

            const { nome }: ICadastroDepartamento = request.body;

            const departamentoRepository = getRepository(mDepartamentos);

            const departamentoCadastrado = await departamentoRepository.findOne({ where: { nome: nome.toUpperCase() } });

            if (departamentoCadastrado) {
                return BadRequest({ body: request.body }, response, `O departamento "${nome}" já está cadastrado.`);
            }

            const DepartamentoRepository = getRepository(mDepartamento);

            const Departamento = DepartamentoRepository.create({
                nome: nome.toUpperCase()
            });

            const novoDepartamento = await DepartamentoRepository.save(Departamento);

            return response.status(201).json(novoDepartamento);

        } catch (error) {
            console.log('criarDepartamento', 'Body:', request.body, 'Erro:', error);
            return ServerError(response);
        }
    }
}