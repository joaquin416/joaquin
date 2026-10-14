const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// Sirve todos los archivos estáticos (html, css, js, imagenes)
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});