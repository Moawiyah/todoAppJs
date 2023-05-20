//CommonJS require
const readline = require('readline')
const { tasks } = require('./data.js')

const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});   


module.exports = { inquirer,tasks }
















