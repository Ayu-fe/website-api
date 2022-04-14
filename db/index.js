const mysql = require('mysql')

module.exports = mysql.createConnection({
  host: '101.42.250.40',
  user: 'root',
  password: '@Wysh1979474549',
  database: 'blog',
  port: '3306',
})