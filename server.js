const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const USER = { kullanici: 'iboucak', sifre: '20092002' };

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use(session({
    secret: 'gizliAnahtar',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Giriş endpointi
app.post('/api/login', (req, res) => {
    const { kullanici, sifre } = req.body;
    if (kullanici === USER.kullanici && sifre === USER.sifre) {
        req.session.user = kullanici;
        return res.json({ success: true });
    }
    res.status(401).json({ message: 'Kullanıcı adı veya şifre yanlış!' });
});

// Admin session kontrolü
app.get('/api/admin', (req, res) => {
    if (req.session.user) {
        res.json({ success: true });
    } else {
        res.status(401).json({ message: 'Yetkisiz erişim!' });
    }
});

// JSON'dan veri okuma endpointi
app.get('/api/data', (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: 'Yetkisiz erişim!' });
    }
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) return res.status(500).json({ message: 'Veri okunamadı!' });
        res.json(JSON.parse(data));
    });
});

app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server çalışıyor: http://localhost:${PORT}`);
});