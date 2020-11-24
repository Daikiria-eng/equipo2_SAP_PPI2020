-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2020 a las 21:37:37
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
-- Base de datos: `rank`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `abarrote`
--

CREATE TABLE `abarrote` (
  `codigo` varchar(20) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `Barrio` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `codigo` varchar(20) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `productos` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `domiciliario`
--

CREATE TABLE `domiciliario` (
  `codigo` varchar(20) NOT NULL,
  `abarrote` varchar(10) NOT NULL,
  `Barrio` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `codigo` varchar(20) NOT NULL DEFAULT 'NOT NULL',
  `nombre` varchar(20) NOT NULL DEFAULT 'NOT NULL',
  `marca` varchar(20) NOT NULL DEFAULT 'NOT NULL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `codigo` varchar(20) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `direccion` varchar(20) NOT NULL,
  `Barrio` varchar(40) NOT NULL,
  `contrasena` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `abarrote`
--
ALTER TABLE `abarrote`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `fk_abarrote_domiciliario` (`Barrio`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `fk_carrito_productos` (`productos`);

--
-- Indices de la tabla `domiciliario`
--
ALTER TABLE `domiciliario`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `codigo_usuario` (`codigo`,`correo`),
  ADD KEY `Barrio` (`Barrio`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `abarrote`
--
ALTER TABLE `abarrote`
  ADD CONSTRAINT `fk_abarrote_domiciliario` FOREIGN KEY (`Barrio`) REFERENCES `domiciliario` (`codigo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_abarrote_usuario` FOREIGN KEY (`Barrio`) REFERENCES `usuario` (`Barrio`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `fk_carrito_productos` FOREIGN KEY (`productos`) REFERENCES `producto` (`codigo`),
  ADD CONSTRAINT `fk_carrito_usuario` FOREIGN KEY (`codigo`) REFERENCES `usuario` (`codigo`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_domiciliario` FOREIGN KEY (`codigo`) REFERENCES `domiciliario` (`codigo`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
