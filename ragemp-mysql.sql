-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server Version:               10.1.36-MariaDB - mariadb.org binary distribution
-- Server Betriebssystem:        Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Exportiere Datenbank Struktur für tlls
DROP DATABASE IF EXISTS `tlls`;
CREATE DATABASE IF NOT EXISTS `tlls` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tlls`;

-- Exportiere Struktur von Tabelle tlls.accounts
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(35) NOT NULL,
  `password` varchar(256) NOT NULL,
  `money` int(11) NOT NULL DEFAULT '5000',
  `posX` float NOT NULL DEFAULT '5.5',
  `posY` float NOT NULL DEFAULT '5.5',
  `posZ` float NOT NULL DEFAULT '71.5',
  `health` float NOT NULL DEFAULT '100',
  `armour` float NOT NULL DEFAULT '50',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle tlls.accounts: 1 rows
DELETE FROM `accounts`;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` (`id`, `username`, `password`, `money`, `posX`, `posY`, `posZ`, `health`, `armour`) VALUES
	(1, 'Despo', '$2a$10$ZmkM1ByQa3xvQOsUaUonJeF11pL6mMS0YLrmlnsU0YXtxN.z2JJI6', 5000, -819.31, -103.2, 37.57, 100, 0);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle tlls.vehicles
DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE IF NOT EXISTS `vehicles` (
  `id` int(11) DEFAULT NULL,
  `model` char(50) DEFAULT NULL,
  `x` float DEFAULT NULL,
  `y` float DEFAULT NULL,
  `z` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle tlls.vehicles: ~2 rows (ungefähr)
DELETE FROM `vehicles`;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` (`id`, `model`, `x`, `y`, `z`) VALUES
	(0, 'BLISTA', -823.347, -111.292, 37.3981),
	(1, 'DOMINATOR', -831.548, -115.373, 36.8752);
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
