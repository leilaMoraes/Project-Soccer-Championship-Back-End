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
});
