#! /usr/bin/env node

// console.log('demo-cli', process.cwd())

let name = process.argv[2] || 'World'
console.log(`Hello ${name}`)

// const path = require('path')
// const fs = require('fs')

// console.log('process.argv', process.argv)
// let filePath = path.resolve(process.cwd(), '123.txt')
// fs.writeFile(filePath, process.argv[1], function(err) {
//     // console.log("callback");
//     if(err) {
//         return console.log('创建文件失败')
//     }
//     console.log("创建文件成功");
// })
