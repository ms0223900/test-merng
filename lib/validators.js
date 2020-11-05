const checkEmailRegExp = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/

const errorsMes = {
  usernameEmpty: 'Username must not be empty',
  userNotFound: 'User not found',
  userWrongCredentials: 'Wrong crendetials',
  usernameBeTaken: 'Username is taken',
  emailEmpty: 'Email must not be empty',
  emailInvalid: 'Email must be a valid email address',
  passwordEmpty: 'Password must not empty',
}

const checkIsValidByErrors = (errors={}) => (
  Object.keys(errors).length === 0
)

const validateRegisterInput = ({
  username, email, password,
}) => {
  let errors = {}
  
  const isUsernameEmpty = username.trim() === ''
  const isEmailEmpty = email.trim() === ''
  const isPasswordEmpty = password === ''

  if(isUsernameEmpty) {
    errors = { ...errors, username: errorsMes.usernameEmpty, }
  }

  if(isEmailEmpty) {
    errors = { ...errors, email: errorsMes.emailEmpty, }
  } else {
    const isEmailMatch = email.match(checkEmailRegExp)
    if(!isEmailMatch) {
      errors = { ...errors, email: errorsMes.emailInvalid, }
    }
  }

  if(isPasswordEmpty) {
    errors = { ...errors, password: errorsMes.passwordEmpty, }
  }

  const isValid = checkIsValidByErrors(errors)
  return ({
    errors,
    isValid,
  })
}

const validateLoginInput = ({
  username, password
}) => {
  let errors = {}
  const isUsernameEmpty = username.trim() === ''
  const isPasswordEmpty = password === ''

  if(isUsernameEmpty) {
    errors = { ...errors, username: errorsMes.usernameEmpty, }
  }

  if(isPasswordEmpty) {
    errors = { ...errors, password: errorsMes.passwordEmpty, }
  }

  const isValid = checkIsValidByErrors(errors)
  return ({
    errors,
    isValid,
  })
}

module.exports = {
  validateRegisterInput,
  validateLoginInput,
  errorsMes,
}