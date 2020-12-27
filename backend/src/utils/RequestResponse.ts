import { Response } from 'express';

export function BadRequest(response: Response, message: string, data: any) {

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

export function Created(response: Response, data: any) {

    const status = 201;

    return response.status(status).json({
        statusCode: status,
        data
    })
}

export function Success(response: Response, data: any = "") {

    const status = 200;

    return response.status(status).json({
        statusCode: status,
        data
    })
}

export function NoContent(response: Response) {

    const status = 204;

    return response.status(status).json({
        statusCode: status,
        data: ""
    })
}

export default { BadRequest, ServerError, Created, Success }