const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')

const {
  validateLoginInput,
  validateRegisterInput,
  errorsMes,
} = require('../../lib/validators.js')
const { SECRET_KEY, } = require('../../config.js')
const User = require('../../models/User')
const makeCreatedAt = require('../../lib/makeCreatedAt.js')

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    username: user.username,
  }
  const res = jwt.sign(payload, SECRET_KEY, {
    expiresIn: '1h',
  })
  return res
}

const login = async(_, { username, password, }) => {
  const { errors, isValid, } = validateLoginInput({ username, password, })
  
  if(!isValid) {
    throw new UserInputError('Error', { errors, })
  }

  const user = await User.findOne({ username, })
  if(!user) {
    errors = {...errors, general: errorsMes.userNotFound}
    throw new UserInputError(errorsMes.userNotFound, { errors, })
  }

  const matchPassword = await bcrypt.compare(password, user.password)
  if(!matchPassword) {
    errors = {...errors, general: errorsMes.userWrongCredentials}
    throw new UserInputError(errorsMes.userWrongCredentials, { errors, })
  }

  const token = generateToken(user)
  return ({
    ...user._doc,
    id: user._id,
    token,
  })
}

const register = async(_, {
  registerInput: {
    username, email, password, 
  }
}) => {
  const {
    errors, isValid,
  } = validateRegisterInput({ username, email, password, })

  if(!isValid) {
    throw new UserInputError('Error', { errors, })
  }

  const user = await User.findOne({ username, })
  if(user) {
    throw new UserInputError(errorsMes.errorsMes, {
      errors: { username: errorsMes.usernameBeTaken, }
    })
  }

  const cryptedPassword = await bcrypt.hash(password, 12)
  const newUser = new User({
    email,
    username,
    password: cryptedPassword,
    createdAt: makeCreatedAt(),
  })

  const res = await newUser.save()
  const token = generateToken(res)

  return ({
    ...res._doc,
    id: res._id,
    token,
  })
}

const resolvers = {
  Mutation: {
    login,
    register,
  },
}

module.exports = resolvers