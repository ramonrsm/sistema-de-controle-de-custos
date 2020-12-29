import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import Funcionario from './mFuncionario';

@Entity()
export default class Movimentacoes {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(type => Funcionario, funcionario => funcionario.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'funcionario_id' })
    funcionario: Funcionario;

    @Column({ length: 500 })
    descricao: string

    @Column("decimal", { unsigned: true, precision: 8, scale: 2, nullable: false })
    valor: number

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date
}