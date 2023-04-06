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
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
} as ILogin

const loginNoEmail = {
  email: '',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
} as ILogin

const loginNoPassword = {
  email: 'admin@admin.com',
  password: ''
} as ILogin

const filledMessage = {
  message: 'All fields must be filled'
}

export {user, login, loginNoEmail, loginNoPassword, filledMessage}