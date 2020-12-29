import { Switch, Route, RouteComponentProps, Link } from "react-router-dom";
import CadastroFuncionarios from './pages/Funcionarios/CadastroFuncionarios';
import CadastroDepartamentos from './pages/Departamentos/CadastroDepartamentos';
import CadastroMovimentacoes from './pages/Movimentacoes/CadastroMovimentacoes';
import Movimentacoes from "./pages/Movimentacoes/Movimentacoes";

function Routes(props: RouteComponentProps) {

    return (
        <div>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <Link className="nav-link" to="/funcionarios/cadastro">Novo Funcionário</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/departamentos/cadastro">Novo Departamento</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#dropdown" role="button" aria-haspopup="true" aria-expanded="false">Movimentações</a>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/movimentacoes/cadastro">Nova Movimentações</Link>
                        <Link className="dropdown-item" to="/movimentacoes">Movimentações</Link>
                    </div>
                </li>
            </ul>
            <Switch>
                <Route exact path="/funcionarios/cadastro" component={CadastroFuncionarios} />
                <Route exact path="/departamentos/cadastro" component={CadastroDepartamentos} />
                <Route exact path="/movimentacoes/cadastro" component={CadastroMovimentacoes} />
                <Route exact path="/movimentacoes" component={Movimentacoes} />
                <Route path="*" component={Movimentacoes} />
            </Switch>
        </div>
    );
}

export default Routes;