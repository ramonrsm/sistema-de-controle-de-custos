import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Departamentos {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        length: 100
    })
    nome: string;
}