import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Funcionarios {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        length: 200
    })
    nome: string;
}