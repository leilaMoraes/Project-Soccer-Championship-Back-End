import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import UsersModel from '../database/models/UsersModel';
import { user, login, loginNoEmail, loginNoPassword, filledMessage } from './mocks/loginMock';

chai.use(chaiHttp);

const { expect } = chai;


describe('Testa rota /login', () => {
  let chaiHttpResponse: Response;

  afterEach(()=>{
    sinon.restore();
  })

  it('1) Testa se é retornado um token ao inserir um email e senha válidos', async () => {
    sinon.stub(UsersModel, 'findOne').resolves(user)
    chaiHttpResponse = await chai.request(app).post('/login').send(login);
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.property('token');;
  });

  it('2) Testa se é retornado um erro caso o campo email não seja informado', async () => {
    sinon.stub(UsersModel, 'findOne').resolves(user)
    chaiHttpResponse = await chai.request(app).post('/login').send(loginNoEmail);
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal(filledMessage);
  });

  it('3) Testa se é retornado um erro caso o campo password não seja informado', async () => {
    sinon.stub(UsersModel, 'findOne').resolves(user)
    chaiHttpResponse = await chai.request(app).post('/login').send(loginNoPassword);
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal(filledMessage);
  });
});
