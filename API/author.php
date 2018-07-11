<?php
header("Content-type: text/html; charset=utf-8");
$urlA = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
$urlH = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
// $res = "{urla:".$urlA.",urlh:".$urlH."}";
// $res = "{'urla':".file_get_contents($urlA).",'urlh':".file_get_contents($urlH)."}";
// echo file_get_contents($res);
$a = file_get_contents($urlA);
$h = file_get_contents($urlH);

// $res=array($a,$h);
// foreach ($res as $val) {
// 	echo $val;}
echo $h;
?>