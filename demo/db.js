/**
 * Created by hades on 23/11/2016.
 */
var Sequelize=require('sequelize');
var db= new Sequelize('postgres://postgres:123456@localhost:5432/hades');




module.exports=db;