const express = require('express');
const mysql = require('mysql');

const app = express();

// Configuração do meu mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: 'lenovo123',
  database: ''
})

// Conexão com MySQL
connection.connect(err => {
  if (err) {
    console.error('Erro ao connectar ao banco de dados:', err);
    return;
  }
  console.log('Conectando ao banco de dados MySQL!');
});

// Rota para buscar todos os usuários
app.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuarios';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar usuários' });
      return;
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;