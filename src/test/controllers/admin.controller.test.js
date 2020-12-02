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
    let addStoryStub;
    let updateStoryStub;
    let deleteStoryStub;

    beforeEach(function() {
        getAllStoriesStub = sinon.stub(resourcesServiceAPI, "getAllStories");
        addStoryStub = sinon.stub(resourcesServiceAPI, "addStory");
        getStoryByIdStub = sinon.stub(resourcesServiceAPI, "getStoryById");
        updateStoryStub = sinon.stub(resourcesServiceAPI, "updateStory");
        deleteStoryStub = sinon.stub(resourcesServiceAPI, "deleteStory");
    });

    afterEach(function() {
        getAllStoriesStub.restore();
        addStoryStub.restore();
        getStoryByIdStub.restore();
        updateStoryStub.restore();
        deleteStoryStub.restore();
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
    it("Should add story operation - false", function(done) {
        this.timeout(5000);
        var res = {
            render: sinon.spy(),
            redirect: sinon.spy()
        };
        var req = {};
        var stories = [];
        addStoryStub.returns(Promise.resolve(stories));
        var view = adminController.addStory(req, res).then(function() {
            expect(res.render.calledOnce).to.be.false;
            done();
        }).catch(done);
    });

    it("Should add story operation - true", function(done) {
        this.timeout(5000);
        var res = {
            render: sinon.spy(),
            redirect: sinon.spy()
        };
        var req = {};
        var stories = [];
        addStoryStub.returns(Promise.resolve(stories));
        var view = adminController.addStory(req, res).then(function() {
            expect(res.render.calledOnce).to.be.false;
            done();
        }).catch(done);
    });

    // AT-RESOURCES - Admin - Render Edit Story Form
    it("Should render edit story form", function(done) {
        var res = { render: sinon.spy() };
        var req = {
            params: {
                id: 1
            }
        };
        var stories = [];
        getStoryByIdStub.returns(Promise.resolve(stories));
        var view = adminController.renderEditStoryForm(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Admin - Edit Story
    it("Should update story operation, story_id is null", function(done) {
        var res = {
            render: sinon.spy(),
            redirect: "/admin/story"
        };
        var req = {
            params: {
                id: null
            }
        };
        var view = adminController.updateStory(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should update story operation, storyErrors", function(done) {
        var res = { render: sinon.spy() };
        var req = {
            params: {
                id: 1
            },
            body: {
                story_sprintId: null,
                story_userId: null,
                story_priority: null,
                story_name: null,
                story_description: null,
                story_acceptanceCriteria: null,
                story_storyPoints: null,
                story_progress: null,
                story_startDate: null,
                story_dueDate: null,
                story_status: null
            }
        };
        var view = adminController.updateStory(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    it("Should update story operation", function(done) {
        var res = { render: sinon.spy() };
        var req = {
            params: {
                id: 1
            }
        };
        var stories = [];
        updateStoryStub.returns(Promise.resolve(stories));
        var view = adminController.updateStory(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });

    // AT-RESOURCES - Admin - Delete Story
    it("Should delete story operation", function(done) {
        var res = { render: sinon.spy() };
        var req = {
            params: {
                id: 1
            }
        };
        var stories = [];
        deleteStoryStub.returns(Promise.resolve(stories));
        var view = adminController.deleteStory(req, res).then(function() {
            expect(res.render.calledOnce).to.be.true;
            done();
        });
    });
});