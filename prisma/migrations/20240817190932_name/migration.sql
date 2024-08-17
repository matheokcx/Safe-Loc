-- CreateTable
CREATE TABLE `Logement` (
    `idLogement` INTEGER NOT NULL,
    `idProprietaire` INTEGER NOT NULL,
    `prixJournalier` DOUBLE NOT NULL,
    `description` VARCHAR(191) NULL,
    `titre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idLogement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Avis` (
    `idAvis` INTEGER NOT NULL,
    `texte` VARCHAR(191) NOT NULL,
    `dateAvis` DATETIME(3) NOT NULL,
    `idUtilisateur` INTEGER NOT NULL,
    `idLogement` INTEGER NOT NULL,

    PRIMARY KEY (`idAvis`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reservation` (
    `idReservation` INTEGER NOT NULL,
    `idUtilisateur` INTEGER NOT NULL,
    `montant` DOUBLE NOT NULL,
    `dateDebut` DATETIME(3) NOT NULL,
    `idLogement` INTEGER NOT NULL,

    PRIMARY KEY (`idReservation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Logement` ADD CONSTRAINT `Logement_idProprietaire_fkey` FOREIGN KEY (`idProprietaire`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avis` ADD CONSTRAINT `Avis_idUtilisateur_fkey` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avis` ADD CONSTRAINT `Avis_idLogement_fkey` FOREIGN KEY (`idLogement`) REFERENCES `Logement`(`idLogement`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_idUtilisateur_fkey` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_idLogement_fkey` FOREIGN KEY (`idLogement`) REFERENCES `Logement`(`idLogement`) ON DELETE RESTRICT ON UPDATE CASCADE;
