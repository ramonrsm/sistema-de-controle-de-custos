import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { ICadastroDepartamento } from '../validators/vDepartamento';

import mDepartamento from '../models/mDepartamento';
import mDepartamentos from '../models/mDepartamento';

import { BadRequest, ServerError, Created, Success, NoContent } from '../utils/RequestResponse';

export default {
    criarDepartamento: async (request: Request, response: Response) => {

        try {

            const { nome }: ICadastroDepartamento = request.body;

            const departamentoRepository = getRepository(mDepartamentos);

            const departamentoCadastrado = await departamentoRepository.findOne({ where: { nome: nome.toUpperCase() } });

            if (departamentoCadastrado) {
                return BadRequest(response, `O departamento "${nome}" já está cadastrado.`, { body: request.body });
            }

            const DepartamentoRepository = getRepository(mDepartamento);

            const Departamento = DepartamentoRepository.create({
                nome: nome.toUpperCase()
            });

            const novoDepartamento = await DepartamentoRepository.save(Departamento);

            return Created(response, novoDepartamento);

        } catch (error) {
            console.log('criarDepartamento', 'Body:', request.body, 'Erro:', error);
            return ServerError(response);
        }
    },
    buscarDepartamentos: async (request: Request, response: Response) => {

        try {

            const { page } = request.query;

            const quantidadeDeRegistros = 10;

            let quantidadePularRegistros = 0;

            if(page) {
                quantidadePularRegistros = (parseInt(page.toString()) * quantidadeDeRegistros) - quantidadeDeRegistros;
            }

            const departamentoRepository = getRepository(mDepartamento);

            const departamentos = await departamentoRepository.find({ take: quantidadeDeRegistros, skip: quantidadePularRegistros, order: { nome: 'ASC' } });

            if(departamentos.length === 0) {
                return NoContent(response);
            }

            return Success(response, departamentos)

        } catch (error) {
            console.log('buscarDepartamentos', 'Erro:', error.message);
            return ServerError(response);
        }
    }
}