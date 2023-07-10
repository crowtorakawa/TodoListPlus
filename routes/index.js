// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入 todos 模組程式碼
const todos = require('./modules/todos')
const home = require('./modules/home')
const users = require('./modules/users')

router.use('/', home)
router.use('/todos', todos)
router.use('/users', users)

// 準備引入路由模組
// 匯出路由器
module.exports = router

// 將網址結構符合 /todos 字串開頭的 request 導向 todos 模組
