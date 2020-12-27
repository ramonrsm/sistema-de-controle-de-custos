import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class criacaoDeFuncionarios1608727174948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "departamentos",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "nome",
                    type: "varchar(100)",
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "funcionarios",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "nome",
                    type: "varchar(200)",
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "funcionario_departamento",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "funcionario_id",
                    type: "varchar"
                },
                {
                    name: "departamento_id",
                    type: "varchar"
                }
            ],
            foreignKeys: [
                {
                    name: 'FuncionarioDepartamento',
                    columnNames: ['funcionario_id'],
                    referencedTableName: 'funcionarios',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                {
                    name: 'DepartamentoFuncionario',
                    columnNames: ['departamento_id'],
                    referencedTableName: 'departamentos',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('funcionario_departamento', true);
        await queryRunner.dropTable('funcionarios', true);
        await queryRunner.dropTable('departamentos', true);
    }

}
