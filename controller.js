'use strict'

var mysql = require('mysql')

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: 'todolist'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Connect');
});

var response = require('./response');

exports.index = function(req,res){
    response.ok('Success' ,res)
};

exports.getList = function(req,res){
    conn.query('SELECT id_list , title , description , status.status  FROM todolist JOIN status where todolist.id_status = status.id_status ' , function (error, rows,fields){
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }  
        });
};

exports.getListbyID = function(req,res){
    let id = req.params.id;
    conn.query('SELECT * FROM todolist where id_list = ?' ,[id] , function (error, rows,fields){
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.postList = function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    var id_status = req.body.id_status;

    conn.query('INSERT INTO todolist (nama,usia,id_status) VALUES(?,?,?)',
        [title,description,id_status],
        function(error,rows,fields){
            if(error) throw error;

            response.ok('Berhasil Insert Data',res)
        });
};

exports.putList = function(req,res){
    var id = req.params.id
    var title = req.body.title;
    var description = req.body.description;
    var id_status = req.body.id_status;
    
    conn.query('UPDATE todolist SET list = ? , description = ? , id_status = ? ',
        [title,description,id_status,id],
        function(error,rows,fields){
            if(error) throw error;

            response.ok('Berhasil Update Data' ,res)
        });
};;

exports.deleteListbyid = function(req,res){
    let id = req.params.id;
    conn.query('DELETE FROM todolist where id_status = ?',[id],
    function (error,rows,fields){
        if(error) throw error;
        
        response.ok('Berhasil Menghapus Data',res);
    }) ;
};

exports.getStatus = function(req,res){
    conn.query('SELECT * FROM status ' , function (error, rows,fields){
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }  
        });
};


