-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 15 mars 2018 à 22:51
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `chef`
--
CREATE DATABASE IF NOT EXISTS `chef` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `chef`;

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` text NOT NULL,
  `description` text NOT NULL,
  `contenu` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `titre`, `description`, `contenu`) VALUES
(1, 'Chatbotdsqdsq', 'Ceci est un article sur les chatbots', 'test'),
(2, 'NLP or Conversational Interface', 'This article is about the difference between NLP (Natural Language Processing) and Conversational Interface', 'When building a Natural Langage Processing, you authorize your bot to understand the user.\r\n\r\nFor instance, if the users, says \" What is the weather in Paris \" the bot will be able to understand that \"Paris\" is the location, that \"weather\" is what we are looking for.');

-- --------------------------------------------------------

--
-- Structure de la table `article_image`
--

DROP TABLE IF EXISTS `article_image`;
CREATE TABLE IF NOT EXISTS `article_image` (
  `id_article` int(11) NOT NULL,
  `id_image` int(11) NOT NULL,
  KEY `id_article` (`id_article`),
  KEY `id_image` (`id_image`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) CHARACTER SET latin1 NOT NULL,
  `description` longtext CHARACTER SET latin1 NOT NULL,
  `taille` text CHARACTER SET latin1 NOT NULL,
  `type` text CHARACTER SET latin1 NOT NULL,
  `blob` blob NOT NULL,
  `id_projet` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_projet` (`id_projet`),
  KEY `id_utilisateur` (`id_utilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

DROP TABLE IF EXISTS `projet`;
CREATE TABLE IF NOT EXISTS `projet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET latin1 NOT NULL,
  `description` longtext CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id`, `nom`, `description`) VALUES
(1, 'Photo Ben', 'Voici une photo de moi');

-- --------------------------------------------------------

--
-- Structure de la table `projet_tag`
--

DROP TABLE IF EXISTS `projet_tag`;
CREATE TABLE IF NOT EXISTS `projet_tag` (
  `id_projet` int(11) NOT NULL,
  `id_tag` int(11) NOT NULL,
  KEY `id_projet` (`id_projet`),
  KEY `id_tag` (`id_tag`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `tag`
--

DROP TABLE IF EXISTS `tag`;
CREATE TABLE IF NOT EXISTS `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` text CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tag`
--

INSERT INTO `tag` (`id`, `nom`) VALUES
(3, 'Test');

-- --------------------------------------------------------

--
-- Structure de la table `tag_article`
--

DROP TABLE IF EXISTS `tag_article`;
CREATE TABLE IF NOT EXISTS `tag_article` (
  `id_article` int(11) NOT NULL,
  `id_tag` int(11) NOT NULL,
  KEY `id_article` (`id_article`),
  KEY `id_tag` (`id_tag`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` text CHARACTER SET latin1 NOT NULL,
  `prenom` text CHARACTER SET latin1 NOT NULL,
  `email` text CHARACTER SET latin1 NOT NULL,
  `motpasse` text CHARACTER SET latin1 NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `email`, `motpasse`, `role`) VALUES
(1, 'Pradon', 'Ben', 'test@tesst.com', '123456', 0),
(2, 'Pradon', 'Ben', 'test@tesst.com', '123456', 0),
(3, 'Pradon', 'Ben', 'test@tesst.com', '123456', 0),
(4, 'Pradon', 'Ben', 'test@tesst.com', '123456', 0),
(5, 'wayne', 'Bruce', 'bruce@wayne.us', 'batma,', 0),
(6, 'P', 'B', 'test@tesst.com', '123', 0),
(7, 'test', 'test', 'test@tesst.com', '123', 0),
(8, 'B', 'p', 'test@tesst.com', '123', 0),
(9, 'Admin', 'Admin', 'benpradon@gmail.com', '123456', 1),
(10, 'Pradon', 'Ben', 'benpradon@hotmail.fr', '123', 0),
(11, 'Pradon', 'Ben', 'benpradon@hotmail.fr', '1234', 0),
(12, 'Ben', 'Test', 'test@test.com', '123', 0),
(13, 'BB', 'tEST', 'tesst', '1', 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article_image`
--
ALTER TABLE `article_image`
  ADD CONSTRAINT `article_image_ibfk_1` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `article_image_ibfk_2` FOREIGN KEY (`id_image`) REFERENCES `image` (`id`);

--
-- Contraintes pour la table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`id_projet`) REFERENCES `projet` (`id`),
  ADD CONSTRAINT `image_ibfk_2` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id`);

--
-- Contraintes pour la table `projet_tag`
--
ALTER TABLE `projet_tag`
  ADD CONSTRAINT `projet_tag_ibfk_1` FOREIGN KEY (`id_projet`) REFERENCES `projet` (`id`),
  ADD CONSTRAINT `projet_tag_ibfk_2` FOREIGN KEY (`id_tag`) REFERENCES `tag` (`id`);

--
-- Contraintes pour la table `tag_article`
--
ALTER TABLE `tag_article`
  ADD CONSTRAINT `tag_article_ibfk_1` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`),
  ADD CONSTRAINT `tag_article_ibfk_2` FOREIGN KEY (`id_tag`) REFERENCES `tag` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
