/* 
Allo Dessert chocolaté
CRB vous propose ses fameuses crêpes chocolat !! Succombez à la tentation !

Allo Dessert fruité
Vous saturez du chocolat et voulez passer à la confiture ? Goûtez à nos fabuleuses crêpes à la fraise !

Allo Dessert sucré
Vous êtes un.e marginal.e et préférez les crêpes aux sucres ? Elles arrivent !!

Allo Cheminée
Besoin de fumée/er ? On vous ramène ce qu'il faut !

Allo To Good to Go
Il arrive fréquemment qu'il y ait des restes en cuisine. On vous propose de vous en apporter, pour éviter que ceux-ci ne partent aux poubelles !

Allo Ubeir Eats
Vous voulez vous commander un fast-food mais avez la flemme d'aller le chercher ? Pas de soucis, on fait le trajet pour vous !

Allo Plonge
Les jours passent et la vaisselle s'accumule ? Votre évier va bientôt trouver sa place parmi les 7 merveilles du monde ? N'ayez crainte ! Nos meilleurs plongeurs arrivent pour toucher le fond de votre évier !

Allo Lavage du pont
Matelots ! Le pont est sale !! Sortez-moi ces balais et lavez-moi ça !!

Allo fond de cale
Après de rudes soirées, vous avez accumulé de multiples bouteilles en verre au fond de la cale ? Notre équipage peut vous la vider en un rien de temps !


Allo Chorée
Avec l'aide d'un ou deux matelots, notre chorée n'aura plus aucun secret pour vous !

Allo Bateau
Vous avez besoin d'un bateau pour faire un trajet sur Bordeaux ? Nous vous proposons nos meilleurs navires à 4 roues pour réaliser votre trajet !

Allo Casse-Dalle
La nuit passe et la faim se fait sentir dans les cabines. Nos équipes de nuit peuvent vous apporter un croque-monsieur pour combler ce petit creux ! (hallal ou végé)

Allo vedette d'urgence
Une fin de soirée assez rude ? Des difficultés à marcher ? Pas de soucis, nous assurons des navettes entre l'Enseirb et le tram, ainsi qu'aux alentours de Victoire, pour des trajets courts !

Allo Téléphone Bleu
Vous avez besoin d'une douce voix masculine avec laquelle discuter ? Tentez notre téléphone bleu !

Allo Spécial
Vous souhaitez adresser une demande spéciale à l'équipage ? Obtenez une ligne directe avec l'équipage !! (L'équipage n'a aucune obligation devant votre demande)

Num tél associé:
Victoire: 07 78 17 63 27
Pép'eirb: 07 64 07 42 77
Bastien T: 06 19 21 97 31

Allo Débarrassage de cabine
CRB viendra pour vider vos (nombreuses) poubelles !

Allo changement de cabine
Vous avez un changement de cabine dans peu de temps, mais vous manquez de bras pour bouger vos meubles ? Nous serons ravis de vous prêter main forte !

Allo roulade
Tu roules, je roule.

*/

SET NAMES utf8mb4;

INSERT INTO `qg` (`id`, `name`, `address`, `phone`, `status`, `longitude`, `latitude`, `createdAt`, `updatedAt`) VALUES
(1,    'Harmony of the sea',    '58 Rue Babin, 33000 Bordeaux',    '0764074277',    'available',    -0.598078,    44.8217,    '2023-02-17 16:01:24',    '2023-02-17 16:01:24'),
(2,    'Anthem of the sea',    '18 Av. de Villemejan, 33600 Pessac',    '0619219731',    'available',    -0.607762,    44.7979,    '2023-02-17 16:02:40',    '2023-02-17 16:02:40'),
(3,    'Wonder of the sea',    '3 Imp. Roul, 33400 Talence ',    '0778177815',    'available',    -0.59361,    44.8063,    '2023-02-17 16:03:47',    '2023-02-17 16:03:47'),
(4,    'Symphony of the sea',    '165 Cr de la Somme, 33800 Bordeaux',    '0778176327',    'available',    -0.57268,    44.8244,    '2023-02-17 16:04:53',    '2023-02-17 16:04:53');

insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Dessert chocolaté', 'CRB vous propose ses fameuses crêpes chocolat !! Succombez à la tentation !', 0.1, 'crepe_chocolat.jpg', NOW(), NOW(), 20);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Dessert fruité', 'Vous saturez du chocolat et voulez passer à la confiture ? Goûtez à nos fabuleuses crêpes à la fraise !', 0.1, 'crepe_fraise.jpg', NOW(), NOW(), 20);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Dessert sucré', 'Vous êtes un.e marginal.e et préférez les crêpes aux sucres ? Elles arrivent !!', 0.1, 'crepe_sucre.jpg', NOW(), NOW(), 20);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Casse-Dalle', 'La nuit passe et la faim se fait sentir dans les cabines. Nos équipes de nuit peuvent vous apporter un croque-monsieur pour combler ce petit creux ! (hallal ou végé)', 1, 'casse_dalle.jpg', NOW(), NOW(), 5);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo To Good to Go', 'Il arrive fréquemment qu''il y ait des restes en cuisine. On vous propose de vous en apporter, pour éviter que ceux-ci ne partent aux poubelles !', 0, 'restes.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Ubeir Eats', 'Vous voulez vous commander un fast-food mais avez la flemme d''aller le chercher ? Pas de soucis, on fait le trajet pour vous !', 0, 'ubeir_eats.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Plonge', 'Les jours passent et la vaisselle s''accumule ? Votre évier va bientôt trouver sa place parmi les 7 merveilles du monde ? N''ayez crainte ! Nos meilleurs plongeurs arrivent pour toucher le fond de votre évier !', 0, 'plonge.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Lavage du pont', 'Matelots ! Le pont est sale !! Sortez-moi ces balais et lavez-moi ça !!', 0, 'lavage_pont.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo fond de cale', 'Après de rudes soirées, vous avez accumulé de multiples bouteilles en verre au fond de la cale ? Notre équipage peut vous la vider en un rien de temps !', 0, 'fond_cale.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Chorée', 'Avec l''aide d''un ou deux matelots, notre chorée n''aura plus aucun secret pour vous !', 0, 'choree.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Bateau', 'Vous avez besoin d''un bateau pour faire un trajet sur Bordeaux ? Nous vous proposons nos meilleurs navires à 4 roues pour réaliser votre trajet !', 0, 'bateau.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo vedette d''urgence', 'Une fin de soirée assez rude ? Des difficultés à marcher ? Pas de soucis, nous assurons des navettes entre l''Enseirb et le tram, pour des trajets courts !', 0, 'vedette_urgence.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Téléphone Bleu', 'Vous avez besoin d''une douce voix masculine avec laquelle discuter ? Tentez notre téléphone bleu !', 0, 'telephone_bleu.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Débarrassage de cabine', 'CRB viendra pour vider vos (nombreuses) poubelles !', 0, 'debarrassage_cabine.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo changement de cabine', 'Vous avez un changement de cabine dans peu de temps, mais vous manquez de bras pour bouger vos meubles ? Nous serons ravis de vous prêter main forte !', 0, 'changement_cabine.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo roulade', 'Tu roules, Je roule', 0, 'roulade.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Cheminée', 'Besoin de fumée/er ? On vous ramène ce qu''il faut !', 5.5, 'cheminee.jpg', NOW(), NOW(), 1);
insert into produit (name, description, price, image, createdAt, updatedAt, maxQuantity) values ('Allo Spécial', 
'Vous souhaitez adresser une demande spéciale à l''équipage ? Obtenez une ligne directe avec l''équipage !! (L''équipage n''a aucune obligation devant votre demande) \num tél associé:\nVictoire: 07 78 17 63 27 Pép''eirb: 07 64 07 42 77\nBastien T: 06 19 21 97 31', 0, 'special.jpg', NOW(), NOW(), 1);

insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (1, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (2, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (3, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (4, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (5, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (6, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (7, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (8, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (9, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (10, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (11, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (12, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (13, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (14, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (15, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (16, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (17, 1, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (18, 1, 'available', NOW(), NOW());

insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (1, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (2, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (3, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (4, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (5, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (6, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (7, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (8, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (9, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (10, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (11, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (12, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (13, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (14, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (15, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (16, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (17, 2, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (18, 2, 'available', NOW(), NOW());

insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (1, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (2, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (3, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (4, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (5, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (6, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (7, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (8, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (9, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (10, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (11, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (12, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (13, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (14, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (15, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (16, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (17, 3, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (18, 3, 'available', NOW(), NOW());

insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (1, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (2, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (3, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (4, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (5, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (6, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (7, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (8, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (9, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (10, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (11, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (12, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (13, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (14, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (15, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (16, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (17, 4, 'available', NOW(), NOW());
insert into disponibilite (produitId, qgId, status, createdAt, updatedAt) values (18, 4, 'available', NOW(), NOW());