import dayjs from "dayjs";
import axios from '../../config/axios';
import { useEffect, useState } from "react";

interface IFuncionario {
    id: string,
    nome: string
}

interface IMovimentacao {
    id: string
    funcionario: IFuncionario,
    descricao: string,
    valor: string,
    created_at: Date
}

function listaMovimentacao(movimentacoes: Array<IMovimentacao>) {

    return (
        movimentacoes.map(movimentacao => {

            const valor = parseFloat(movimentacao.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            return (
                <tr key={movimentacao.id}>
                    <td>{movimentacao.funcionario.nome}</td>
                    <td>{movimentacao.descricao}</td>
                    <td>{valor}</td>
                    <td>{dayjs(movimentacao.created_at).format('DD/MM/YYYY hh:mm')}</td>
                </tr>
            )
        })
    );
}

function Movimentacoes() {

    const [mensagem, setMensagem] = useState("")
    const [movimentacoes, setMovimentacoes] = useState<Array<IMovimentacao>>([]);

    useEffect(() => {

        axios.get('/movimentacoes')
            .then(response => {
                setMovimentacoes(response.data.data);
            })
            .catch(error => {
                setMensagem("Falha ao carregar as movimentações.");
            })
    }, []);

    return (
        <div>
            <h1 className="mx-3">Movimentações</h1>
            <hr />
            <div className="ml-3">
                <button type="button" className="btn btn-primary text-uppercase font-weight-bold">Nova movimentação</button>
            </div>
            {
                mensagem && (
                    <div className="my-3 mx-3">
                        <p className="text-danger">{mensagem}</p>
                    </div>
                )
            }
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">Funcionário</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Data</th>
                    </tr>
                </thead>
                <tbody>
                    {listaMovimentacao(movimentacoes)}
                </tbody>
            </table>
        </div>
    );
}

export default Movimentacoes;