import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class criacaoDeFuncionarios1608727174948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "funcionarios",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: "nome",
                    type: "varchar(200)",
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('funcionarios', true);
    }

}
