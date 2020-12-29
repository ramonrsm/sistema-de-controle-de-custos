import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { IDepartamento } from "../Departamentos/IDepartamento";

function CadastroFuncionarios() {

    const [salvoComSucesso, setSalvoComSucesso] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [departamentos, setDepartamentos] = useState<Array<IDepartamento>>([]);
    const [departamentosSelecionados, setDepartamentosSelecionados] = useState<Array<IDepartamento>>([]);
    const [nome, setNome] = useState("");

    useEffect(() => {

        axios.get('/departamentos')
            .then(response => {
                const departamentos = response.data.data;
                setDepartamentos(departamentos);
            })
            .catch(error => {
                setMensagem("Falha ao buscar os departamentos.");
            })
    }, []);


    async function salvarFuncionario(event: React.FormEvent) {
        event.preventDefault();
        setMensagem("");
        setSalvoComSucesso(false);

        if (departamentosSelecionados.length === 0) {
            setMensagem("Escolha pelo menos um departamento.");
            return;
        }

        try {
            const movimentacao = {
                nome,
                departamentos,
            }

            await axios.post('/funcionarios', movimentacao);
            setSalvoComSucesso(true);
            setNome("");

        } catch (error) {
            setMensagem("Falha ao salvar funcionário.");
        }
    }

    function listaDeDepartamentos(departamentos: Array<IDepartamento>, onClickDepartamento: Function) {

        return departamentos.map(departamento => {
            return (
                <div key={departamento.id} className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" id={departamento.id} value={departamento.nome}
                            onClick={event => onClickDepartamento(event)} />
                        {departamento.nome}
                    </label>
                </div>
            )
        })
    }

    async function onClickDepartamento(event: any) {
        setMensagem("");

        const target = event.target;

        const novoDepartamento: IDepartamento = {
            id: target.id,
            nome: target.value
        }

        if (!target.checked) {
            const filtrandoDepartamentos = departamentosSelecionados.filter(departamento => departamento.id !== novoDepartamento.id);
            setDepartamentosSelecionados(filtrandoDepartamentos);
            return
        }

        const novaListaDepartamento = [...departamentosSelecionados];

        novaListaDepartamento.push(novoDepartamento);

        setDepartamentosSelecionados(novaListaDepartamento);

    }

    return (
        <div>
            <h1 className="mx-3">Novo Funcionário</h1>
            <hr />
            {
                mensagem && (
                    <div className="my-3 mx-3">
                        <p className="text-danger">{mensagem}</p>
                    </div>
                )
            }
            {
                departamentos.length === 0 && 
                (
                    <div className="container-fluid">
                        <h2>Você deve cadastrar um departamento primeiro.</h2>
                    </div>
                )
            }
            {
                departamentos.length > 0 &&
                (
                    <form className="container-fluid" onSubmit={event => salvarFuncionario(event)}>
                        <div className="form-group">
                            <label htmlFor="">Nome do funcionário</label>
                            <input type="text" className="form-control" name="nomeDepartamento" id="nomeDepartamento" aria-describedby="helpId"
                                onChange={event => setNome(event.target.value)} value={nome} required />
                            <small id="helpId" className="form-text text-muted">No mínimo 2 caracteres</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="solicitante">Escolha os departamentos</label>
                            {listaDeDepartamentos(departamentos, onClickDepartamento)}
                        </div>
                        <button type="submit" className="btn btn-lg btn-success">Salvar</button>
                    </form>
                )
            }
            {
                salvoComSucesso && (
                    <div className="my-3 mx-3">
                        <p className="text-success">Salvo com sucesso!</p>
                    </div>
                )
            }
        </div>
    );
}

export default CadastroFuncionarios;