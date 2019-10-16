-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2018-06-08 14:06:09
-- 伺服器版本: 10.1.31-MariaDB
-- PHP 版本： 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `mcd_wms`
--

-- --------------------------------------------------------

--
-- 資料表結構 `errorlog`
--

CREATE TABLE `errorlog` (
  `log_id` int(11) NOT NULL COMMENT '訊息編號',
  `log_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '發生時間',
  `log_code` text COMMENT '異常代碼',
  `log_message` text COMMENT '異常信息',
  `log_previous` text COMMENT '之前的異常參數',
  `log_file` text COMMENT '發生異常的文件名',
  `log_line` text COMMENT '發生異常的代碼行數',
  `log_trace` text COMMENT 'backtrace() 數組',
  `log_traceasstring` text COMMENT '已格式化成字符串的getTrace()訊息'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='錯誤提示紀錄';

-- --------------------------------------------------------

--
-- 資料表結構 `jsoninoutrecord`
--

CREATE TABLE `jsoninoutrecord` (
  `jio_id` int(11) NOT NULL COMMENT '記錄編號',
  `jio_receive` text NOT NULL COMMENT '傳入資訊，含header',
  `jio_return` text NOT NULL COMMENT '回傳資訊，含header',
  `jio_wcffunction` varchar(50) NOT NULL COMMENT '功能名稱即fucnction name',
  `ps_id` varchar(9) NOT NULL COMMENT '錯誤代碼',
  `isflag` tinyint(1) DEFAULT '1' COMMENT '刪除註記 0.已刪除 1.未刪除',
  `create_user` varchar(50) DEFAULT 'bbin' COMMENT '建立人',
  `create_date` timestamp NULL DEFAULT NULL COMMENT '建立日期',
  `last_update_user` varchar(50) DEFAULT 'bbin' COMMENT '最後異動人',
  `last_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '最後異動日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='json進出紀錄';

-- --------------------------------------------------------

--
-- 資料表結構 `wms_modelrecord`
--

CREATE TABLE `wms_modelrecord` (
  `mr_id` int(11) NOT NULL COMMENT '版型紀錄編號',
  `pd_id` int(11) NOT NULL COMMENT '版型編號',
  `mr_name` varchar(50) NOT NULL COMMENT '業主、租網',
  `mr_designer` varchar(50) NOT NULL COMMENT '視覺設計者',
  `mr_tpl` varchar(50) NOT NULL COMMENT '有點類似代號，具有唯一性',
  `mr_filepath` varchar(100) NOT NULL COMMENT '檔案路徑',
  `mr_view_img` varchar(200) NOT NULL COMMENT '租網的示意圖路徑',
  `mr_url` varchar(100) DEFAULT NULL COMMENT '租網連結',
  `mr_date` date NOT NULL COMMENT '開始時間',
  `isflag` tinyint(1) NOT NULL COMMENT '刪除註記 0: 已刪除　1:未刪除',
  `create_user` varchar(50) NOT NULL COMMENT '建立人',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '建立日期',
  `last_update_user` varchar(50) NOT NULL COMMENT '最後異動人',
  `last_update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '最後異動日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='版型紀錄';

--
-- 資料表的匯出資料 `wms_modelrecord`
--

INSERT INTO `wms_modelrecord` (`mr_id`, `pd_id`, `mr_name`, `mr_designer`, `mr_tpl`, `mr_filepath`, `mr_view_img`, `mr_url`, `mr_date`, `isflag`, `create_user`, `create_date`, `last_update_user`, `last_update_date`) VALUES
(1, 4, '黑紗娛樂城', 'toby', 'aaa', '\\\\mcd-one', '/images/modelrecord/1/DNEmnclUqV5o6wtXXC0bbycI9YWfKHHjR6z8sc9v.jpeg', 'http://web.bbinpartner.com/live.php?id=63', '2018-01-30', 1, 'toby', '2018-05-29 04:08:00', 'toby', '2018-05-30 02:42:38'),
(2, 39, '覺得猛猛的娛樂城', 'toby', 'bbb', '\\\\mcd-one', '/images/modelrecord/2/eDu5j4bG8wZACluWQTy5ECOl4IebNSoWaynikAFG.jpeg', NULL, '2018-07-04', 1, 'toby', '2018-05-29 04:08:33', 'toby', '2018-05-29 04:08:33'),
(3, 13, '不可能超越的娛樂城', 'toby', 'ccc', '\\\\mcd-one', '/images/modelrecord/3/dOVS5s0hIbySMOhd3Hc7FaAVwqqXIJ6w6u77YFzy.jpeg', NULL, '2018-08-09', 1, 'toby', '2018-05-22 04:09:04', 'toby', '2018-05-31 06:15:28'),
(4, 8, '戰勝仇敵的娛樂城', 'toby', 'ddd', '\\\\mcd-one', '/images/modelrecord/4/Atq5KCxRuSh3II90uIV4Izmx2jN7Fst2UZ1EzFPU.jpeg', NULL, '2018-12-14', 1, 'toby', '2018-05-29 04:09:47', 'toby', '2018-05-29 04:09:47'),
(5, 1, '稱謝你的娛樂城', 'toby', 'eee', '\\\\mcd-one', '/images/modelrecord/5/v2utnKRPY166KT9yWdFdlWtmeQSlNuREpnCcrKhi.jpeg', NULL, '2018-07-05', 1, 'toby', '2018-05-29 04:10:35', 'toby', '2018-05-29 04:10:35'),
(6, 1, '賜我力量的娛樂城', 'toby', 'fff', '\\\\mcd-one', '/images/modelrecord/6/BOaQzfdvGSAlVzm4pNGf1mGvWoMCb2owNk2gfrul.jpeg', NULL, '2018-03-29', 1, 'toby', '2018-05-29 04:11:19', 'toby', '2018-05-29 04:11:19'),
(7, 1, '永遠真實的娛樂城', 'toby', 'qwe', '\\\\mce-wh', '/images/modelrecord/7/OPULMonGqt7YOB1fBhO2msnNdHqiVbU66ngsPZHU.jpeg', 'http://web.bbinpartner.com/live.php?id=55', '2018-10-16', 1, 'toby', '2018-05-29 04:13:54', 'toby', '2018-05-30 03:07:03'),
(8, 16, '過不去的娛樂城', 'toby', 'asd', '\\\\hjej-eth', '/images/modelrecord/8/g8QEfw82uPrp1E0clAQNyHeMCcvZgZQ4f939mdfi.jpeg', NULL, '2018-07-04', 1, 'toby', '2018-05-29 04:14:30', 'toby', '2018-05-29 04:14:30'),
(9, 10, '凡凡凡娛樂城', 'toby', 'zxc', '\\\\wrg-wrg', '/images/modelrecord/9/2VaYJdHVrjfRPm26J1StcviW6x3F1RMwtmKlHF6Z.jpeg', NULL, '2018-05-16', 1, 'toby', '2018-05-29 04:15:08', 'toby', '2018-05-29 04:15:08'),
(10, 9, '我的靈魂娛樂城', 'toby', 'rty', '\\\\fmd-erg', '/images/modelrecord/10/tOCm0pgDm6ybcz82YoVEIEoQr4kQ1Dqv51Rxf65o.jpeg', NULL, '2018-09-05', 1, 'toby', '2018-05-29 04:15:44', 'toby', '2018-05-29 07:03:52'),
(11, 34, '斷開鎖練的娛樂城', 'toby', 'fgh', 'esn-srn', '/images/modelrecord/11/G9hkxt2bvObPDpxYjtBw8QnEgSprNIPDrnKfsAdc.jpeg', NULL, '2018-05-03', 1, 'toby', '2018-05-29 04:16:22', 'toby', '2018-05-31 08:40:16'),
(12, 37, '世界的灰暗娛樂城', 'toby', 'uio', 'tf,j-tku', '/images/modelrecord/12/JfDAalzMqyZ7Khd6JAySGKAmVET62Bo1M6pbuhsL.jpeg', NULL, '2018-03-30', 1, 'toby', '2018-05-29 04:17:03', 'toby', '2018-05-31 08:40:18'),
(13, 37, '請你來的娛樂城', 'toby', 'iiop', 'rheg-rg', '/images/modelrecord/13/rddg8nYqrrltISeiOQdutXezPgll3AWiN4kRg7zc.jpeg', NULL, '2018-05-14', 1, 'toby', '2018-05-29 04:17:34', 'toby', '2018-05-31 08:40:20'),
(14, 9, '嚇到吃手手娛樂城', 'Toby', 'ertdfgcvb', 'wgwrg-wefe', '/images/modelrecord/14/pWbWux2X6huMjtafHf3fZhR4OE6XnMCLjJaqvWM3.jpeg', 'http://web.bbinpartner.com/live.php?id=60', '2018-07-04', 1, 'toby', '2018-05-30 03:05:46', 'toby', '2018-05-30 03:05:46'),
(15, 1, '超級大的娛樂城', 'toby', 'eeerrrttt', '\\\\evef-ergh', '/images/modelrecord/15/H7D4coCA94rT2HVBfkUmSxnMIFDX5Hc56yPxZGXU.jpeg', 'http://web.bbinpartner.com/live.php?id=34', '2018-08-10', 1, 'bbin', '2018-05-31 05:50:03', 'bbin', '2018-05-31 05:50:03'),
(16, 13, '心動脈搏娛樂城', 'gg', 'erjkc', '\\\\ergerg-ggr', '/images/modelrecord/16/l6Kjmbv9lFm4Y0lDdPyef0mmpPgO2THZC75unScZ.jpeg', 'http://web.bbinpartner.com/live.php?id=42', '2018-03-01', 1, 'toby', '2018-05-31 08:34:33', 'toby', '2018-05-31 08:34:33'),
(17, 15, '多人混戰娛樂城', 'ryt', 'wemmytj', '\\\\erh-qerf-wt', '/images/modelrecord/17/CltoeiaSbn6jCx71d4vvPSjSSqHDwjMoOZTKdt6E.jpeg', 'http://web.bbinpartner.com/live.php?id=27', '2018-09-06', 1, 'toby', '2018-05-31 08:35:48', 'toby', '2018-05-31 08:35:48'),
(18, 1, '少在那邊娛樂城', 'wer', 'rghjs', '\\\\894--458', '/images/modelrecord/18/acZfBL1w4XFCuozNFI8OhoDdJWNmlUiV54GQdzbL.jpeg', 'http://web.bbinpartner.com/live.php?id=18', '2018-11-29', 1, 'toby', '2018-05-31 08:36:53', 'toby', '2018-05-31 08:36:53'),
(19, 1, '最優質的娛樂城', 'rrhhh', 'errt', '\\\\ertery', '/images/modelrecord/19/Yixjp2Fl95Aey7pLf9omrmdFSQCwt3bf0YahRWOc.jpeg', 'http://web.bbinpartner.com/live.php?id=7', '2018-03-16', 1, 'toby', '2018-05-31 08:37:40', 'toby', '2018-05-31 08:37:40'),
(20, 1, '又是一個大娛樂城', 'ere', 'ejopfg', '\\\\ert-ffh-jtr', '/images/modelrecord/20/J6oZqJD54klgsRzTnvjdPEX873gVr6Gj4wEUSVC4.jpeg', 'http://web.bbinpartner.com/live.php?id=9', '2018-03-29', 1, 'toby', '2018-05-31 08:38:43', 'toby', '2018-05-31 08:38:43');

-- --------------------------------------------------------

--
-- 資料表結構 `wms_projectdata`
--

CREATE TABLE `wms_projectdata` (
  `pd_id` int(11) NOT NULL COMMENT '版型編號',
  `pd_num` varchar(200) NOT NULL COMMENT '版型名稱',
  `pd_date` date NOT NULL COMMENT '版型完成日',
  `pd_show` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否顯示於前台 0.隱藏 1.顯示',
  `pd_new` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否為最新項目 0.否 1.是',
  `pd_hot` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否為熱門版型 0.否 1.是',
  `pd_live` tinyint(1) NOT NULL DEFAULT '0' COMMENT '有無線上Demo 0.無 1.有',
  `pd_rwd` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否為RWD 0.固定板型 1.RWD',
  `pd_desktop_check` tinyint(1) NOT NULL DEFAULT '1' COMMENT '版型for桌上PC 0.否 1.是',
  `pd_tablet_check` tinyint(1) NOT NULL DEFAULT '0' COMMENT '版型for平板 0.否 1.是',
  `pd_mobile_check` tinyint(1) NOT NULL DEFAULT '0' COMMENT '版型for手機 0.否 1.是',
  `pd_layout` tinyint(1) NOT NULL COMMENT '版型布局 1.直向大小 2.橫向大小 3.多面切割 4.對角線 5.無規則',
  `pd_style` tinyint(1) NOT NULL COMMENT '設計風格 1.前衛時尚 2.復古典雅 3.精緻華麗 4.簡約大氣',
  `pd_colors` varchar(200) NOT NULL COMMENT '版型色系',
  `pd_view_img` varchar(200) NOT NULL COMMENT '示意圖路徑',
  `pd_banner_img` varchar(200) NOT NULL COMMENT 'Banner圖片路徑',
  `pd_template_img` text COMMENT '版型各頁面圖片路徑',
  `pd_notices` text COMMENT '注意事項',
  `isflag` tinyint(1) DEFAULT '1' COMMENT '刪除註記 0.已刪除 1.未刪除',
  `create_user` varchar(50) DEFAULT 'bbin' COMMENT '建立人',
  `create_date` timestamp NULL DEFAULT NULL COMMENT '建立日期',
  `last_update_user` varchar(50) DEFAULT 'bbin' COMMENT '最後異動人',
  `last_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '最後異動日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='版型基本資料';

--
-- 資料表的匯出資料 `wms_projectdata`
--

INSERT INTO `wms_projectdata` (`pd_id`, `pd_num`, `pd_date`, `pd_show`, `pd_new`, `pd_hot`, `pd_live`, `pd_rwd`, `pd_desktop_check`, `pd_tablet_check`, `pd_mobile_check`, `pd_layout`, `pd_style`, `pd_colors`, `pd_view_img`, `pd_banner_img`, `pd_template_img`, `pd_notices`, `isflag`, `create_user`, `create_date`, `last_update_user`, `last_update_date`) VALUES
(1, 'A2018052201', '0000-00-00', 1, 1, 1, 0, 0, 1, 0, 0, 1, 2, '[\"black\",\"red\"]', '/images/not-use/A01.jpg', '/item/images/A17052201/banner.png', '[]', NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-06-07 05:55:19'),
(2, 'A2018052202', '0000-00-00', 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, '[\"blue\",\"green\",\"purple\"]', '/images/update/2/view/kSpcxNRftGTsyaF707vf9TNdti8MfOOoYGFtL3wH.jpeg', '/images/update/2/banner/OcC52cyDiW7tZhXBQSTcvvZprtmLHNNXcME2HLT9.jpeg', '[\"\\/images\\/update\\/2\\/template\\/ydQUUq3jLWR4xLIEXUJyILEpUWDS855dXRNOkwCH.jpeg\",\"\\/images\\/update\\/2\\/template\\/61YOsN4W3OKLaOE1LC6s7rotNlFRgnY2a03BMA6W.jpeg\",\"\\/images\\/update\\/2\\/template\\/Rj5Tcg6ofF8bfZ3D1U2qXggJOz5kU5XvguV03nD3.jpeg\",\"\\/images\\/update\\/2\\/template\\/ZKKPi147hkxUIevzfPn3qPrIo6jRCHeNlyaYrzGC.jpeg\",\"\\/images\\/update\\/2\\/template\\/a1WuymZZKgG1MIhHzWg7UYfIGF6G9gEaxyiU3iJK.jpeg\"]', NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-06-04 01:10:22'),
(3, 'A2018052203', '0000-00-00', 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, '[\"black\",\"purple\"]', '/images/not-use/A03.jpg', '/item/images/A17021301/banner.png', '[]', NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-05-31 05:59:17'),
(4, 'A2018052204', '0000-00-00', 1, 1, 0, 0, 0, 1, 0, 0, 2, 3, '[\"white\",\"gray\",\"yellow\"]', '/images/not-use/A04.jpg', '/item/images/A15042401/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-05-31 02:36:59'),
(5, 'A2018052205', '0000-00-00', 1, 1, 1, 0, 0, 1, 0, 0, 2, 2, '[\"gray\",\"black\",\"coffee\"]', '/images/update/5/view/ZOpeWRL6FFJ6EPF51qxU4O25fa2jqgC1Zo5XKcLP.jpeg', '/images/update/5/banner/MTIPw4wTRormkJ7Vu07GXZGITS7ss676MBkWy5Jn.jpeg', '[\"\\/images\\/update\\/5\\/template\\/QWZyGcO9Wnm1Qgaswok60q2ha2iISVQnLbqgS1Hl.jpeg\"]', NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-05-31 02:36:59'),
(6, 'A2018052206', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 4, '[\"black\",\"coffee\",\"gray\"]', '/images/not-use/A06.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-05-31 02:36:59'),
(7, 'A2018052207', '0000-00-00', 1, 1, 0, 0, 0, 1, 0, 0, 3, 2, '[\"gray\",\"black\",\"coffee\"]', '/images/update/7/view/9P5nuMXlUgtVgSKxjpCXah6lJ6VMsw5Fck8uNiiy.jpeg', '/images/update/7/banner/FdWDZg2bFw6IeISJ62ODMXQOLS91dnzR9x52ieSV.jpeg', '[\"\\/images\\/update\\/7\\/template\\/4Ht2mxcPvOLxqUDyxcKja0TnEV4rus9rsvuMpYhL.jpeg\"]', NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-05-31 02:36:59'),
(8, 'A2018052208', '0000-00-00', 1, 0, 0, 0, 0, 1, 0, 0, 2, 4, '[\"white\",\"black\"]', '/images/not-use/A08.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-05-31 02:36:59'),
(9, 'A2018052209', '0000-00-00', 1, 0, 0, 0, 0, 1, 0, 0, 5, 2, '[\"black\",\"coffee\",\"gray\"]', '/images/not-use/A09.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(10, 'A2018052210', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 2, '[\"black\",\"coffee\",\"gray\"]', '/images/not-use/A10.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(11, 'A2018052211', '0000-00-00', 1, 1, 0, 0, 0, 1, 0, 0, 2, 3, '[\"black\",\"coffee\",\"gray\"]', '/images/not-use/A11.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(12, 'A2018052212', '0000-00-00', 1, 1, 1, 0, 0, 1, 0, 0, 4, 1, '[\"yellow\",\"coffee\"]', '/images/not-use/A12.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(13, 'A2018052213', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 1, '[\"black\",\"coffee\",\"gray\"]', '/images/not-use/A13.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-05-31 02:36:59'),
(14, 'A2018052214', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 1, 2, '[\"black\",\"coffee\",\"gray\"]', '/images/not-use/A14.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-05-31 02:36:59'),
(15, 'A2018052301', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/A15.jpg', '/item/images/A16062701/01.jpg', '[\"\\/images\\/update\\/15\\/template\\/KmnajVkH3pftfZzuxPtYPsZ17Tk3M3n4AArguQYL.jpeg\"]', NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-06-06 09:31:00'),
(16, 'A2018052302', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/A16.jpg', '/item/images/A16062701/01.jpg', '[\"\\/images\\/update\\/16\\/template\\/tF2SW3SRdDd8vQJBfTZmTq5Ua5vDRrehFLIWMcNz.jpeg\"]', NULL, 1, 'bbin', '2018-05-23 16:00:00', 'toby', '2018-06-06 09:30:52'),
(17, 'A2018052303', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/B01.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(18, 'A2018052304', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/B02.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(19, 'A2018052305', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/B03.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(20, 'A2018052306', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/B04.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(21, 'A2018052307', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/B05.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(22, 'A2018052308', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/B06.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(23, 'A2018052309', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/B07.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(24, 'A2018052310', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/B08.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(25, 'A2018052311', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/B09.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(26, 'A2018052208', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/A16.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(27, 'A2018052401', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 4, '[\"white\",\"black\"]', '/images/not-use/C01.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(28, 'A2018052402', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/C02.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(29, 'A2018052403', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 4, '[\"white\",\"black\"]', '/images/not-use/C03.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(30, 'A2018052404', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/C04.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(31, 'A2018052405', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/C05.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(32, 'A2018052406', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/C06.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(33, 'A2018052407', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 4, '[\"white\",\"black\"]', '/images/not-use/C07.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(34, 'A2018052408', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/C08.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(35, 'A2018052409', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 4, '[\"white\",\"black\"]', '/images/not-use/C09.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(36, 'A2018052410', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 4, '[\"white\",\"black\"]', '/images/not-use/D01.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(37, 'A2018052411', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/D02.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(38, 'A2018052412', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/D03.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(39, 'A2018052413', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/D04.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(40, 'A2018052414', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/D05.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(41, 'A2018052415', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 4, '[\"white\",\"black\"]', '/images/not-use/D06.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(42, 'A2018052416', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/D07.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(43, 'A2018052417', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 4, '[\"white\",\"black\"]', '/images/not-use/E01.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(44, 'A2018052418', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/E02.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(45, 'A2018052419', '0000-00-00', 1, 0, 1, 0, 0, 1, 0, 0, 2, 4, '[\"white\",\"black\"]', '/images/not-use/E03.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(46, 'A2018052420', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/E04.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(47, 'A2018052421', '0000-00-00', 1, 0, 1, 0, 1, 1, 1, 1, 2, 4, '[\"white\",\"black\"]', '/images/not-use/E05.jpg', '/item/images/A16062701/01.jpg', NULL, NULL, 1, 'bbin', '2018-05-23 16:00:00', 'bbin', '2018-05-31 02:36:59'),
(52, 'A2018052803', '0000-00-00', 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, '[\"black\"]', '/images/update/52/view/EjPuW0e2PdmJKG94SBaHAx1XOwWlbkuyeJDUDsYI.jpeg', '/images/update/52/banner/S8a6DAGNPUL9zFwXIZENOQZ4rjGUXFkVmQthFMpH.jpeg', '[\"\\/images\\/update\\/52\\/template\\/7eSApr7ZPZ5X0GGJrTlqE8GMDXu85KWpxFfDYbTq.jpeg\",\"\\/images\\/update\\/52\\/template\\/Z9LzeTTyX8RpahL3cfeBU2386Sw8uo1UGlP47Pk7.jpeg\",\"\\/images\\/update\\/52\\/template\\/menbc6hNc3kJmZ4URsL3XlGp5KpGnArafYScX5r0.jpeg\"]', NULL, 1, 'toby', '2018-05-23 16:00:00', 'toby', '2018-05-31 02:36:59'),
(53, 'A2018053101', '0000-00-00', 1, 1, 1, 1, 0, 1, 0, 0, 3, 3, '[\"white\",\"gray\",\"black\",\"blue\",\"green\",\"yellow\",\"coffee\",\"orange\",\"red\",\"pink\",\"purple\"]', '/photos/shares/D03.jpg', '/photos/shares/E05.jpg', '[\"/photos/shares/A03.jpg\"]', NULL, 1, 'Peach', '2018-05-31 06:20:24', 'toby', '2018-06-08 01:43:46'),
(54, 'A2018053102', '2018-12-21', 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, '[\"gray\",\"red\"]', '/photos/shares/A2018053105051616453215/D07.jpg', '/photos/shares/A2018053105051616453215/C02.jpg', '[\"/photos/shares/A2018053105051616453215/C09.jpg\"]', NULL, 1, 'Peach', '2018-05-31 06:24:35', 'toby', '2018-06-08 03:27:04'),
(55, 'A2018060801', '1900-03-06', 1, 1, 1, 1, 0, 1, 0, 0, 5, 4, '[\"white\",\"gray\",\"pink\",\"purple\"]', '/photos/shares/A201806080123456789/A14.jpg', '/photos/shares/A201806080123456789/D01.jpg', '[\"\\/photos\\/shares\\/A201806080123456789\\/A07.jpg\"]', '覺得可以,酷喔,挖賽,我不行了拉ˊ˙ˋ', 1, 'toby', '2018-06-08 01:57:11', 'toby', '2018-06-08 03:21:04'),
(56, 'A2018060802', '0000-00-00', 0, 1, 0, 0, 1, 1, 1, 1, 2, 2, '[\"black\",\"blue\",\"green\",\"yellow\",\"coffee\",\"orange\",\"red\"]', '/photos/shares/A15.jpg', '/photos/shares/A06.jpg', '[\"/photos/shares/C08.jpg\",\"/photos/shares/B07.jpg\"]', NULL, 1, 'toby', '2018-06-08 02:00:55', 'toby', '2018-06-08 02:00:55'),
(57, 'A2018060803', '2018-03-08', 1, 1, 0, 1, 1, 1, 1, 1, 3, 3, '[\"gray\",\"blue\",\"yellow\",\"orange\",\"pink\"]', '/photos/shares/A09.jpg', '/photos/shares/A01.jpg', '[\"/photos/shares/B01.jpg\"]', '讓我輸入幾行,你是誰,我又是誰,他呢', 1, 'toby', '2018-06-08 02:31:27', 'toby', '2018-06-08 02:34:11');

-- --------------------------------------------------------

--
-- 資料表結構 `wms_systemparameter`
--

CREATE TABLE `wms_systemparameter` (
  `sp_id` int(11) NOT NULL COMMENT '參數編號',
  `sp_parameterkey` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT '參數名稱',
  `sp_parametervalue` varchar(100) CHARACTER SET utf8 NOT NULL COMMENT '參數數值',
  `sp_paramatertype` tinyint(1) NOT NULL COMMENT '參數型態，0:int 1:string 2:json 3:boolean',
  `sp_paramaterdescribe` varchar(500) CHARACTER SET utf8 NOT NULL COMMENT '參數說明',
  `isflag` int(11) NOT NULL DEFAULT '1' COMMENT '0: 已刪除　1:未刪除',
  `create_user` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT 'bbin' COMMENT '使用者登入帳號',
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '建立資料的時間',
  `last_update_user` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT 'bbin' COMMENT '使用者登入帳號',
  `last_update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '最後更新資料的時間'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 資料表的匯出資料 `wms_systemparameter`
--

INSERT INTO `wms_systemparameter` (`sp_id`, `sp_parameterkey`, `sp_parametervalue`, `sp_paramatertype`, `sp_paramaterdescribe`, `isflag`, `create_user`, `create_date`, `last_update_user`, `last_update_date`) VALUES
(1, '熱門排行', '1', 0, '熱門排行頁面的顯示依據，1:自動、2:手動', 1, 'bbin', '2018-06-08 02:02:36', 'toby', '2018-06-08 02:02:36');

-- --------------------------------------------------------

--
-- 資料表結構 `wms_transaction_record`
--

CREATE TABLE `wms_transaction_record` (
  `tr_id` int(11) NOT NULL COMMENT '記錄編號',
  `pd_id` int(11) DEFAULT NULL COMMENT '版型編號',
  `mr_id` int(11) DEFAULT NULL COMMENT '版型紀錄編號',
  `ud_id` int(11) DEFAULT NULL COMMENT '使用者編號',
  `tr_action` int(11) NOT NULL COMMENT '異動項目 1.新增版型 2.修改版型 3.刪除版型 4.設定熱門 5.新增版型紀錄 6.修改版型紀錄 7.刪除版型紀錄 8.新增使用者 9.修改使用者 10.刪除使用者',
  `tr_user` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '異動使用者',
  `isflag` tinyint(1) DEFAULT '1' COMMENT '刪除註記 0.已刪除 1.未刪除',
  `create_user` varchar(50) CHARACTER SET utf8 DEFAULT 'bbin' COMMENT '建立人',
  `create_date` timestamp NULL DEFAULT NULL COMMENT '建立日期',
  `last_update_user` varchar(50) CHARACTER SET utf8 DEFAULT 'bbin' COMMENT '最後異動人',
  `last_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '最後異動日'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 資料表的匯出資料 `wms_transaction_record`
--

INSERT INTO `wms_transaction_record` (`tr_id`, `pd_id`, `mr_id`, `ud_id`, `tr_action`, `tr_user`, `isflag`, `create_user`, `create_date`, `last_update_user`, `last_update_date`) VALUES
(1, 2, NULL, NULL, 3, 'toby', 1, 'toby', '2018-05-24 04:23:21', 'toby', '2018-05-29 07:20:12'),
(2, 16, NULL, NULL, 3, 'toby', 1, 'toby', '2018-05-24 04:27:05', 'toby', '2018-05-29 07:20:12'),
(3, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 03:49:26', 'toby', '2018-05-29 07:20:12'),
(4, 4, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 03:50:09', 'toby', '2018-05-29 07:20:12'),
(5, 5, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:36:54', 'toby', '2018-05-29 07:20:12'),
(6, 5, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:37:28', 'toby', '2018-05-29 07:20:12'),
(7, 5, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:40:12', 'toby', '2018-05-29 07:20:12'),
(8, 5, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:40:27', 'toby', '2018-05-29 07:20:12'),
(9, 5, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:40:59', 'toby', '2018-05-29 07:20:12'),
(10, 5, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:43:20', 'toby', '2018-05-29 07:20:12'),
(11, 5, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:47:18', 'toby', '2018-05-29 07:20:12'),
(12, 5, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:47:37', 'toby', '2018-05-29 07:20:12'),
(13, 5, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:48:08', 'toby', '2018-05-29 07:20:12'),
(14, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:50:26', 'toby', '2018-05-29 07:20:12'),
(15, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:51:45', 'toby', '2018-05-29 07:19:19'),
(16, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:52:08', 'toby', '2018-05-29 07:19:25'),
(17, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 07:56:57', 'toby', '2018-05-29 07:19:27'),
(18, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:09:26', 'toby', '2018-05-29 07:19:46'),
(19, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:20:29', 'toby', '2018-05-29 07:20:12'),
(20, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:20:47', 'toby', '2018-05-29 07:20:12'),
(21, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:25:56', 'toby', '2018-05-29 07:20:12'),
(22, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:29:27', 'toby', '2018-05-29 07:20:12'),
(23, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:29:33', 'toby', '2018-05-29 07:20:12'),
(24, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:29:48', 'toby', '2018-05-29 07:20:12'),
(25, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:32:06', 'toby', '2018-05-29 07:20:12'),
(26, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:32:19', 'toby', '2018-05-29 07:20:12'),
(27, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:40:42', 'toby', '2018-05-29 07:20:12'),
(28, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:47:24', 'toby', '2018-05-29 07:20:12'),
(29, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:51:54', 'toby', '2018-05-29 07:20:12'),
(30, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:56:43', 'toby', '2018-05-29 07:20:12'),
(31, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:56:55', 'toby', '2018-05-29 07:20:12'),
(32, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:57:53', 'toby', '2018-05-29 07:20:12'),
(33, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 08:57:58', 'toby', '2018-05-29 07:20:12'),
(34, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:13:50', 'toby', '2018-05-29 07:20:12'),
(35, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:19:09', 'toby', '2018-05-29 07:20:12'),
(36, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:21:02', 'toby', '2018-05-29 07:20:12'),
(37, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:26:15', 'toby', '2018-05-29 07:20:12'),
(38, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:26:22', 'toby', '2018-05-29 07:20:12'),
(39, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:26:55', 'toby', '2018-05-29 07:20:12'),
(40, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:27:03', 'toby', '2018-05-29 07:20:12'),
(41, 16, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:28:50', 'toby', '2018-05-29 07:20:12'),
(42, 15, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:28:56', 'toby', '2018-05-29 07:20:12'),
(43, 15, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:29:03', 'toby', '2018-05-29 07:20:12'),
(44, 15, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:29:18', 'toby', '2018-05-29 07:20:12'),
(45, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:32:18', 'toby', '2018-05-29 07:20:12'),
(46, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:32:31', 'toby', '2018-05-29 07:20:12'),
(47, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:34:59', 'toby', '2018-05-29 07:20:12'),
(48, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:37:03', 'toby', '2018-05-29 07:20:12'),
(49, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:37:20', 'toby', '2018-05-29 07:20:12'),
(50, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:37:26', 'toby', '2018-05-29 07:20:12'),
(51, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:40:05', 'toby', '2018-05-29 07:20:12'),
(52, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:40:11', 'toby', '2018-05-29 07:20:12'),
(53, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:41:54', 'toby', '2018-05-29 07:20:12'),
(54, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:42:00', 'toby', '2018-05-29 07:20:12'),
(55, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:42:09', 'toby', '2018-05-29 07:20:12'),
(56, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:44:44', 'toby', '2018-05-29 07:20:12'),
(57, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:45:00', 'toby', '2018-05-29 07:20:12'),
(58, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:45:26', 'toby', '2018-05-29 07:20:12'),
(59, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:46:31', 'toby', '2018-05-29 07:20:12'),
(60, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:54:32', 'toby', '2018-05-29 07:20:12'),
(61, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:54:43', 'toby', '2018-05-29 07:20:12'),
(62, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:55:03', 'toby', '2018-05-29 07:20:12'),
(63, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:55:14', 'toby', '2018-05-29 07:20:12'),
(64, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:55:21', 'toby', '2018-05-29 07:20:12'),
(65, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:55:26', 'toby', '2018-05-29 07:20:12'),
(66, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:55:39', 'toby', '2018-05-29 07:20:12'),
(67, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:55:47', 'toby', '2018-05-29 07:20:12'),
(68, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:56:00', 'toby', '2018-05-29 07:20:12'),
(69, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:56:05', 'toby', '2018-05-29 07:20:12'),
(70, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:56:17', 'toby', '2018-05-29 07:20:12'),
(71, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:56:24', 'toby', '2018-05-29 07:20:12'),
(72, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-25 09:56:31', 'toby', '2018-05-29 07:20:12'),
(73, 50, NULL, NULL, 1, 'toby', 1, 'toby', '2018-05-28 04:08:51', 'toby', '2018-05-29 07:20:12'),
(74, 50, NULL, NULL, 3, 'toby', 1, 'toby', '2018-05-28 04:10:48', 'toby', '2018-05-29 07:20:12'),
(75, 51, NULL, NULL, 1, 'toby', 1, 'toby', '2018-05-28 04:11:28', 'toby', '2018-05-29 07:20:12'),
(76, 51, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-28 04:12:41', 'toby', '2018-05-29 07:20:12'),
(77, 52, NULL, NULL, 1, 'toby', 1, 'toby', '2018-05-28 04:13:04', 'toby', '2018-05-29 07:20:12'),
(78, 52, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-28 04:17:24', 'toby', '2018-05-29 07:20:12'),
(79, 51, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-28 04:17:33', 'toby', '2018-05-29 07:20:12'),
(80, 2, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-28 04:17:44', 'toby', '2018-05-29 07:20:12'),
(81, 2, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-28 04:20:27', 'toby', '2018-05-29 07:20:12'),
(82, 5, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-28 04:20:38', 'toby', '2018-05-29 07:20:12'),
(83, 7, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-28 04:20:51', 'toby', '2018-05-29 07:20:12'),
(84, 1, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 03:13:56', 'toby', '2018-05-29 07:20:12'),
(85, 1, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 03:59:35', 'toby', '2018-05-29 07:20:12'),
(86, 2, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:03:54', 'toby', '2018-05-29 07:20:12'),
(87, 43, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:04:43', 'toby', '2018-05-29 07:20:12'),
(88, 15, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:06:16', 'toby', '2018-05-29 07:20:12'),
(89, 4, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:08:00', 'toby', '2018-05-29 07:20:12'),
(90, 39, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:08:33', 'toby', '2018-05-29 07:20:12'),
(91, 13, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:09:04', 'toby', '2018-05-29 07:20:12'),
(92, 8, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:09:47', 'toby', '2018-05-29 07:20:12'),
(93, 1, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:10:35', 'toby', '2018-05-29 07:20:12'),
(94, 1, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:11:19', 'toby', '2018-05-29 07:20:12'),
(95, 1, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:13:54', 'toby', '2018-05-29 07:20:12'),
(96, 16, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:14:30', 'toby', '2018-05-29 07:20:12'),
(97, 10, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:15:08', 'toby', '2018-05-29 07:20:12'),
(98, 9, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:15:44', 'toby', '2018-05-29 07:20:12'),
(99, 47, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:16:22', 'toby', '2018-05-29 07:20:12'),
(100, 42, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:17:03', 'toby', '2018-05-29 07:20:12'),
(101, 37, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 04:17:34', 'toby', '2018-05-29 07:20:12'),
(102, 1, NULL, NULL, 5, 'toby', 1, 'toby', '2018-05-29 06:44:46', 'toby', '2018-05-29 07:20:12'),
(103, 1, NULL, NULL, 6, 'toby', 1, 'toby', '2018-05-29 07:00:11', 'toby', '2018-05-29 07:20:12'),
(104, 1, NULL, NULL, 6, 'toby', 1, 'toby', '2018-05-29 07:00:21', 'toby', '2018-05-29 07:20:12'),
(105, 16, NULL, NULL, 3, 'toby', 1, 'toby', '2018-05-29 07:01:11', 'toby', '2018-05-29 07:20:12'),
(106, 15, NULL, NULL, 3, 'toby', 1, 'toby', '2018-05-29 07:01:29', 'toby', '2018-05-29 07:20:12'),
(107, 47, NULL, NULL, 6, 'toby', 1, 'toby', '2018-05-29 07:03:44', 'toby', '2018-05-29 07:20:12'),
(108, 9, NULL, NULL, 6, 'toby', 1, 'toby', '2018-05-29 07:03:52', 'toby', '2018-05-29 07:20:12'),
(109, 47, NULL, NULL, 6, 'toby', 1, 'toby', '2018-05-29 07:04:06', 'toby', '2018-05-29 07:20:12'),
(110, 34, NULL, NULL, 6, 'toby', 1, 'toby', '2018-05-29 07:04:38', 'toby', '2018-05-29 07:20:12'),
(111, 37, NULL, NULL, 6, 'toby', 1, 'toby', '2018-05-29 07:04:43', 'toby', '2018-05-29 07:19:16'),
(112, 37, NULL, NULL, 7, 'toby', 1, 'toby', '2018-05-29 07:29:01', 'toby', '2018-05-29 07:29:01'),
(113, 9, 14, NULL, 5, 'toby', 1, 'toby', '2018-05-30 03:05:46', 'toby', '2018-05-30 03:05:46'),
(114, 1, 7, NULL, 6, 'toby', 1, 'toby', '2018-05-30 03:07:03', 'toby', '2018-05-30 03:07:03'),
(115, 2, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-30 03:12:25', 'toby', '2018-05-30 03:12:25'),
(116, 52, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-30 03:12:51', 'toby', '2018-05-30 03:12:51'),
(117, NULL, NULL, NULL, 4, '低級測試員', 1, '低級測試員', '2018-05-31 01:03:00', '低級測試員', '2018-05-31 01:03:00'),
(118, 1, 15, NULL, 5, '低級測試員', 1, '低級測試員', '2018-05-31 05:50:03', '低級測試員', '2018-05-31 05:50:03'),
(119, 37, 13, NULL, 7, '低級測試員', 1, '低級測試員', '2018-05-31 05:53:28', '低級測試員', '2018-05-31 05:53:28'),
(120, 34, 11, NULL, 7, 'toby', 1, 'toby', '2018-05-31 05:59:06', 'toby', '2018-05-31 05:59:06'),
(121, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-05-31 05:59:10', 'toby', '2018-05-31 05:59:10'),
(122, 3, NULL, NULL, 2, 'toby', 1, 'toby', '2018-05-31 05:59:17', 'toby', '2018-05-31 05:59:17'),
(123, 53, NULL, NULL, 1, 'Peach', 1, 'Peach', '2018-05-31 06:20:24', 'Peach', '2018-05-31 06:20:24'),
(124, 54, NULL, NULL, 1, 'Peach', 1, 'Peach', '2018-05-31 06:24:35', 'Peach', '2018-05-31 06:24:35'),
(125, 54, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:27:08', 'Peach', '2018-05-31 06:27:08'),
(126, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:27:12', 'Peach', '2018-05-31 06:27:12'),
(127, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:27:38', 'Peach', '2018-05-31 06:27:38'),
(128, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:27:59', 'Peach', '2018-05-31 06:27:59'),
(129, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:28:25', 'Peach', '2018-05-31 06:28:25'),
(130, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:33:07', 'Peach', '2018-05-31 06:33:07'),
(131, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:39:05', 'Peach', '2018-05-31 06:39:05'),
(132, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:39:46', 'Peach', '2018-05-31 06:39:46'),
(133, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:39:55', 'Peach', '2018-05-31 06:39:55'),
(134, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:40:13', 'Peach', '2018-05-31 06:40:13'),
(135, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:44:31', 'Peach', '2018-05-31 06:44:31'),
(136, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:47:02', 'Peach', '2018-05-31 06:47:02'),
(137, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:47:20', 'Peach', '2018-05-31 06:47:20'),
(138, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:47:56', 'Peach', '2018-05-31 06:47:56'),
(139, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:50:47', 'Peach', '2018-05-31 06:50:47'),
(140, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:50:58', 'Peach', '2018-05-31 06:50:58'),
(141, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:52:01', 'Peach', '2018-05-31 06:52:01'),
(142, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:52:11', 'Peach', '2018-05-31 06:52:11'),
(143, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:54:59', 'Peach', '2018-05-31 06:54:59'),
(144, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:55:17', 'Peach', '2018-05-31 06:55:17'),
(145, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:55:22', 'Peach', '2018-05-31 06:55:22'),
(146, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:55:30', 'Peach', '2018-05-31 06:55:30'),
(147, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:55:40', 'Peach', '2018-05-31 06:55:40'),
(148, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:58:59', 'Peach', '2018-05-31 06:58:59'),
(149, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:59:20', 'Peach', '2018-05-31 06:59:20'),
(150, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 06:59:27', 'Peach', '2018-05-31 06:59:27'),
(151, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 07:02:44', 'Peach', '2018-05-31 07:02:44'),
(152, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 07:02:53', 'Peach', '2018-05-31 07:02:53'),
(153, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 07:05:18', 'Peach', '2018-05-31 07:05:18'),
(154, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 07:05:27', 'Peach', '2018-05-31 07:05:27'),
(155, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 07:09:15', 'Peach', '2018-05-31 07:09:15'),
(156, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 07:09:22', 'Peach', '2018-05-31 07:09:22'),
(157, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 07:09:28', 'Peach', '2018-05-31 07:09:28'),
(158, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 07:09:33', 'Peach', '2018-05-31 07:09:33'),
(159, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 07:09:43', 'Peach', '2018-05-31 07:09:43'),
(160, 53, NULL, NULL, 2, 'Peach', 1, 'Peach', '2018-05-31 07:09:50', 'Peach', '2018-05-31 07:09:50'),
(161, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-05-31 07:20:21', 'toby', '2018-05-31 07:20:21'),
(162, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-05-31 07:20:26', 'toby', '2018-05-31 07:20:26'),
(163, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-05-31 08:32:46', 'toby', '2018-05-31 08:32:46'),
(164, 13, 16, NULL, 5, 'toby', 1, 'toby', '2018-05-31 08:34:33', 'toby', '2018-05-31 08:34:33'),
(165, 15, 17, NULL, 5, 'toby', 1, 'toby', '2018-05-31 08:35:48', 'toby', '2018-05-31 08:35:48'),
(166, 1, 18, NULL, 5, 'toby', 1, 'toby', '2018-05-31 08:36:53', 'toby', '2018-05-31 08:36:53'),
(167, 1, 19, NULL, 5, 'toby', 1, 'toby', '2018-05-31 08:37:40', 'toby', '2018-05-31 08:37:40'),
(168, 1, 20, NULL, 5, 'toby', 1, 'toby', '2018-05-31 08:38:43', 'toby', '2018-05-31 08:38:43'),
(169, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-05-31 08:39:48', 'toby', '2018-05-31 08:39:48'),
(170, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-05-31 08:39:53', 'toby', '2018-05-31 08:39:53'),
(171, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-05-31 10:02:21', 'toby', '2018-05-31 10:02:21'),
(172, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-05-31 10:02:24', 'toby', '2018-05-31 10:02:24'),
(173, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-05-31 10:02:27', 'toby', '2018-05-31 10:02:27'),
(174, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-06-01 02:23:51', 'toby', '2018-06-01 02:23:51'),
(175, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-06-01 08:36:04', 'toby', '2018-06-01 08:36:04'),
(176, 2, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-01 09:16:16', 'toby', '2018-06-01 09:16:16'),
(177, 2, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-01 09:16:23', 'toby', '2018-06-01 09:16:23'),
(178, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-06-01 09:17:36', 'toby', '2018-06-01 09:17:36'),
(179, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-06-04 01:10:13', 'toby', '2018-06-04 01:10:13'),
(180, 2, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-04 01:10:22', 'toby', '2018-06-04 01:10:22'),
(181, 16, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-06 09:30:52', 'toby', '2018-06-06 09:30:52'),
(182, 15, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-06 09:31:00', 'toby', '2018-06-06 09:31:00'),
(183, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-06-07 03:31:02', 'toby', '2018-06-07 03:31:02'),
(184, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-07 05:55:01', 'toby', '2018-06-07 05:55:01'),
(185, 1, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-07 05:55:19', 'toby', '2018-06-07 05:55:19'),
(186, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:22:14', 'toby', '2018-06-08 01:22:14'),
(187, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:24:09', 'toby', '2018-06-08 01:24:09'),
(188, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:26:02', 'toby', '2018-06-08 01:26:02'),
(189, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:28:53', 'toby', '2018-06-08 01:28:53'),
(190, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:29:05', 'toby', '2018-06-08 01:29:05'),
(191, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:29:09', 'toby', '2018-06-08 01:29:09'),
(192, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:29:14', 'toby', '2018-06-08 01:29:14'),
(193, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:29:27', 'toby', '2018-06-08 01:29:27'),
(194, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:30:45', 'toby', '2018-06-08 01:30:45'),
(195, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:30:51', 'toby', '2018-06-08 01:30:51'),
(196, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:31:05', 'toby', '2018-06-08 01:31:05'),
(197, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:31:13', 'toby', '2018-06-08 01:31:13'),
(198, 53, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 01:43:46', 'toby', '2018-06-08 01:43:46'),
(199, 56, NULL, NULL, 1, 'toby', 1, 'toby', '2018-06-08 02:00:55', 'toby', '2018-06-08 02:00:55'),
(200, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-06-08 02:01:26', 'toby', '2018-06-08 02:01:26'),
(201, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-06-08 02:01:34', 'toby', '2018-06-08 02:01:34'),
(202, NULL, NULL, NULL, 4, 'toby', 1, 'toby', '2018-06-08 02:02:36', 'toby', '2018-06-08 02:02:36'),
(203, 54, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 02:16:34', 'toby', '2018-06-08 02:16:34'),
(204, 55, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 02:18:59', 'toby', '2018-06-08 02:18:59'),
(205, 55, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 02:20:17', 'toby', '2018-06-08 02:20:17'),
(206, 55, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 02:27:49', 'toby', '2018-06-08 02:27:49'),
(207, 55, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 02:30:32', 'toby', '2018-06-08 02:30:32'),
(208, 57, NULL, NULL, 1, 'toby', 1, 'toby', '2018-06-08 02:31:27', 'toby', '2018-06-08 02:31:27'),
(209, 57, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 02:34:11', 'toby', '2018-06-08 02:34:11'),
(210, 55, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 03:06:27', 'toby', '2018-06-08 03:06:27'),
(211, 55, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 03:08:50', 'toby', '2018-06-08 03:08:50'),
(212, 55, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 03:19:41', 'toby', '2018-06-08 03:19:41'),
(213, 55, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 03:21:04', 'toby', '2018-06-08 03:21:04'),
(214, 54, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 03:23:29', 'toby', '2018-06-08 03:23:29'),
(215, 54, NULL, NULL, 2, 'toby', 1, 'toby', '2018-06-08 03:27:04', 'toby', '2018-06-08 03:27:04');

-- --------------------------------------------------------

--
-- 資料表結構 `wms_userdata`
--

CREATE TABLE `wms_userdata` (
  `ud_id` int(11) NOT NULL COMMENT '使用者編號',
  `ud_name` varchar(50) NOT NULL COMMENT '使用者名稱',
  `ud_status` tinyint(1) DEFAULT '1' COMMENT '使用者狀態 0.停用 1.啟用',
  `ud_admin` tinyint(1) DEFAULT '0' COMMENT '是否為管理員 0.否 1.是',
  `ud_account` varchar(50) NOT NULL COMMENT '使用者登入帳號',
  `ud_password` varchar(50) NOT NULL COMMENT '使用者登入密碼',
  `ud_last_login` datetime DEFAULT NULL COMMENT '最後一次登入時間',
  `isflag` tinyint(1) DEFAULT '1' COMMENT '刪除註記 0.已刪除 1.未刪除',
  `create_user` varchar(50) DEFAULT 'bbin' COMMENT '建立人',
  `create_date` timestamp NULL DEFAULT NULL COMMENT '建立日期',
  `last_update_user` varchar(50) DEFAULT 'bbin' COMMENT '最後異動人',
  `last_update_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '最後異動日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='後台使用者資料';

--
-- 資料表的匯出資料 `wms_userdata`
--

INSERT INTO `wms_userdata` (`ud_id`, `ud_name`, `ud_status`, `ud_admin`, `ud_account`, `ud_password`, `ud_last_login`, `isflag`, `create_user`, `create_date`, `last_update_user`, `last_update_date`) VALUES
(1, 'MCD.web - Toby', 1, 1, 'toby', '0', '2018-06-08 11:14:47', 1, 'bbin', '2018-05-18 08:28:30', 'bbin', '2018-06-08 03:14:47'),
(16, 'MCD.web - Adosa', 1, 0, 'Adosa', '1qaz2wsx', '2018-06-01 17:14:55', 1, 'bbin', '2018-05-31 07:27:42', 'bbin', '2018-06-01 09:14:55'),
(17, 'MCD.web - Celia', 1, 0, 'Celia', '1qaz2wsx', '2018-06-01 17:14:47', 1, 'bbin', '2018-05-31 07:28:14', 'bbin', '2018-06-01 09:14:47'),
(18, 'MCD.web - Fanny', 1, 0, 'Fanny', '1qaz2wsx', '2018-06-01 17:14:39', 1, 'bbin', '2018-05-31 07:29:22', 'bbin', '2018-06-01 09:14:39'),
(19, 'MCD.web - Lisa', 1, 0, 'Lisa', '1qaz2wsx', '2018-06-01 17:14:31', 1, 'bbin', '2018-05-31 07:29:51', 'bbin', '2018-06-01 09:14:31'),
(20, 'MCD.web - Clare', 1, 0, 'Clare', '1qaz2wsx', '2018-06-01 17:14:22', 1, 'bbin', '2018-05-31 07:30:06', 'bbin', '2018-06-01 09:14:22'),
(21, 'MCD.web - Liying', 1, 0, 'Liying', '1qaz2wsx', '2018-06-01 17:14:14', 1, 'bbin', '2018-05-31 07:30:29', 'bbin', '2018-06-01 09:14:14'),
(22, 'MCD.web - Miona', 1, 0, 'Miona', '1qaz2wsx', '2018-06-01 17:13:08', 1, 'bbin', '2018-05-31 07:30:57', 'bbin', '2018-06-01 09:13:08'),
(23, 'MCD.web - Quni', 1, 1, 'Quni', '1qaz2wsx', NULL, 1, 'bbin', '2018-05-31 07:31:21', 'bbin', '2018-06-01 09:13:52'),
(24, 'MCD.web - Rita', 1, 0, 'Rita', '1qaz2wsx', '2018-06-01 17:12:56', 1, 'bbin', '2018-05-31 07:31:41', 'bbin', '2018-06-01 09:12:56'),
(25, 'MCD.web - Wilson', 1, 0, 'Wilson', '1qaz2wsx', '2018-06-01 17:12:46', 1, 'bbin', '2018-05-31 07:32:00', 'bbin', '2018-06-01 09:12:46'),
(26, 'MCD.web - Yuna', 1, 1, 'Yuna', '1qaz2wsx', '2018-06-01 17:12:37', 1, 'bbin', '2018-05-31 07:32:16', 'bbin', '2018-06-01 09:13:45'),
(27, 'MCD.web - Ruby', 1, 0, 'Ruby', '1qaz2wsx', '2018-06-01 17:12:26', 1, 'bbin', '2018-05-31 07:32:36', 'bbin', '2018-06-01 09:12:26'),
(28, 'MCD.web - Bandy', 1, 0, 'Bandy', '1qaz2wsx', '2018-06-01 17:12:16', 1, 'bbin', '2018-05-31 07:32:55', 'bbin', '2018-06-01 09:12:16'),
(29, 'MCD.web - Blue', 1, 0, 'Blue', '1qaz2wsx', '2018-06-01 17:12:07', 1, 'bbin', '2018-05-31 07:33:15', 'bbin', '2018-06-01 09:12:07'),
(30, 'MCD.web - Eve', 1, 0, 'Eve', '1qaz2wsx', '2018-06-01 17:11:59', 1, 'bbin', '2018-05-31 07:33:32', 'bbin', '2018-06-01 09:11:59'),
(31, 'MCD.web - Iris', 1, 0, 'Iris', '1qaz2wsx', '2018-06-01 17:11:51', 1, 'bbin', '2018-05-31 07:33:54', 'bbin', '2018-06-01 09:11:51'),
(32, 'MCD.web - iTrong', 1, 0, 'iTrong', '1qaz2wsx', NULL, 1, 'bbin', '2018-05-31 07:34:22', 'bbin', '2018-05-31 07:34:22'),
(33, 'MCD.web - Judy', 1, 0, 'Judy', '1qaz2wsx', '2018-06-01 17:11:42', 1, 'bbin', '2018-05-31 07:34:40', 'bbin', '2018-06-01 09:11:42'),
(34, 'MCD.web - Peach', 1, 0, 'Peach', '1qaz2wsx', '2018-06-01 17:11:32', 1, 'bbin', '2018-05-31 07:35:01', 'bbin', '2018-06-01 09:11:32'),
(35, 'MCD.web - Via', 1, 0, 'Via', '1qaz2wsx', '2018-06-01 17:11:22', 1, 'bbin', '2018-05-31 07:35:23', 'bbin', '2018-06-01 09:11:22'),
(36, 'MCD.web - Victoria', 1, 0, 'Victoria', '1qaz2wsx', '2018-06-01 17:11:11', 1, 'bbin', '2018-05-31 07:35:49', 'bbin', '2018-06-01 09:11:11');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `errorlog`
--
ALTER TABLE `errorlog`
  ADD PRIMARY KEY (`log_id`);

--
-- 資料表索引 `wms_modelrecord`
--
ALTER TABLE `wms_modelrecord`
  ADD PRIMARY KEY (`mr_id`);

--
-- 資料表索引 `wms_projectdata`
--
ALTER TABLE `wms_projectdata`
  ADD PRIMARY KEY (`pd_id`);

--
-- 資料表索引 `wms_systemparameter`
--
ALTER TABLE `wms_systemparameter`
  ADD PRIMARY KEY (`sp_id`);

--
-- 資料表索引 `wms_transaction_record`
--
ALTER TABLE `wms_transaction_record`
  ADD PRIMARY KEY (`tr_id`);

--
-- 資料表索引 `wms_userdata`
--
ALTER TABLE `wms_userdata`
  ADD PRIMARY KEY (`ud_id`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `errorlog`
--
ALTER TABLE `errorlog`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '訊息編號', AUTO_INCREMENT=1486;

--
-- 使用資料表 AUTO_INCREMENT `wms_modelrecord`
--
ALTER TABLE `wms_modelrecord`
  MODIFY `mr_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '版型紀錄編號', AUTO_INCREMENT=21;

--
-- 使用資料表 AUTO_INCREMENT `wms_projectdata`
--
ALTER TABLE `wms_projectdata`
  MODIFY `pd_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '版型編號', AUTO_INCREMENT=58;

--
-- 使用資料表 AUTO_INCREMENT `wms_systemparameter`
--
ALTER TABLE `wms_systemparameter`
  MODIFY `sp_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '參數編號', AUTO_INCREMENT=2;

--
-- 使用資料表 AUTO_INCREMENT `wms_transaction_record`
--
ALTER TABLE `wms_transaction_record`
  MODIFY `tr_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '記錄編號', AUTO_INCREMENT=216;

--
-- 使用資料表 AUTO_INCREMENT `wms_userdata`
--
ALTER TABLE `wms_userdata`
  MODIFY `ud_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '使用者編號', AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
