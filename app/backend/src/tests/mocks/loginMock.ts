import UsersModel from "../../database/models/UsersModel"

const login = {
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
} as UsersModel

const token = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc'
}

const loginNoEmail = {
  email: '',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
} as UsersModel

const loginNoPassword = {
  email: 'admin@admin.com',
  password: ''
} as UsersModel

const filledMessage = {
  message: 'All fields must be filled'
}

export {login, token, loginNoEmail, loginNoPassword, filledMessage}