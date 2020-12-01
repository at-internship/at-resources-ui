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
const srcController = require("../../controllers/at-resources.controller");

// AT Resources Service API
const atResourcesAPI = require("../services/at-resources-api.service");

describe("At-resources Test Controller", function () {
    let getAllStoriesStub;

    beforeEach(function () {
        getAllStoriesStub = sinon.stub(atResourcesAPI, "getAllStories");
    });

    afterEach(function () {
        getAllStoriesStub.restore();
    });

    it("Should render add sprint form", function (done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = rscController.renderAddSprintForm(req, res).then(function () {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
    it("Should render edit sprint form", function (done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = rscController.renderEditSprintForm(req, res).then(function () {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
});