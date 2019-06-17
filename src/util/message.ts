export const message = {
  flash: {
    password_reset: {
      failure: 'Rassword reset request has been failed'
    , success: 'Password reset has beeen successfuly requested'
    }
  , signin: {
      failure: 'The credentials you\'ve entered are incorrect'
    }
  , signup: {
      failure: 'Your sign up has been failed'
    }
  }
, description: {
    password_reset: {
      email: 'You can request it only once per several minutes.'
    }
  , signup: {
      email: `You need this as primary e-mail address to sign in to your
account.`
    , name: 'Your fullname. This is an optional field.'
    , username: 'You can change this later as you want if it\'s available.'
    , password: `At least, use one lower and UPPER letter from: A-z,
one digit from: 0-9. And, 8 characters are minimum length.`
    }
  }
};