import IFuncionario from '../Funcionarios/IFuncionario';

export default interface IMovimentacao {
    id: string
    funcionario: IFuncionario,
    descricao: string,
    valor: string,
    created_at: Date
}