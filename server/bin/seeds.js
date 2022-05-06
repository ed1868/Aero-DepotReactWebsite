const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Roles = require('../models/Roles');

const bcryptSalt = 12;

require('../configs/database');

let seedUsers = [
  {
    username: 'superAdmin',
    password: bcrypt.hashSync('root', bcrypt.genSaltSync(bcryptSalt)),
    roleId: 1
  },

  {
    username: 'admin',
    password: bcrypt.hashSync('root', bcrypt.genSaltSync(bcryptSalt)),
    roleId: 2
  },
  {
    username: 'client',
    password: bcrypt.hashSync('foo', bcrypt.genSaltSync(bcryptSalt)),
    roleId: 3
  }
]

let roleTables = [
  {
    roleId: 1,
    permissions: "superAdmin"
  },
  {
    roleId: 2,
    permission: "admin"
  },
  {
    roleId: 3,
    permission: "userOne"
  }
]

// let users = [
//   {
//     username: 'alice',
//     password: bcrypt.hashSync('alice', bcrypt.genSaltSync(bcryptSalt)),
//   },
//   {
//     username: 'bob',
//     password: bcrypt.hashSync('bob', bcrypt.genSaltSync(bcryptSalt)),
//   },
// ]

// User.deleteMany()
//   .then(() => {
//     return User.create(users)
//   })
//   .then(usersCreated => {
//     console.log(`${usersCreated.length} users created with the following id:`)
//     console.log(usersCreated.map(u => u._id))
//   })
//   .then(() => {
//     // Close properly the connection to Mongoose
//     mongoose.disconnect()
//   })
//   .catch(err => {
//     mongoose.disconnect()
//     throw err
//   })
