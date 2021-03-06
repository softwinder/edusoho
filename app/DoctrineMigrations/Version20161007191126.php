<?php

namespace Application\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20161007191126 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql("ALTER TABLE course_review ADD `parentId` int(10) NOT NULL DEFAULT '0 'COMMENT '回复ID';");
        $this->addSql("ALTER TABLE course_review ADD `updatedTime` int(10) ;");

        $this->addSql("ALTER TABLE classroom_review ADD `parentId` int(10) NOT NULL DEFAULT '0' COMMENT '回复ID';");
        $this->addSql("ALTER TABLE classroom_review ADD `updatedTime` int(10) ;");
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
