const express = require('express');

const mainRouter = express.Router();

//cek koneksi
//http://localhost:7070/
mainRouter.get('/', (req, res) => {
  res.json({
    msg: 'sudah berjalan dan berhasil',
  });
});

//export
module.exports = mainRouter;
