import { Switch, Route } from "react-router-dom";
import CadastroFuncionarios from './pages/Funcionarios/CadastroFuncionarios';
import CadastroDepartamentos from './pages/Departamentos/CadastroDepartamentos';
import CadastroMovimentacoes from './pages/Movimentacoes/CadastroMovimentacoes';
import Movimentacoes from "./pages/Movimentacoes/Movimentacoes";

function Routes() {
    return (
        <Switch>
            <Route exact path="/funcionarios/cadastro" component={CadastroFuncionarios} />
            <Route exact path="/departamentos/cadastro" component={CadastroDepartamentos} />
            <Route exact path="/movimentacoes/cadastro" component={CadastroMovimentacoes} />
            <Route exact path="/movimentacoes" component={Movimentacoes} />
            <Route path="*" component={Movimentacoes} />
        </Switch>
    );
}

export default Routes;