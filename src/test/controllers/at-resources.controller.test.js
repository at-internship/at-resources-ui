/**
 * AT RESOURCES UI - AT Resources Controller Test.
 * Copyright 2020 AgileThought, Inc.
 * 
 * Unit Test for at-resources.controller.
 * 
 * @author @at-internship
 * @version 1.0
 */

// Constants
const sinon = require("sinon");
const expect = require("chai").expect;

// AT Resources Controller
const atResourcesController = require("../../controllers/at-resources.controller");

// AT Resources Service API
const atResourcesAPI = require("../../services/at-resources-api.service");

describe("at-resources Test Controller", function() {
    let getAllStoriesStub;

    beforeEach(function() {
        getAllStoriesStub = sinon.stub(atResourcesAPI, "getAllStories");
    });

    afterEach(function() {
        getAllStoriesStub.restore();
    });

    // AT-RESOURCES - Index/Dashboard
    it("Should render dashboard section", function(done) {
        var res = { render: sinon.spy() };
        var req = { flash: sinon.spy() };
        var stories = [];
        getAllStoriesStub.returns(Promise.resolve(stories));
        var view = atResourcesController.dashboard(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should render dashboard section - Service unavailable", function() {
        var res = {};
        var req = { flash: sinon.spy() };
        var stories = [];
        var err = {
            response: sinon.spy()
        };
        getAllStoriesStub.returns(Promise.resolve(null));
        var view = atResourcesController.dashboard(req, res).then(function() {
            expect(view.run()).to.throw();
        });
    });

    it("Should render dashboard section - error", function() {
        var res = {};
        var req = { flash: sinon.spy() };
        var stories = [];
        var err = {
            response: sinon.spy(),
            message: sinon.spy()
        };
        getAllStoriesStub.returns(Promise.resolve(err));
        var view = atResourcesController.dashboard(err).then(function() {
            expect(view.run()).to.throw();
            //expect(err.message).to.equals("Undefinded");
        });
    });

    // AT-RESOURCES - Render Backlog
    it("Should render backlog section", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = atResourcesController.backlog(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Render Sprint
    it("Should render sprint section", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var stories = [];
        getAllStoriesStub.returns(Promise.resolve(stories));
        var view = atResourcesController.sprint(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should render sprint section - Service unavailable", function() {
        var res = {};
        var req = { flash: sinon.spy() };
        var stories = [];
        var err = {
            response: sinon.spy()
        };
        getAllStoriesStub.returns(Promise.resolve(null));
        var view = atResourcesController.sprint(req, res).then(function() {
            expect(view.run()).to.throw();
        });
    });

    // AT-RESOURCES - Render Members
    it("Should render members section", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = atResourcesController.members(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Render Teams
    it("Should render teams section", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = atResourcesController.teams(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Render Mentors
    it("Should render mentors section", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = atResourcesController.mentors(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Render Metrics
    it("Should render metrics section", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = atResourcesController.metrics(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
});