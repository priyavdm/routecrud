const express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password123',
    database : 'crud'
  });

var cors =require('cors') 
   
app=express()
app.use(express.json())
app.use(cors())
connection.connect();

app.get('/getall',(req,res)=>{
    connection.query('Select * from crud where isActive=1;', function(error,results){
       if(error){
           console.log(error);
       }
       console.log('The solution is:',results);
       res.json(results);
    })
   })

   app.post('/insert',(req,res)=>{
    connection.query('insert into crud (username,roles,gender,location) values(?,?,?,?)',[req.body.username,req.body.roles,req.body.gender,req.body.location],function(error,results){
       if(error){
        console.log(error);
       }
       console.log('The solution is:', results);
       res.json(results);
    }
    )
    })

    app.get('/edit/:id',(req,res)=>{
        connection.query('select * from crud where id=?',[req.params.id],function(error,results){
           if(error){
              console.log(error);
           }
           console.log('The solution is:', results);
           res.json(results);
        })
     })

     app.put('/update',(req,res)=>{
        connection.query('update crud set username=?,roles=?,gender=?,location=? where id=?',[req.body.username,req.body.roles,req.body.gender,req.body.location,req.body.id],function(error,results){
           if(error){
              console.log(error);
           }
           console.log(results);
           res.json(results);
        })
     })

     app.put('/delete',(req,res)=>{
        connection.query('update crud set isActive=? where id=?',[0,req.body.id],function(error,results){
           if(error){
              console.log(error);
           }
           console.log('the solution is:',results);
           res.json(results);
        })
     })


   app.listen(3000,()=>{
    console.log('listening on port 3000');
   })