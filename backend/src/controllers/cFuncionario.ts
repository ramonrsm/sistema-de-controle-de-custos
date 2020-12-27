import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { ICadastroFuncionario } from '../validators/vFuncionario';
import mFuncionario from '../models/mFuncionario';

import mDepartamentos from '../models/mDepartamento';
import mFuncionarioDepartamento from '../models/mFuncionarioDepartamento';

import { BadRequest, ServerError, Success, NoContent } from '../utils/RequestResponse';

export default {
    criarFuncionario: async (request: Request, response: Response) => {

        try {

            const { nome, departamentos }: ICadastroFuncionario = request.body;

            const departamentoRepository = getRepository(mDepartamentos);

            for (const departamento of departamentos) {

                const departamentoCadastrado = await departamentoRepository.findOne(departamento.id, { where: { nome: departamento.nome } });

                if (!departamentoCadastrado) {
                    return BadRequest(response, `O departamento "${departamento.nome}" não foi encontrado.`, { body: request.body });
                }
            }

            const funcionarioRepository = getRepository(mFuncionario);

            const funcionario = funcionarioRepository.create({
                nome
            });

            const novoFuncionario = await funcionarioRepository.save(funcionario);

            const funcionarioDepartamentoRepository = getRepository(mFuncionarioDepartamento);

            for (const departamento of departamentos) {

                const funcionarioDepartamento = funcionarioDepartamentoRepository.create({
                    funcionario_id: novoFuncionario.id,
                    departamento_id: departamento.id
                });

                await funcionarioDepartamentoRepository.save(funcionarioDepartamento);
            }

            return Success(response, novoFuncionario);

        } catch (error) {
            console.log('criarFuncionario', 'Body:', request.body, 'Erro:', error);
            return ServerError(response);
        }
    },
    buscarFuncionarios: async (request: Request, response: Response) => {

        try {

            const { page } = request.query;

            const quantidadeDeRegistros = 10;

            let quantidadePularRegistros = 0;

            if(page) {
                quantidadePularRegistros = (parseInt(page.toString()) * quantidadeDeRegistros) - quantidadeDeRegistros;
            }

            const funcionarioRepository = getRepository(mFuncionario);

            const funcionarios = await funcionarioRepository.find({ take: quantidadeDeRegistros, skip: quantidadePularRegistros, order: { nome: 'ASC' } });

            if(funcionarios.length === 0) {
                return NoContent(response);
            }

            return Success(response, funcionarios)

        } catch (error) {
            console.log('buscarFuncionarios', 'Erro:', error.message);
            return ServerError(response);
        }
    }
}