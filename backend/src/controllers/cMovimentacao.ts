import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { ICadastroMovimentacao } from '../validators/vMovimentacao';

import mMovimentacao from '../models/mMovimentacao';
import mFuncionario from '../models/mFuncionario';

import { BadRequest, ServerError, Success } from '../utils/HttpResponse';

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
                funcionario_id,
                descricao,
                valor
            });

            const novaMovimentacao = await movimentacaoRepository.save(movimentacao);

            return Success(response, novaMovimentacao);

        } catch (error) {
            console.log('criarMovimentacao', 'Body:', request.body, 'Erro:', error);
            return ServerError(response);
        }
    }
}