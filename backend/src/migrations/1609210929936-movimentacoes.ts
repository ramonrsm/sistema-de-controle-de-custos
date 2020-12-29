import {MigrationInterface, QueryRunner} from "typeorm";

export class movimentacoes1609210929936 implements MigrationInterface {
    name = 'movimentacoes1609210929936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `movimentacoes` (`id` varchar(36) NOT NULL, `descricao` varchar(500) NOT NULL, `valor` decimal(8,2) UNSIGNED NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `funcionario_id` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `movimentacoes` ADD CONSTRAINT `FK_3c27fd7885f5779cd0c873e7f32` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `movimentacoes` DROP FOREIGN KEY `FK_3c27fd7885f5779cd0c873e7f32`");
        await queryRunner.query("DROP TABLE `movimentacoes`");
    }

}
