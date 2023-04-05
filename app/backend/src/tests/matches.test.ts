import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import MatchesModel from '../database/models/MatchesModel';
import matches from './mocks/matchesMock';

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
});
