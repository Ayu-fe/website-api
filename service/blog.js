const connect = require('../db/index')

const getBlogList = () => {
  return new Promise((resolve, reject) => {
    connect.query('SELECT * FROM blog', (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

const getBlogById = (id) => {
  return new Promise((resolve, reject) => {
    connect.query(`SELECT * FROM blog WHERE id = ${id};`, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result[0] || {})
      }
    })
  })
}

module.exports = {
  getBlogList,
  getBlogById
}