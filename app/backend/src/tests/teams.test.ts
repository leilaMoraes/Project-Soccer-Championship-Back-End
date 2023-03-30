import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import TeamsModel from '../database/models/TeamsModel';
import teams from './mocks/teamsMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa rota /teams', () => {
   let chaiHttpResponse: Response;

   afterEach(()=>{
     sinon.restore();
   })

   it('1) Testa a rota /teams com o findAll', async () => {
    sinon.stub(TeamsModel, 'findAll').resolves(teams)
     chaiHttpResponse = await chai.request(app).get('/teams');
     expect(chaiHttpResponse.status).to.be.equal(200);
     expect(chaiHttpResponse.body).to.be.deep.equal(teams);
  });

  it('2) Testa a rota /teams/:id com o findByPk', async () => {
    sinon.stub(TeamsModel, 'findByPk').resolves(teams[1])
     chaiHttpResponse = await chai.request(app).get('/teams/2');
     expect(chaiHttpResponse.status).to.be.equal(200);
     expect(chaiHttpResponse.body).to.be.deep.equal(teams[1]);
  });
});
