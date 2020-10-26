<?php
return [
	// 密鑰
	'secret' => env('JWT_SECRET', 'XKYHo6g9kwWxc0Yca9J3MP5MNJPIWjeL'),
	// 加密演算法
	'algo' => 'HS512',
	// 伺服器名稱
	'servername' => 'BBIN',



	// 前端路徑
	// 'webbbin_front' => 'http://192.168.161.130/webdev/webbbin_new/Front',
	// 'webbbin_front' => 'http://art.bbinpartner.com',
	'webbbin_front' => 'http://web.bbinpartner.com',
	// 後端路徑
	// 'webbbin_back' => 'http://192.168.161.130:8081',
	// 'webbbin_back' => 'http://admin.bbinpartner.com',
	'webbbin_back' => 'http://wms.bbinpartner.com',
	// 租網路徑
	// 'rentSearch' => 'http://192.168.161.130:8082',
	// 'rentSearch' => 'http://art.rentsearch.com',
	'rentSearch' => 'http://rent.bbinpartner.com',



	// 虛擬機IP
	'ftp_upload_host' => '43.251.127.73',
	// ftp帳號
	'ftp_acc' => 'arttest',
	// ftp密碼
	'ftp_pwd' => '$au041l $',
];




