CREATE SCHEMA `lynx` DEFAULT CHARACTER SET utf8mb4 ;


CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(32) NOT NULL,
  `lastName` varchar(32) NOT NULL,
  `haveChildrens` tinyint(1) DEFAULT NULL COMMENT 'If user have childrens',
  `fullAddress` varchar(300) CHARACTER SET utf8mb4 DEFAULT NULL,
  `numberOfChildrens` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `search` (`firstName`,`lastName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;