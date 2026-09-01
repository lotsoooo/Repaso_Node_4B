const express = require('express');

const app = express();

const PORT = 3000;


// Configurar EJS
app.set('view engine', 'ejs');

// RUTAS
app.get('/', (req, res) => {
    res.render('index', { title: 'Página de Inicio' });
});

app.get('/servicios', (req, res) => {
    res.render('servicios');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

app.get('/nosotros', (req, res) => {
    res.render('nosotros');
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});