import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import UsersModel from '../database/models/UsersModel';
import { user, login, loginNoEmail, loginNoPassword, filledMessage, loginWrongEmail, loginWrongPassword, loginShortPassword, invalidMessage, token } from './mocks/loginMock';
import LoginService from '../database/services/LoginService';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import LoginValidations from '../database/middlewares/loginValidation';
import ApiError from '../database/utils/ApiError';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa rota /login', () => {
  let chaiHttpResponse: Response;

  afterEach(()=>{
    sinon.restore();
  })

  it('1) Testa se é retornado um token ao inserir um email e senha válidos', async () => {
    sinon.stub(UsersModel, 'findOne').resolves(user)
    sinon.stub(bcrypt, 'compareSync').resolves(true);
    sinon.stub(LoginService.prototype, 'login').resolves({type: 200, message: {token}})
    sinon.stub(jwt, 'sign').resolves(token.token);
    chaiHttpResponse = await chai.request(app).post('/login').send(login)
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({token});
  });

  it('2) Testa se é retornado um erro caso o campo email não seja informado', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(loginNoEmail);
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal(filledMessage);
  });

  it('3) Testa se é retornado um erro caso o campo password não seja informado', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(loginNoPassword);
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal(filledMessage);
  });

  it('4) Testa se é retornado um erro caso o campo email não corresponda ao banco de dados', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(loginWrongEmail);
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal(invalidMessage);
  });

  it('5) Testa se é retornado um erro caso o campo password não corresponda ao banco de dados', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(loginWrongPassword).set('compareSync', 'false');
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal(invalidMessage);
  });

  it('6) Testa se é retornado um erro caso o campo password não tenha 6 ou mais caracteres', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send(loginShortPassword);
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal(invalidMessage);
  });
});
