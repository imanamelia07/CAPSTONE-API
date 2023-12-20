-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 20 Des 2023 pada 11.51
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_project`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `chatbot`
--

CREATE TABLE `chatbot` (
  `id` int(11) NOT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `Question` varchar(255) DEFAULT NULL,
  `Answer` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `quesionnaireresult`
--

CREATE TABLE `quesionnaireresult` (
  `id` int(11) NOT NULL,
  `resultDate` varchar(255) DEFAULT NULL,
  `resultQuestionnaire` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `Question` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `question`
--

INSERT INTO `question` (`id`, `Question`, `createdAt`, `updatedAt`) VALUES
(1, 'Apakah Anda merasa cemas atau gelisah tanpa alasan yang jelas?', '2023-12-20 09:12:25', '2023-12-20 09:12:25'),
(2, 'Apakah Anda merasa sulit untuk berkonsentrasi atau tetap fokus pada tugas atau aktivitas sehari-hari?\r\nApakah Anda merasa lelah atau kekurangan energi sepanjang waktu?', '2023-12-20 09:16:39', '2023-12-20 09:16:39'),
(3, 'Apakah Anda mengalami perubahan tidur, seperti insomnia atau tidur berlebihan?', '2023-12-20 09:17:08', '2023-12-20 09:17:08'),
(4, 'Apakah Anda mengalami perubahan nafsu makan, seperti makan berlebihan atau kehilangan selera makan?', '2023-12-20 09:17:35', '2023-12-20 09:17:35'),
(5, 'Apakah Anda merasa tidak berharga atau merasa bersalah tanpa alasan yang jelas?', '2023-12-20 09:17:57', '2023-12-20 09:17:57'),
(6, 'Apakah Anda sering mengalami sakit kepala, sakit perut, atau nyeri lainnya?', '2023-12-20 09:18:14', '2023-12-20 09:18:14'),
(7, 'Apakah Anda memiliki kekhawatiran tentang masa depan atau perasaan kehilangan arah dalam hidup?', '2023-12-20 09:18:33', '2023-12-20 09:18:33'),
(8, 'Bagaimana hubungan Anda dengan diri sendiri? Apakah Anda memiliki citra diri yang positif atau mengalami perasaan rendah diri?', '2023-12-20 09:18:51', '2023-12-20 09:18:51'),
(9, 'Apakah Anda merasa memiliki dukungan sosial yang cukup, atau apakah ada tantangan dalam membangun dan menjaga hubungan dengan orang lain?', '2023-12-20 09:19:08', '2023-12-20 09:19:08'),
(10, 'Apakah anda mengalami penurunan minat terhadap aktivitas yang biasanya anda nikmati selama seminggu atau lebih?', '2023-12-20 09:29:20', '2023-12-20 09:29:20');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(2, 'Amellia Iman', 'i234@gmail.com', '$2b$10$r0DwfSEwiDnfwXFlsFwdZ.ckNSxiS.2G5aqTYDxr6YlNav/XBJX/O', '2023-12-19 15:23:54', '2023-12-19 15:23:54');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `chatbot`
--
ALTER TABLE `chatbot`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `quesionnaireresult`
--
ALTER TABLE `quesionnaireresult`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `chatbot`
--
ALTER TABLE `chatbot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `quesionnaireresult`
--
ALTER TABLE `quesionnaireresult`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
