import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import Movimentacao from './mMovimentacao';

@Entity()
export default class Funcionarios {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        length: 200
    })
    nome: string;

    @OneToMany(type => Movimentacao, movimentacao => movimentacao.funcionario.id)
    @JoinColumn({ name: 'funcionario_id' })
    movimentacoes: Movimentacao[];
}