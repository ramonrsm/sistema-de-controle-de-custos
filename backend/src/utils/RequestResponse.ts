import { Response } from 'express';

export function BadRequest(data: any, response: Response, message: string) {

    const status = 400;

    return response.status(status).json({
        statusCode: status,
        error: 'Bad Request',
        message,
        data
    })
}

export function ServerError(response: Response) {

    const status = 500;

    return response.status(status).json({
        statusCode: status,
        error: 'Server Error',
        message: 'Erro interno no servidor.'
    })
}

export default { BadRequest, ServerError }