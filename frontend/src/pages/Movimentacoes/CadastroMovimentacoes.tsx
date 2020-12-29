import { useEffect, useState } from "react";
import { RouteComponentProps } from 'react-router-dom';
import axios from "../../config/axios";
import IFuncionario from "../Funcionarios/IFuncionario";

function listaFuncionarios(funcionarios:Array<IFuncionario>) {
    return (
        funcionarios.map(funcionario => {
            return <option key={funcionario.id} value={funcionario.id}>{funcionario.nome}</option>
        })
    )
}

function CadastroMovimentacoes({ history }:RouteComponentProps) {

    const [mensagem, setMensagem] = useState("");
    const [funcionarios, setFuncionarios] = useState<Array<IFuncionario>>([]);
    const [funcionario_id, setFuncionarioId] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    useEffect(() => {

        axios.get('/funcionarios')
            .then(response => {

                const funcionarios = response.data.data;

                setFuncionarios(funcionarios);
                
                if(funcionarios.length > 0) {
                    setFuncionarioId(funcionarios[0].id);
                }
            })
            .catch(error => {
                setMensagem("Falha ao salvar a movimentação.");
            })
    }, []);

    async function salvarMovimentacao(event: React.FormEvent) {
        event.preventDefault();
        setMensagem("");
        
        try {
            const movimentacao = {
                funcionario_id,
                descricao,
                valor: parseFloat(valor)
            }

            await axios.post('/movimentacoes', movimentacao);

            history.push('/movimentacoes');

        } catch (error) {
            setMensagem("Falha ao salvar a movimentação.");
        }     
    }

    return (
        <div>
            <h1 className="mx-3">Nova Movimentação</h1>
            <hr />
            {
                mensagem && (
                    <div className="my-3 mx-3">
                        <p className="text-danger">{mensagem}</p>
                    </div>
                )
            }
            <form className="container-fluid" onSubmit={event => salvarMovimentacao(event)}>
                <div className="form-group">
                  <label htmlFor="solicitante">Solicitante</label>
                  <select className="form-control" name="solicitante" id="solicitante" onChange={event => setFuncionarioId(event.target.value)} value={funcionario_id} required>
                    {listaFuncionarios(funcionarios)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="descricao">Descrição</label>
                  <textarea className="form-control" name="descricao" id="descricao" rows={3} maxLength={500} onChange={event => setDescricao(event.target.value)} required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="valor"></label>
                  <input type="number" className="form-control" name="valor" id="valor" placeholder="0.00" step="0.01" min="0.01" max="99999.99" onChange={event => setValor(event.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-lg btn-success">Salvar</button>
            </form>
        </div>
    );
}

export default CadastroMovimentacoes;