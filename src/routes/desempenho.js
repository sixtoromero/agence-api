const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');


router.get('/consultoresAll', (req, res) => {
    
    //let sql = 'SELECT  u.co_usuario, u.no_usuario FROM  CAO_USUARIO u INNER JOIN PERMISSAO_SISTEMA p ON u.co_usuario = p.co_usuario WHERE p.co_sistema = 1 AND p.in_ativo = "S" AND P.co_tipo_usuario IN (0,1,2)'
    mysqlConnection.query(`SELECT  u.co_usuario, u.no_usuario FROM  CAO_USUARIO u 
                            INNER JOIN PERMISSAO_SISTEMA p ON u.co_usuario = p.co_usuario 
                            WHERE p.co_sistema = 1 AND p.in_ativo = "S" AND P.co_tipo_usuario IN (0,1,2)`, (err, rows, fields) => {
        if (err){
            console.log(err);
        }

        res.json(rows);
    });
});

router.get('/consultores/:co_usuario/:data_emissao', (req, res) => {
  
  //const {co_usuario, data_emissao} = req.body;
  const { co_usuario, data_emissao } = req.params;
  
  console.log('co_usuario', co_usuario);
  console.log('data_emissao', data_emissao);

  const query = `
    CALL SP_GetRelatorio(?, ?);
  `
  mysqlConnection.query(query, [co_usuario, data_emissao], (err, rows, fields) => {
    if (err) {
      console.log(err);
    }

    res.json(rows[0]);

  });
});

router.get('/consultores/:co_usuario', (req, res) => {
  const { co_usuario } = req.params;
  mysqlConnection.query('SELECT  * FROM  CAO_USUARIO WHERE co_usuario = ?', [co_usuario], (err, rows, fields) => {
    if (err){
      console.log(err);
    }

    res.json(rows);

  });
});

router.post('/aviso', (req, res) => {
  
  const {co_aviso, ds_aviso} = req.body;

  const query = `
    CALL AvisoAddOrEdit(?, ?);
  `
  mysqlConnection.query(query, [co_aviso, ds_aviso], (err, rows, fields) => {
    if (err) {
      console.log(err);
    }

    res.json({
      Status: 'Aviso agregado'
    });
  });
});

router.put('/aviso/:co', (req, res) => {
  
  const {co_aviso, ds_aviso} = req.body;
  const { co } = req.params;
  
  console.log('CO', co);

  const query = `
    CALL AvisoAddOrEdit(?, ?);
  `
  mysqlConnection.query(query, [co, ds_aviso], (err, rows, fields) => {
    if (err) {
      console.log(err);
    }

    res.json({
      Status: 'Aviso actualizado'
    });
  });
});

router.delete('/aviso/:co', (req, res) => {
  
  const { co } = req.params;
  
  console.log('CO', co);

  mysqlConnection.query('delete from cao_aviso where co_aviso = ?', [co], (err, rows, fields) => {
    if (err) {
      console.log(err);
    }

    res.json({
      Status: 'Aviso eliminado'
    });
  });
});

module.exports = router;