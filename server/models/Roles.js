const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rolesSchema = new Schema(
  {
    roleId: {
      type: Interger,
      emum: [1, 2, 3, 4]
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

const Role = mongoose.model('Role', rolesSchema);
module.exports = Role
