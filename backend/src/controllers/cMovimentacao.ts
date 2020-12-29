import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { ICadastroMovimentacao } from '../validators/vMovimentacao';

import mMovimentacao from '../models/mMovimentacao';
import mFuncionario from '../models/mFuncionario';

import { BadRequest, ServerError, Success, NoContent } from '../utils/HttpResponse';

export default {
    criarMovimentacao: async (request: Request, response: Response) => {

        try {

            const { funcionario_id, descricao, valor }: ICadastroMovimentacao = request.body;

            const funcionarioRepository = getRepository(mFuncionario);

            const funcionarioCadastrado = await funcionarioRepository.findOne(funcionario_id);

            if (!funcionarioCadastrado) {
                return BadRequest(response, `O funcionario com o id "${funcionario_id}" não foi encontrado.`, { body: request.body });
            }

            const movimentacaoRepository = getRepository(mMovimentacao);

            const movimentacao = movimentacaoRepository.create({
                funcionario: { id: funcionario_id },
                descricao,
                valor
            });

            const novaMovimentacao = await movimentacaoRepository.save(movimentacao);

            return Success(response, novaMovimentacao);

        } catch (error) {
            console.log('criarMovimentacao', 'Body:', request.body, 'Erro:', error);
            return ServerError(response);
        }
    },
    buscarMovimentacoes: async (request: Request, response: Response) => {

        try {

            const { page } = request.query;

            const quantidadeDeRegistros = 2;

            let quantidadePularRegistros = 0;

            if (page) {
                quantidadePularRegistros = (parseInt(page.toString()) * quantidadeDeRegistros) - quantidadeDeRegistros;
            }

            const movimentacaoRepository = getRepository(mMovimentacao);

            const movimentacoes = await movimentacaoRepository.find({
                relations: ['funcionario'],
                take: quantidadeDeRegistros, 
                skip: quantidadePularRegistros, 
                order: { created_at: 'DESC' }
            });

            if (movimentacoes.length === 0) {
                return NoContent(response);
            }

            return Success(response, movimentacoes)

        } catch (error) {
            console.log('buscarMovimentacoes', 'Erro:', error);
            return ServerError(response);
        }
    }
}