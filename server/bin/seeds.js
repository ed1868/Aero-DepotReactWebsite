const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Role = require('../models/Roles');

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

Role.deleteMany()
  .then(payload => {
    console.log(`SUCCESSFUL PAYLOAD : ${payload}`);
    return Role.create(roleTables);
  })
  .then(rolesCreated => {
    console.log(`${rolesCreated.length} users have been created with the following Id's `);
    rolesCreated.map(role => {
      console.log(`ROLE IDS : ${role._id}`);
    })
  })
  .catch(err => {
    if (err) {
      console.log(`YOU HAVE ENCOUNTERED AN ERROR IN THE CREATION OF SEEDS :: ${err}`);
      mongoose.disconnect()
      throw err
    }
  })

User.deleteMany()
  .then(payload => {
    console.log(`SUCCESSFUL PAYLOAD : ${payload}`);
    return User.create(seedUsers)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users have been created with the following Id's `);
    usersCreated.map(user => {
      console.log(`USER ID : ${user._id}`);
    })
  })
  .catch(err => {
    if (err) {
      console.log(`YOU HAVE ENCOUNTERED AN ERROR IN THE CREATION OF SEEDS :: ${err}`);
      mongoose.disconnect()
      throw err
    }
  })


