const express = require('express');

const mainRouter = express.Router();
const usersRouter = require('./user.js');

const authRouter = require('./auth');
//menghubungkan router ke produk

const prefix = '/new_coffe_time';

//menyambungkan router ke sub router
mainRouter.use(`${prefix}/user`, usersRouter);
mainRouter.use(`${prefix}/auth`, authRouter);

//cek koneksi
//http://localhost:7070/
mainRouter.get('/', (req, res) => {
  res.json({
    msg: 'sudah berjalan dan berhasil',
  });
});

//export
module.exports = mainRouter;
