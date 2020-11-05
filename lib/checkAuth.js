const { AuthenticationError } = require('apollo-server')

const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config.js')

const checkAuth = (ctx) => {
  const authHeader = ctx.req.headers.authorization

  if(authHeader) {
    // handle Bearer
    const token = authHeader.split('Bearer ')[1]
    
    if(token) {
      try {
        const user = jwt.verify(token, SECRET_KEY)
        return user
      }
      catch(err) {
        throw new AuthenticationError('Invalid/Expired token!')
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]")
  } 
  else {
    throw new Error('Authorization header must be provided!')
  }
}

module.exports = checkAuth