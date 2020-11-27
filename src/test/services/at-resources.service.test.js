/**
 * AT UI MOCKS - AT University Service API Test.
 * Copyright 2020 AgileThought, Inc.
 * 
 * Integration Test for at-university-api endpoint.
 * 
 * @author @at-internship
 * @version 1.0
 */

// Constants
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

// AT University Service API
const resourcesServiceAPI= 'https://at-resources-api.herokuapp.com/api' + '/v1/story';
const resourcesServiceAPI_400 = 'https://at-resources-api.herokuapp.com/api' + '/v1/stories';

describe('INTEGRATION TEST: at-resources.service', () => {

    it('Should Get All Stories - 200', (done) => {
        chai.request(resourcesServiceAPI)
            .get('/')
            .end(function(err, res) {
                //console.log(res.body);

                // Response Status
                expect(res).to.have.status(200);

                done();
            });
    });

    it('Should Fail Get All Courses - 400', (done) => {
        chai.request(resourcesServiceAPI_400)
            .get('/')
            .end(function(err, res) {
                console.log(res.body)

                // Response Status
                expect(res).to.have.status(404);

                // Response message
                expect(res).to.have.property('body');
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('status').equals(404);
                expect(res.body).to.have.property('error');
                expect(res.body).to.have.property('error').equals('Not Found');
                expect(res.body).to.have.property('message');
                expect(res.body).to.have.property('message').equals('');
                expect(res.body).to.have.property('path');
                expect(res.body).to.have.property('path').equals('/api/v1/stories/');

                done();
            });
    });

});