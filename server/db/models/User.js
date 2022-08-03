const Sequelize = require('sequelize')
const db = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 5;

const User = db.define('user', {
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  password: {
    type: Sequelize.STRING,
  },
  addressStreet: {
    type: Sequelize.STRING,
  },
  addressCity: {
    type: Sequelize.STRING,
  },
  addressState: {
    type: Sequelize.STRING,
  },
  addressCountry: {
    type: Sequelize.STRING,
  },
  addressZip: {
    type: Sequelize.INTEGER,
    validate: {
      len: [5]
    }
  },
  // shoppingCart: {
  //   type: Sequelize.ARRAY,
  // },
  // sellerRating: {
  //   type: Sequelize.NUMBER,
  // },
  // favoritedItems: {
  //   type: Sequelize.ARRAY,
  // },
  // wishList: {
  //   type: Sequelize.ARRAY,
  // },
  // history: {
  //   type: Sequelize.ARRAY,
  // },
  ccName: {    
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  ccNumber: {
    type: Sequelize.INTEGER,
    validate: {
      isCreditCard: true,
    }
  },
  ccSecurityCode: {
    type: Sequelize.INTEGER,
    validate: {
      len: [3,4],
    }
  },
  ccExpiryMonth: {
    type: Sequelize.INTEGER,
  },
  ccExpiryYear: {
    type: Sequelize.INTEGER,
  },
  ccPostalCode: {
    type: Sequelize.INTEGER,
    validate: {
      len: [5]
    }
  }
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function(candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
}

User.prototype.generateToken = function() {
  return jwt.sign({id: this.id}, process.env.JWT)
}

/**
 * classMethods
 */
User.authenticate = async function({ username, password }){
    const user = await this.findOne({where: { username }})
    if (!user || !(await user.correctPassword(password))) {
      const error = Error('Incorrect username/password');
      error.status = 401;
      throw error;
    }
    return user.generateToken();
};

User.findByToken = async function(token) {
  try {
    const {id} = await jwt.verify(token, process.env.JWT)
    const user = User.findByPk(id)
    if (!user) {
      throw 'nooo'
    }
    return user
  } catch (ex) {
    const error = Error('bad token')
    error.status = 401
    throw error
  }
}

/**
 * hooks
 */
const hashPassword = async(user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
}

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)
User.beforeBulkCreate(users => Promise.all(users.map(hashPassword)))
