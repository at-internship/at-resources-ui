/**
 * AT RESOURCES UI - AT Resources Service API Test.
 * Copyright 2020 AgileThought, Inc.
 *
 * Test for at-resources-api.service endpoint.
 *
 * @author @at-internship
 * @version 1.0
 */

// Constants
const expect = require("chai").expect;
const nock = require("nock");

// AT Resources Service API
const resourcesServiceAPI = "https://at-resources-api.herokuapp.com/api" + "/v1/story";
const resourcesServiceAPI_400 = "https://at-resources-api.herokuapp.com/api" + "/v1/stories";

// MICROSERVICE - HEROKU - SSO
const atResourcesAPI = require("../../services/at-resources-api.service");

// Operations
const getAllStories = atResourcesAPI.getAllStories;
const getAllStories_error = atResourcesAPI.getAllStories;
const getStoryById = atResourcesAPI.getStoryById;
const getStoryById_error = atResourcesAPI.getStoryById;
const addStory = atResourcesAPI.addStory;
const updateStory = atResourcesAPI.updateStory;
const deleteStory = atResourcesAPI.deleteStory;

// http://at-resources-api.herokuapp.com/swagger-ui.html

// Mock Responses
const data = {};
const response = {
    body: {
        "id": "5fc00234d5c4d806f88f4925",
        "sprintId": "5fc00234d5c4d806f88f4923",
        "userId": "5fc00234d5c4d806f88f4924",
        "priority": "High",
        "name": "Future Operations Facilitator",
        "description": "Eum id explicabo fugit esse.Nobis consequatur illo non adipisci ut nobis.Consequatur quod unde unde",
        "acceptanceCriteria": "Dolores nulla magni corrupti quo iusto et commodi.Qui dolores blanditiis voluptatem.Ea praesentium ",
        "storyPoints": 2,
        "progress": 34,
        "startDate": "2020-11-28",
        "dueDate": "2021-01-26",
        "createDate": "2020-11-26",
        "status": 1
    },
    status: 200
};

const response_error = {
    body: {
        "timestamp": "2020-12-02T17:46:32.409+00:00",
        "status": 400,
        "error": "Bad Request",
        "message": "The priority field only accepts 3 values {High, Medium, Low}",
        "path": "/story/"
    },
    status: 400
};

const data_add = {
    "acceptanceCriteria": "Story Acceptance",
    "createDate": "2020-12-01",
    "description": "Story description",
    "dueDate": "2020-12-01",
    "id": "1231",
    "name": "Story name",
    "priority": "High",
    "progress": 0,
    "sprintId": "1232",
    "startDate": "2020-12-01",
    "status": 0,
    "storyPoints": 1,
    "userId": "1233"
};
const response_add = {
    body: {
        id: "5fc7d343561fc93806a91753"
    },
    status: 200
};

const data_update = {
    "id": "5fc7d343561fc93806a91753",
    "acceptanceCriteria": "Story Acceptance",
    "createDate": "2020-12-01",
    "description": "Story description",
    "dueDate": "2020-12-01",
    "name": "Story name",
    "priority": "High",
    "progress": 0,
    "sprintId": "1232",
    "startDate": "2020-12-01",
    "status": 0,
    "storyPoints": 1,
    "userId": "1233"
};
const response_update = {
    body: {
        id: "5fc7d343561fc93806a91753",
        acceptanceCriteria: "Story Acceptance",
        createDate: "2020-12-01",
        description: "Story description",
        dueDate: "2020-12-01",
        name: "Story name",
        priority: "High",
        progress: 0,
        sprintId: "1232",
        startDate: "2020-12-01",
        status: 0,
        storyPoints: 1,
        userId: "1233"
    },
    status: 200
};

const response_delete = {};

describe("TEST: at-resources.service", () => {

    beforeEach(() => {
        nock("https://at-resources-api.herokuapp.com/api").get("/v1/story").reply(200, response);
        nock("https://at-resources-api.herokuapp.com/api").get("/v1/story").reply(400, response_error);
        nock("https://at-resources-api.herokuapp.com/api").post("/v1/story").reply(200, response_add);
        nock("https://at-resources-api.herokuapp.com/api").put("/v1/story/1").reply(200, response_update);
        nock("https://at-resources-api.herokuapp.com/api").delete("/v1/story/1").reply(200, response_delete);
    });

    it("Should Get All Stories", () => {
        return getAllStories()
            .then(response => {

                // Response Status
                expect(response).to.have.status(200);

                // Response
                expect(response.data.body).to.have.property("id");
            });
    });

    it("Should Get All Stories - error", () => {
        return getAllStories_error()
            .then(response_error => {
                //console.log(response_error);

                // Response Status
                expect(response_error).equals(undefined);

                // Response
            });
    });

    it("Should Get Story by id", () => {
        return getStoryById(1)
            .then(response => {

                // Response Status
                expect(response).to.have.status(200);

                // Response
                expect(response.data.body).to.have.property("id");
            });
    });

    it("Should Get Story by id - error", () => {
        return getStoryById_error(1)
            .then(response_error => {
                //console.log(response_error);

                // Response Status
                expect(response_error).equals(undefined);

                // Response
            });
    });

    it("Should Add Story", () => {
        return addStory(data_add)
            .then(response_add => {
                //console.log(response_add);

                // Response Status
                expect(response_add).to.have.status(200);

                // Response
                expect(response_add.data.body).to.have.property("id");
            });
    });

    it("Should Update Story", () => {
        return updateStory(data_update, 1)
            .then(response_update => {
                //console.log(response_update);

                // Response Status
                expect(response_update).to.have.status(200);

                // Response
                expect(response_update.data.body).to.have.property("id");
            });
    });

    it("Should Delete Story", () => {
        return deleteStory("1")
            .then(response_delete => {
                //console.log(response_delete);

                // Response Status
                expect(response_delete);
            });
    });
});