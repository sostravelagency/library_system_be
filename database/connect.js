// const { Sequelize } = require('sequelize');

// const sequelize= new Sequelize({
//     host: "localhost",
//     username: "root",
//     password: "",
//     database: "quan_ly_thu_vien"
// })

const mysql= require("mysql2/promise")

const connection= mysql.createPool({
    host: "sql479.main-hosting.eu",
    user: "u291392387_root10",
    password: "Giangvippro1!",
    database: "u291392387_library_system",
})

module.exports= connection