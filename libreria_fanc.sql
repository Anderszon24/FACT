-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-05-2023 a las 19:07:18
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `libreria_fanc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `Id_libro` int(20) NOT NULL,
  `Titulo_libro` varchar(20) NOT NULL,
  `Autor_libro` varchar(20) NOT NULL,
  `Numero_paginas` int(20) NOT NULL,
  `Editorial` varchar(20) NOT NULL,
  `Cantidad_libro` int(20) NOT NULL,
  `Año_publicación` int(20) NOT NULL,
  `Fecha_publicación` date NOT NULL,
  `Genero_libro` varchar(20) NOT NULL,
  `Estado_libro` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `Id_pedido` int(20) NOT NULL,
  `Fecha_reserva` date NOT NULL,
  `Fecha_pedido` date NOT NULL,
  `Estado_pedido` int(20) NOT NULL,
  `Nombre_usuario` varchar(20) NOT NULL,
  `DNI` varchar(20) NOT NULL,
  `Direccion_correspondencia` varchar(20) NOT NULL,
  `Id_tienda` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `Id_reserva` int(30) NOT NULL,
  `Id_libro` int(20) NOT NULL,
  `Cantidad_libro` int(20) NOT NULL,
  `Fecha_reserva` date NOT NULL,
  `DNI` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjeta`
--

CREATE TABLE `tarjeta` (
  `Numero_tarjeta` int(30) NOT NULL,
  `DNI` varchar(20) NOT NULL,
  `Nombre_propietario` varchar(30) NOT NULL,
  `Fecha_vencimiento` date NOT NULL,
  `CCV` int(20) NOT NULL,
  `Banco` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tienda`
--

CREATE TABLE `tienda` (
  `Id_tienda` int(20) NOT NULL,
  `Ubicacion_tienda` varchar(20) NOT NULL,
  `Estado_tienda` varchar(20) NOT NULL,
  `Numero_telefónico` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `DNI` varchar(12) NOT NULL,
  `Tipo_usuario` int(12) DEFAULT NULL,
  `Nombre_usuario` varchar(20) DEFAULT NULL,
  `Apellido_usuario` varchar(20) DEFAULT NULL,
  `Lugar_nacimiento` varchar(20) DEFAULT NULL,
  `Fecha_nacimiento` date DEFAULT NULL,
  `Correo_electronico` varchar(20) DEFAULT NULL,
  `Dirección_correspondencia` varchar(20) DEFAULT NULL,
  `Id_libro_preferencia` int(20) DEFAULT NULL,
  `Contraseña` varchar(20) DEFAULT NULL,
  `Usuario_login` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`Id_libro`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD KEY `DNI` (`DNI`),
  ADD KEY `Id_tienda` (`Id_tienda`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`Id_reserva`),
  ADD KEY `DNI` (`DNI`),
  ADD KEY `Id_libro` (`Id_libro`);

--
-- Indices de la tabla `tarjeta`
--
ALTER TABLE `tarjeta`
  ADD KEY `DNI` (`DNI`);

--
-- Indices de la tabla `tienda`
--
ALTER TABLE `tienda`
  ADD PRIMARY KEY (`Id_tienda`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`DNI`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`DNI`) REFERENCES `usuario` (`DNI`),
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`Id_tienda`) REFERENCES `tienda` (`Id_tienda`);

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`DNI`) REFERENCES `usuario` (`DNI`),
  ADD CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`Id_libro`) REFERENCES `libro` (`Id_libro`);

--
-- Filtros para la tabla `tarjeta`
--
ALTER TABLE `tarjeta`
  ADD CONSTRAINT `tarjeta_ibfk_1` FOREIGN KEY (`DNI`) REFERENCES `usuario` (`DNI`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
