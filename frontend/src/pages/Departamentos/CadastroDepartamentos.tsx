import { useState } from "react";
import axios from "../../config/axios";

function CadastroDepartamentos() {

    const [salvoComSucesso, setSalvoComSucesso] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [nomeDepartamento, setNomeDepartamento] = useState("");

    async function salvarDepartamento(event: React.FormEvent) {
        event.preventDefault();
        setMensagem("");
        setSalvoComSucesso(false);
        
        try {
            await axios.post('/departamentos', { nome: nomeDepartamento });

            setSalvoComSucesso(true);
            setNomeDepartamento("");

        } catch (error) {
            setMensagem(`Falha ao salvar o departamento. Erro: ${error.response.data.message}`);
        } 
    }

    return (
        <div>
            <h1 className="mx-3">Novo Departamentos</h1>
            <hr />
            {
                mensagem && (
                    <div className="my-3 mx-3">
                        <p className="text-danger">{mensagem}</p>
                    </div>
                )
            }
            <form className="container-fluid" onSubmit={event => salvarDepartamento(event)}>
                <div className="form-group">
                  <label htmlFor="">Nome do departamento</label>
                  <input type="text" className="form-control" name="nomeDepartamento" id="nomeDepartamento" aria-describedby="helpId" 
                  placeholder="Ex: TI" onChange={event => setNomeDepartamento(event.target.value)} value={nomeDepartamento} required/>
                  <small id="helpId" className="form-text text-muted">No mínimo 2 caracteres</small>
                </div>
                <button type="submit" className="btn btn-lg btn-success">Salvar</button>
            </form>
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

export default CadastroDepartamentos;