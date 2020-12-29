import {MigrationInterface, QueryRunner} from "typeorm";

export class funcionarioDepartamento1609200623069 implements MigrationInterface {
    name = 'funcionarioDepartamento1609200623069'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `departamentos` (`id` varchar(36) NOT NULL, `nome` varchar(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `funcionarios` (`id` varchar(36) NOT NULL, `nome` varchar(200) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `funcionario_departamento` (`funcionario_id` varchar(255) NOT NULL, `departamento_id` varchar(255) NOT NULL, PRIMARY KEY (`funcionario_id`, `departamento_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `funcionario_departamento` ADD CONSTRAINT `FK_76df2680ab954c086a48925dbbe` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `funcionario_departamento` ADD CONSTRAINT `FK_232f24b414d4685267f4e7d3aab` FOREIGN KEY (`departamento_id`) REFERENCES `departamentos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `funcionario_departamento` DROP FOREIGN KEY `FK_232f24b414d4685267f4e7d3aab`");
        await queryRunner.query("ALTER TABLE `funcionario_departamento` DROP FOREIGN KEY `FK_76df2680ab954c086a48925dbbe`");
        await queryRunner.query("DROP TABLE `funcionario_departamento`");
        await queryRunner.query("DROP TABLE `funcionarios`");
        await queryRunner.query("DROP TABLE `departamentos`");
    }

}
