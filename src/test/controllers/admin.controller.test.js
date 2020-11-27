/**
 * AT RESOURCES UI - AT Admin Controller Test.
 * Copyright 2020 AgileThought, Inc.
 * 
 * Unit Test for admin-controller.
 * 
 * @author @at-internship
 * @version 1.0
 */

// Constants
const sinon = require("sinon");
const expect = require("chai").expect;

// AT Admin Controller
const adminController = require("../../controllers/admin.controller");

// AT Resources Service API
const resourcesServiceAPI = require("../../services/at-resources-api.service");

describe("Admin Test Controller", function() {
    let getAllStoriesStub;

    beforeEach(function() {
        getAllStoriesStub = sinon.stub(resourcesServiceAPI, "getAllStories");
    });

    afterEach(function() {
        getAllStoriesStub.restore();
    });

    it("Should render admin dashboard", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderIndexAdmin(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should render admin story list view", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var stories = [];
        getAllStoriesStub.returns(Promise.resolve(stories));
        var view = adminController.renderStoryList(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
});