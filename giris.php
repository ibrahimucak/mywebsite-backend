<?php
session_start();
//session durumunu kontrol eden bir if yaz.
$admin_kullanici = "İbo";
$admin_sifre = "20092002";
// try {
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $kullanici = $_POST["kullanici"] ?? '';
    $sifre = $_POST["sifre"] ?? '';
    //eğer kullanıcı adı boşsa boş bırakamazsın yaz
    if (empty($kullanici)) {
        echo "Kullanıcı adını boş bırakamazsın ibo";
       // exit;
    }

    if ($kullanici === $admin_kullanici && $sifre === $admin_sifre) {
        $_SESSION["giris"] = true;
        header("Location: admin.html"); //yönlendirdiği yer burası
       // exit();
    } else {
        // KULLANICI GİREMİCEK BURDA
        echo "Kullanıcı adı veya şifre yanlış iboo";
       // exit();
    }
// } else{
//     echo "get isteği yaıldı";
// }
// }
// catch (Exception $e){
//     //hata var ise burada yakalanır
//     echo "mesaj -> ".$e->getMessage(); //hata çıktısı üretilir
// }


