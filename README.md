﻿# mywebsite-backend

Proje Açıklaması
Bu proje, kişisel portfolyo web sitesi için geliştirilmiş bir Node.js tabanlı backend uygulamasıdır.
Amaç, statik bir portfolyo sitesini dinamik ve yönetilebilir hale getirmektir.

Özellikler
Kullanıcı Girişi:
Admin paneline erişim için kullanıcı adı ve şifre ile oturum açma sistemi.
Session Yönetimi:
Giriş yapan kullanıcılar için session/cookie ile güvenli oturum yönetimi.
Dinamik Veri:
Profil, eğitim, deneyim, yetenekler, portfolyo ve mesajlar gibi veriler bir JSON dosyasında tutulur ve API üzerinden dinamik olarak çekilir.
Admin Paneli:
Giriş yapan admin, site içeriğini (profil, eğitim, deneyim, yetenekler, portfolyo, mesajlar) güncelleyebilir.
Çıkış:
Admin panelinden güvenli çıkış yapılabilir.
Ziyaretçi İstatistikleri:
Siteye gelen ziyaretçi sayısı ve son ziyaret zamanı gibi bilgiler gösterilebilir.
CORS ve Güvenlik:
API endpointleri sadece oturum açmış kullanıcılar tarafından erişilebilir.
Kullanılan Teknolojiler
Node.js & Express.js
Session yönetimi için express-session
JSON dosyası ile veri saklama
jQuery ile dinamik frontend işlemleri
Bootstrap ile responsive tasarım

NOT: backend sistemi  localhostta çalışır.
