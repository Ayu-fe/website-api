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

module.exports = {
  getBlogList
}