import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import Funcionario from './mFuncionario';
import Departamento from './mDepartamento';

@Entity()
export default class FuncionarioDepartamento {

    @PrimaryColumn("uuid")
    @ManyToOne(type => Funcionario, funcionario => funcionario.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'funcionario_id' })
    funcionario_id: string;

    @PrimaryColumn("uuid")
    @ManyToOne(type => Departamento, departamento => departamento.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'departamento_id' })
    departamento_id: string;
}