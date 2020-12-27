import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import Funcionario from './mFuncionario';
import Departamento from './mDepartamento';

@Entity()
export default class FuncionarioDepartamento {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(type => Funcionario, funcionario => funcionario.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'funcionario_id' })
    funcionario_id: string;

    @OneToOne(type => Departamento, departamento => departamento.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'departamento_id' })
    departamento_id: string;
}