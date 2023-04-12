import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import MatchesModel from '../database/models/MatchesModel';
import { matches, updateGoals } from './mocks/matchesMock';
import * as jwt from 'jsonwebtoken';
import { login, token } from './mocks/loginMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa rota /matches', () => {
  let chaiHttpResponse: Response;

  afterEach(()=>{
    sinon.restore();
  })

  it('1) Testa a rota /matches com o findAll', async () => {
    sinon.stub(MatchesModel, 'findAll').resolves(matches)
    chaiHttpResponse = await chai.request(app).get('/matches');
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(matches);
  });

  it('2) Testa a rota /matches?inProgress=false', async () => {
    const filterFalse = matches.filter((m: { inProgress: string; }) => m.inProgress === 'false')
    sinon.stub(MatchesModel, 'findAll').resolves(filterFalse)
    chaiHttpResponse = await chai.request(app).get('/matches?inProgress=false');
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(filterFalse);
  });

  it('3) Testa a rota /matches?inProgress=true', async () => {
    const filterTrue = matches.filter((m: { inProgress: string; }) => m.inProgress === 'true')
    sinon.stub(MatchesModel, 'findAll').resolves(filterTrue)
    chaiHttpResponse = await chai.request(app).get('/matches?inProgress=true');
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(filterTrue);
  });

  it('4) Testa a rota /matches/:id/finish', async () => {
    sinon.stub(MatchesModel, 'update').resolves();
    sinon.stub(jwt, 'verify').returns({email: login.email} as any);
    chaiHttpResponse = await chai.request(app).patch('/matches/24/finish').set('authorization', token.token);
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({message: 'Finished'});
  })

  it('5) Testa a rota /matches/:id', async () => {
    sinon.stub(MatchesModel, 'update').resolves();
    sinon.stub(jwt, 'verify').returns({email: login.email} as any);
    chaiHttpResponse = await chai.request(app).patch('/matches/1').send(updateGoals).set('authorization', token.token);
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({message: 'Updated'});
  })
});
