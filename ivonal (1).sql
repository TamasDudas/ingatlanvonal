-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Feb 19. 12:00
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
(1, 'Jordystad', 'https://via.placeholder.com/640x480.png/006677?text=excepturi', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(2, 'O\'Connerside', 'https://via.placeholder.com/640x480.png/00cc22?text=aperiam', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(3, 'Joanieberg', 'https://via.placeholder.com/640x480.png/00dd66?text=et', '2025-02-18 17:59:59', '2025-02-18 17:59:59');

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
(5, '2025_02_06_084420_create_pictures_table', 1);

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
(1, 1, 'properties/image-1.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(2, 1, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(3, 1, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(4, 1, 'properties/image-3.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(5, 1, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(6, 1, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(7, 1, 'properties/image-3.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(8, 1, 'properties/image-3.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(9, 1, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(10, 1, 'properties/image-3.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(11, 2, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(12, 2, 'properties/image-1.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(13, 2, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(14, 2, 'properties/image-3.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(15, 2, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(16, 2, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(17, 2, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(18, 2, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(19, 2, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(20, 2, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(21, 3, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(22, 3, 'properties/image-3.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(23, 3, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(24, 3, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(25, 3, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(26, 3, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(27, 3, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(28, 3, 'properties/image-1.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(29, 3, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(30, 3, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(31, 4, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(32, 4, 'properties/image-1.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(33, 4, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(34, 4, 'properties/image-1.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(35, 4, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(36, 4, 'properties/image-1.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(37, 4, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(38, 4, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(39, 4, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(40, 4, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(41, 5, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(42, 5, 'properties/image-1.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(43, 5, 'properties/image-3.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(44, 5, 'properties/image-1.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(45, 5, 'properties/image-3.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(46, 5, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(47, 5, 'properties/image-5.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(48, 5, 'properties/image-3.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(49, 5, 'properties/image-4.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(50, 5, 'properties/image-2.jpg', '2025-02-18 17:59:59', '2025-02-18 17:59:59');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `properties`
--

CREATE TABLE `properties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `city_id` bigint(20) UNSIGNED NOT NULL,
  `street` varchar(255) NOT NULL,
  `featured_image` varchar(255) NOT NULL,
  `rental_price` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `sale_price` int(11) NOT NULL,
  `minimum_rental_period` int(11) NOT NULL,
  `year_built` int(11) NOT NULL,
  `building_floors` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `balcony` int(11) NOT NULL,
  `furniture` varchar(255) NOT NULL DEFAULT 'yes',
  `appliances` varchar(255) NOT NULL DEFAULT 'yes',
  `view` varchar(255) NOT NULL,
  `heating_type` varchar(255) NOT NULL,
  `parking` varchar(255) NOT NULL,
  `air_conditioning` tinyint(1) NOT NULL,
  `smoking` tinyint(1) NOT NULL,
  `pets` tinyint(1) NOT NULL,
  `elevator` tinyint(1) NOT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `floor_area` int(11) NOT NULL,
  `short_description` text NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `properties`
--

INSERT INTO `properties` (`id`, `city_id`, `street`, `featured_image`, `rental_price`, `size`, `sale_price`, `minimum_rental_period`, `year_built`, `building_floors`, `floor`, `balcony`, `furniture`, `appliances`, `view`, `heating_type`, `parking`, `air_conditioning`, `smoking`, `pets`, `elevator`, `is_featured`, `floor_area`, `short_description`, `description`, `created_at`, `updated_at`) VALUES
(1, 2, 'Wilfredo Wall', 'properties/nemes_halo_4.jpg', 343104, 168, 16711330, 2, 2004, 8, 10, 0, 'nem', 'igen', 'ad', 'dolore', 'sit', 1, 1, 0, 0, 0, 302, 'Itaque dolores cumque laudantium eum.', 'Quis sint corrupti est beatae. Maiores repudiandae eum alias impedit non.', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(2, 3, 'Lacey Mount', 'properties/nemes_halo_4.jpg', 229868, 65, 11868718, 11, 1975, 5, 1, 0, 'igen', 'igen', 'id', 'est', 'itaque', 1, 1, 1, 1, 0, 110, 'Ea temporibus similique ut voluptatem placeat et autem.', 'Magnam quisquam est iusto ratione quidem quia. Cumque earum ad enim iste et dolores dolor. Aut molestias iusto dignissimos voluptate labore quia quia.', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(3, 2, 'Hudson Vista', 'properties/nemes_halo_4.jpg', 327728, 145, 39694029, 2, 1991, 3, 8, 0, 'igen', 'nem', 'velit', 'velit', 'culpa', 1, 1, 1, 1, 0, 244, 'Eaque in nisi aut incidunt pariatur quisquam error.', 'Non est consequatur et omnis doloribus voluptate aut. Est quia libero reiciendis voluptatem. Ut eos aut repellendus deserunt. Porro non voluptatem similique deserunt qui quisquam.', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(4, 3, 'Kenyatta Run', 'properties/nemes_halo_4.jpg', 327226, 189, 11931096, 2, 1981, 8, 0, 0, 'igen', 'nem', 'et', 'neque', 'qui', 0, 1, 0, 1, 0, 297, 'Velit assumenda numquam tempore quam est.', 'Ad nihil a et voluptatibus. Earum sit autem illo. Nihil autem doloremque sapiente doloremque. Quia corrupti cum tempora quaerat non. Quis similique velit eum vitae iure ipsum est.', '2025-02-18 17:59:59', '2025-02-18 17:59:59'),
(5, 1, 'Gerson Glen', 'properties/nemes_halo_4.jpg', 294935, 126, 43365746, 3, 2017, 8, 3, 0, 'nem', 'igen', 'at', 'harum', 'saepe', 1, 0, 0, 0, 0, 493, 'Earum qui sequi enim temporibus occaecati aut.', 'Qui quas possimus eos quam dolorem. Itaque reprehenderit consequatur et error enim. Voluptatem fugiat eius est nulla porro aliquam molestias. Labore in libero magni.', '2025-02-18 17:59:59', '2025-02-18 17:59:59');

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
('TDXxdIGEb83EbsxIFYc8EnDKKZB78SU17k3mRP67', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoid25teEdxaVBtNVJ2cUFtbDFGS2RzeTBrQUFJRTJwY0tlQjl2U0NRZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDM6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcm9wZXJ0aWVzLzIvcHJvcGVydHkiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1739962424, NULL, NULL);

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
-- Indexek a kiírt táblákhoz
--

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `pictures`
--
ALTER TABLE `pictures`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT a táblához `properties`
--
ALTER TABLE `properties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

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
