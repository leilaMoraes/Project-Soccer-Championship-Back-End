import { ILogin, IUser } from "../../database/interfaces"

const user = {
  id: 1,
  email: 'admin@admin.com',
  username: 'Admin',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  role: 'admin'
} as IUser

const login = {
  email: 'admin@admin.com',
  password: 'secret_admin'
} as ILogin

const loginNoEmail = {
  email: '',
  password: 'secret_admin'
} as ILogin

const loginNoPassword = {
  email: 'admin@admin.com',
  password: ''
} as ILogin

const filledMessage = {
  message: 'All fields must be filled'
}

const loginWrongEmail = {
  email: '@admin.com',
  password: 'secret_admin'
} as ILogin

const loginWrongPassword = {
  email: 'admin@admin.com',
  password: '123456'
} as ILogin

const loginShortPassword = {
  email: 'admin@admin.com',
  password: 'admin'
} as ILogin

const invalidMessage =  {
  message: 'Invalid email or password'
}

const token = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY4MTA2NjQ0NSwiZXhwIjoxNjgxMzI1NjQ1fQ.ZEtW4aK2r-c_QkQOrZVBiOFNBPphfsO1OnOAKAcfN2s'
}

export {user, login, loginNoEmail, loginNoPassword, filledMessage, loginWrongEmail, loginWrongPassword, loginShortPassword, invalidMessage, token}