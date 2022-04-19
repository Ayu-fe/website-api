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

const addBlog = (blog) => {
  console.log(blog)
  return new Promise((resolve, reject) => {
    const { title, content, create_time, desc, tag } = blog
    connect.query('INSERT INTO blog SET ?', {
      title,
      content,
      create_time,
      update_time: create_time,
      desc,
      view_count: 0,
      like_count: 0,
      tag,
    }, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve({})
      }
    })
  })
}

module.exports = {
  getBlogList,
  getBlogById,
  addBlog
}