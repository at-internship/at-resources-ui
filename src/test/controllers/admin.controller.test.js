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

    // AT-RESOURCES - Admin - Index
    it("Should render admin dashboard", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderIndexAdmin(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Admin - Story list
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

    // AT-RESOURCES - Admin - Render Add Story Form
    it("Should render add story form", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderAddStoryForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Admin - Add Story
    it("Should add story operation", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.addStory(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Admin - Render Edit Story Form
    it("Should render edit story form", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.renderEditStoryForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Admin - Edit Story
    it("Should update story operation", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.updateStory(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Admin - Delete Story
    it("Should delete story operation", function(done) {
        var res = { render: sinon.spy() };
        var req = {};
        var view = adminController.deleteStory(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
});