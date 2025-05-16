-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Máj 16. 21:00
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `ivonal`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `cities`
--

INSERT INTO `cities` (`id`, `name`, `img_url`, `created_at`, `updated_at`) VALUES
(5, 'Szeged', 'cities/g6MD3JrDQBUxHhHW8bWnZjCBOSXYBDh4txlHiwVB.jpg', '2025-04-16 13:19:08', '2025-04-16 13:19:08'),
(6, 'Budapest', 'cities/JmUBKRd5kubbeJPLvDB4yBYBNppyjEEympVhr6qn.jpg', '2025-04-17 05:16:24', '2025-04-17 05:16:24');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2025_01_31_154446_create_sessions_table', 1),
(2, '2025_01_31_160113_create_cities_table', 1),
(3, '2025_01_31_181516_create_users_table', 1),
(4, '2025_02_01_000000_create_properties_table', 1),
(5, '2025_02_06_084420_create_pictures_table', 1),
(6, '2025_03_03_124919_create_cache_table', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `pictures`
--

CREATE TABLE `pictures` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `pictures`
--

INSERT INTO `pictures` (`id`, `property_id`, `url`, `created_at`, `updated_at`) VALUES
(65, 7, 'properties/omZb8NkIymBIRoLIWqt85kOvhROjSajrKUQaz7KQ.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(66, 7, 'properties/A8bQwz9oDSFee6mZ2SyrSG3fpUigUc0PWfUrfIY4.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(67, 7, 'properties/kpFt4HpuMcS240jMrHwYDeTMY7fIz7DIxDMddUsQ.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(68, 7, 'properties/0Dm9QDZXRowH3485DCymvkQADD5zN1iByMoO1q6B.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(69, 7, 'properties/TpYA3w4TpIQxfblUFkuGmfcfNDKqmggPYST74HLm.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(70, 7, 'properties/xED22VwzyTA8G0lXkyZtQn5LMD67IynaXVgQIcbR.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(71, 7, 'properties/uqlLQr3cPzkOFSXDcAt2YQtJxxQnYpLy8UwvfphU.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(72, 7, 'properties/YckI5OSSFENKZ30k1fiU1JMnuiYXCdvJQlgH2r28.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(73, 7, 'properties/QADPHPTFdoCL8xmfOhENoPdI9ZUDsNMGUx3kVzK3.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(74, 7, 'properties/lV7t8tUq5fRjelJ3MKtjNWjy3xySAzrxDSCaNC04.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(75, 7, 'properties/tDWqXPgk1VbeyRts5iqjoKGIZMMMjqPGkSvEOk9D.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(76, 7, 'properties/jxpYPLbICmBdWSmpdrFSQqFGxeG1FiZQnwr0rGp0.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(77, 7, 'properties/LsnXWJEYpu0ouFaIttQYraxrHym9bJl7MEPK14db.jpg', '2025-04-16 13:23:30', '2025-04-16 13:23:30'),
(78, 8, 'properties/Lu2Oc51xvFuxdmgoa28ApwiZzMfbU7QIbLaYrHVS.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(79, 8, 'properties/PnBAzAcB6TpP2NF7ZvT25RTYIz7XliXFzPfnYr6b.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(80, 8, 'properties/pOpC4HlYHgBWISCx2egz5thV2XlHVHGO3c5Qafrl.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(81, 8, 'properties/hoyzW4Ud9vlUPqXGLds5QTNAL58iwQ8f2DVmZcq2.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(82, 8, 'properties/fgwRBOPLaraH9ErTPB4DcZvFBUcOqO89AcZFc1Z8.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(83, 8, 'properties/rsi99T5lqM5FumlapWq97AuDZmdkuLeUHO7hnv6A.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(84, 8, 'properties/1T1vSyVetk1keA9KqwH81DddCxhg6CKMtGHhrjdm.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(85, 8, 'properties/4WpBc9gRZ1L8ej8MJ3rZaFWBdB27UlVHWTweppmY.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(86, 8, 'properties/rJ805DjlHEvDlxiprLuJbTb48bVG4ntqOqyrafh1.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(87, 8, 'properties/xLvxUeWyS8PFVj9BAgoATW9oFNHR6bJB476aKAZ8.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(88, 8, 'properties/YDfhisOWEZeo58JUZb6T96wfprELHoHIOlfpTM3y.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(89, 8, 'properties/pDnvAZ5thyx5Gy3mCxxWei99dkF8ZLwVS3TDek0z.jpg', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(90, 9, 'properties/ne9zySJGlit082OejFABWlK57g5aYr3oHGMBNxRb.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(91, 9, 'properties/bDGb3uXsrAdUb9QOpZhw3E3ltQuz2h5XRDIuD6cb.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(92, 9, 'properties/IjB1qG6vFhpw3HqcWKFgyTpUVlhxysiVwZWvDXGf.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(93, 9, 'properties/2kqG3pzhfHZxKO03G6kxHjToQWDtQUC2oTaSZc5u.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(94, 9, 'properties/Tf4BnY9DG8M4o6jqCjGg4vCD1uDFEvT24MvdNJxW.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(95, 9, 'properties/YTlfRLrswnqHW6oLh1x2uoi6zMBtiIprxZX8mO0j.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(96, 9, 'properties/c9ugPCnfboHaQzSTgK2WT3OuHFEN4lO1MzySvxAE.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(97, 9, 'properties/1qfmVZyhiMtt5ypGM8sRpyoQUNjEDc1YlMLfVvoh.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(98, 9, 'properties/DaCOTIHUY1WTwc3Nud8gSYqZ57pRDvoj5mVbqo56.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(99, 9, 'properties/1ZEfTmFYohW7auupgdnkYEhYFKkVPuPCPVCGyv96.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(100, 9, 'properties/njxdKPLpCw0HVJOXuc6xUNIuCMj9nU4o7SjILlkY.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(101, 9, 'properties/eHnvnSaIDRY7OOTRNnYSBloOAxDYzh3LQfzKh7LB.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(102, 9, 'properties/lIswSJNTUs4RT4mDCYJDellOMPt3hfJS8PXlYZ5j.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(103, 9, 'properties/1vLlE0Ln8FNcaIzhpl6DplOWQrnhcSOnLPjCdFX6.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29'),
(104, 9, 'properties/78WxMgzWBQYBXKFsvL5wnQoOIK3Rvzzo9EKRErUc.jpg', '2025-04-17 11:37:29', '2025-04-17 11:37:29');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `properties`
--

CREATE TABLE `properties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `city_id` bigint(20) UNSIGNED NOT NULL,
  `street` varchar(255) NOT NULL,
  `latitude` decimal(10,7) DEFAULT NULL,
  `longitude` decimal(10,7) DEFAULT NULL,
  `featured_image` varchar(255) NOT NULL,
  `rental_price` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `sale_price` varchar(255) NOT NULL,
  `minimum_rental_period` varchar(255) NOT NULL,
  `year_built` varchar(255) NOT NULL,
  `building_floors` varchar(255) NOT NULL,
  `floor` varchar(255) NOT NULL,
  `balcony` varchar(255) NOT NULL,
  `furniture` varchar(255) NOT NULL DEFAULT 'igen',
  `appliances` varchar(255) NOT NULL DEFAULT 'igen',
  `view` varchar(255) NOT NULL,
  `heating_type` varchar(255) NOT NULL,
  `parking` varchar(255) NOT NULL,
  `air_conditioning` varchar(255) NOT NULL DEFAULT 'nem',
  `smoking` varchar(255) NOT NULL DEFAULT 'nem',
  `pets` varchar(255) NOT NULL DEFAULT 'nem',
  `elevator` varchar(255) NOT NULL DEFAULT 'nem',
  `is_featured` varchar(255) NOT NULL DEFAULT 'nem',
  `floor_area` varchar(255) NOT NULL,
  `short_description` text NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `properties`
--

INSERT INTO `properties` (`id`, `city_id`, `street`, `latitude`, `longitude`, `featured_image`, `rental_price`, `size`, `sale_price`, `minimum_rental_period`, `year_built`, `building_floors`, `floor`, `balcony`, `furniture`, `appliances`, `view`, `heating_type`, `parking`, `air_conditioning`, `smoking`, `pets`, `elevator`, `is_featured`, `floor_area`, `short_description`, `description`, `created_at`, `updated_at`) VALUES
(7, 5, 'Nemes Takács', 46.2506700, 20.1352700, 'properties/5ysnG0mgOKK4f7trQ4prE33H5rhyrQBSuc3FqPuF.jpg', '160000', '40', '40000000', '5 hónap', '2001-2010 között', '5', '3', '3', 'Igen', 'Igen', 'kertre néző', 'gáz (cirkó)', 'utcán, közterület', 'Igen', 'Nem', 'Nem', 'Van', 'nem', '70', 'Friss, fiatalos, modern. Felújított, berendezett és gépesített, jó beosztású egy szobás lakás Szegeden Móravárosban, tömegközlekedéstől 100 méterre és közel az egyetemi részekhez. Téglaépítésű lakás teljes berendezéssel és felszereléssel bérbe vehető. Napfényes, csendes lakás jó állapotú, nyugodt lakóközösségű házban.', 'Friss, fiatalos, modern. Felújított, berendezett és gépesített, jó beosztású egy szobás lakásba 1-2 fő rugalmasan költözhet.\r\n\r\nSzegeden Móravárosban, tömegközlekedéstől 100 méterre és közel az egyetemi részekhez, téglaépítésű lakás teljes berendezéssel és felszereléssel bérbe vehető.\r\n\r\nNapfényes, csendes lakás jó állapotú, nyugodt lakóközösségű házban.\r\n\r\nA zárt fürdő kivételével egy légtérben elhelyezett ingatlan klímás, az ablakai redőnyösek, és a parkos kerten túl városi panorámára néznek.\r\n\r\nA lakás rezsije kedvező (vízóra, led-világítás és cirkófűtés miatt). A lakás becsült havi átlagos rezsije 30 ezer (villany, gáz, víz, szemétszállítás, telekom, közös költséggel együtt).\r\n\r\nMinimális bérleti időtartam 5 hó, kaució 2 hó. Kis állat nem hozható, dohányzás a lakásban nem megengedett, csak az erkélyen.\r\n\r\nElőnyei:\r\n\r\n– sűrű tömegközlekedése: busz, 3-as villamos 100 méteren belül\r\n\r\n– teljesen felszerelt, berendezett, egyedi bútorok, gépek (mosógép, elektromos tűzhely sütővel, mikró, hűtő, klíma)\r\n\r\n– jó lakóközösség\r\n\r\n– remek beosztás, tágas tér egy személynek vagy egy párnak\r\n\r\n– légkondicionáló\r\n\r\n– ingyenes köztéri parkolás.', '2025-04-16 13:23:29', '2025-04-17 07:50:48'),
(8, 6, 'Tisza utca', 47.5238887, 19.0593852, 'properties/Ofwo3QxuNRBtWNE5LV58msr65IpZqTbSelUpY1qI.jpg', '259000', '45', '60000000', '5 hónap', '2001-2010 között', '5', '3', 'nincs', 'Igen', 'Igen', 'utcai', 'gáz (cirkó)', 'utcán, közterület', 'Igen', 'Nem', 'Nem', 'Van', 'nem', '45', 'Újszerű, felújított és berendezett, jó beosztású másfél szobás ingatlan. A Váci út és a Tisza utca sarkán liftes házban, metrótól 100 méterre, 2006-ban ráépítéssel épült cirkófűtéses tégla lakás teljes IKEA-berendezéssel és felszereléssel.', 'Újszerű,  felújított és berendezett, jó beosztású másfél szobás lakásba 1-2 fő költözhet.\r\n\r\nA Váci út és a Tisza utca sarkán liftes házban, metrótól 100 méterre, 2006-ban ráépítéssel épült cirkófűtéses tégla lakás teljes IKEA-berendezéssel és felszereléssel bérbe vehető.\r\n\r\nNapfényes, csendes lakás jó állapotú, nyugodt lakóközösségű házban.\r\n\r\nA nappali klímás, ablakai mellékutcára néznek, az udvari hálószoba redőnyös.\r\n\r\nA lakás rezsije alacsony a teljes körű led-világítás és kombi cirkós fűtés miatt, az elektromos mérőóra feltöltőkártyás. A közös költség tartalmazza a vízfogyasztást. A lakás becsült havi átlagos rezsije 29 ezer (villany, gáz, víz, közös költséggel együtt). A házban t-home és upc elérhető.\r\n\r\nMinimális bérleti időtartam 5 hó, kaució 2 hó. Kis állat nem hozható, dohányzás a lakásban nem megengedett.\r\n\r\nElőnyei:\r\n\r\n– sűrű éjjel-nappali tömegközlekedése: metró, busz, troli – mind 100 méteren belül\r\n\r\n– teljesen felszerelt, berendezett, IKEA-bútorok, gépek (mosó-szárító, mosogató, sütő, főzőlap, mikró, elszívó, két részes hűtő-fagyasztó, kombi cirkó, klíma, függő csillárok)\r\n\r\n– alacsony rezsi: led, cirkó, indukciós főzőlap\r\n\r\n– jó lakóközösség\r\n\r\n– remek beosztás: az előszobából nyílik minden helyiség\r\n\r\n– lift, légkondicionáló\r\n\r\nHátránya:\r\n-köztéri parkolás.', '2025-04-17 10:46:14', '2025-04-17 10:46:14'),
(9, 5, 'József Attila', 46.2478849, 20.1479515, 'properties/yjbj5gm0cTIz3WDYX7BV1GSCcUXt5jQHA3IUmXGW.jpg', '159000', '47', '32000000', '5 hónp', '1980 körül', '11', '9', '3', 'Igen', 'Igen', 'utcai', 'távfűtés', 'utcán, közterület', 'Igen', 'Nem', 'Nem', 'Van', 'nem', '47', 'Ha szereti a természet élénk színeit, akkor szeretni fogja ezt a felújított,  frissen berendezett és gépesített lakást. Napfényes, csendes lakás átlagos állapotú, nyugodt lakóközösségű házban. Szegeden az Északi városrészben 3, 4-es villamos vonalán panellakás teljes  berendezéssel és felszereléssel bérbe vehető.', 'Ha szereti a természet élénk színeit, akkor szeretni fogja ezt a felújított,\r\nfrissen berendezett és gépesített lakást.\r\n\r\nJó beosztású másfél szobás lakásba 1-3 fő rugalmasan költözhet. Szegeden az Északi városrészben 3, 4-es villamos vonalán panellakás teljes\r\nberendezéssel és felszereléssel bérbe vehető.\r\n\r\nNapfényes, csendes lakás átlagos állapotú, nyugodt lakóközösségű házban.\r\nA nappali klímás, a szobák ablakai redőnyösek és utcára néznek.\r\n\r\nA lakás rezsije kedvező (vízóra, led-világítás és átalánydíjas gáztűzhely miatt). A lakás becsült havi átlagos rezsije 28 ezer (villany, fűtésátalány, gáz, víz, közös költséggel együtt).\r\n\r\nElőnyei:\r\n– sűrű tömegközlekedése: villamos a ház előtt, busz, troli 100 méteren belül\r\n\r\n– teljesen felszerelt, berendezett, egyedi bútorok, gépek (mosógép, gáztűzhely sütővel, mikró, két részes hűtő-fagyasztó, klíma)\r\n\r\n– jó lakóközösség\r\n\r\n– remek beosztás: az előszobából nyílik minden helyiség\r\n\r\n– légkondicionáló\r\n\r\n– ingyenes köztéri parkolás.\r\n\r\nMinimális bérleti időtartam 5 hó, kaució 2 hó. Kisállat nem hozható,\r\ndohányzás a lakásban nem megengedett, csak az erkélyen.', '2025-04-17 11:37:29', '2025-04-17 12:24:35');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` text NOT NULL,
  `last_activity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`, `created_at`, `updated_at`) VALUES
('bk6kK3pZfggo3QToPAjkn38fZEWGaBXVJZe0zcnV', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiN0Rxd0lMekxpeDhtV1ljWXd5Z2pHZVJ0cldBTXplcERCV1h6S3lDNiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcm9wZXJ0aWVzL2NyZWF0ZSI7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7fQ==', 1744885089, NULL, NULL),
('VZyvCZDzvkb1WLQ0DxMv4mJSMmlpWoRg9mELH00i', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiU0VNN1dQd1gwR3Y3T3FuSVA4aGhHR2czb1gwOGVyR2lWMW16R1ZSYiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJuZXciO2E6MDp7fXM6Mzoib2xkIjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9jaXRpZXMvNS9wcm9wZXJ0aWVzIjt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6Mjt9', 1747395443, NULL, NULL),
('XwFHlw2SYKBotf9KiuPbGgUIlrhCluyyZZTctq0B', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWWM0bDcyV0drRDJKQ2NlZE1pblgwdzRFUjhCd0RQQUFMN0dhSnM4aiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJuZXciO2E6MDp7fXM6Mzoib2xkIjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fX0=', 1744900417, NULL, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Tamás', 'ingatlanvonal@gmail.com', NULL, '$2y$12$snRNHgTzAuAYHFkhX42puuercklAm1UF9/aJHkHrWglic/NzHLzou', NULL, '2025-05-16 09:36:56', '2025-05-16 09:36:56');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- A tábla indexei `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- A tábla indexei `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pictures_property_id_foreign` (`property_id`);

--
-- A tábla indexei `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `properties_city_id_foreign` (`city_id`);

--
-- A tábla indexei `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `pictures`
--
ALTER TABLE `pictures`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT a táblához `properties`
--
ALTER TABLE `properties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `pictures`
--
ALTER TABLE `pictures`
  ADD CONSTRAINT `pictures_property_id_foreign` FOREIGN KEY (`property_id`) REFERENCES `properties` (`id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `properties`
--
ALTER TABLE `properties`
  ADD CONSTRAINT `properties_city_id_foreign` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
