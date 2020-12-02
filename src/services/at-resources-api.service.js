const axios = require("axios");

// LOCAL
//require("dotenv").config();
//const AT_RESOURCES_SERVICE_URI = process.env.AT_RESOURCES_SERVICE_URI || `https://at-resources-api.herokuapp.com/api`;

// PROD
const AT_RESOURCES_SERVICE_URI = process.env.AT_RESOURCES_SERVICE_URI;
console.log("AT_RESOURCES_SERVICE_URI: " + AT_RESOURCES_SERVICE_URI);

const atResourcesAPI = {};

atResourcesAPI.getAllStories = () => {
    return axios({
        method: "GET",
        url: AT_RESOURCES_SERVICE_URI + `/v1/story`,
        headers: {
            "content-type": "application/json",
        },
    }).catch(function(error) {
        console.log("Error: " + error.message);
    });
};

atResourcesAPI.getStoryById = (id) => {
    return {};
}

atResourcesAPI.addStory = (data) => {
    return axios({
        method: "POST",
        url: AT_RESOURCES_SERVICE_URI + `/v1/story`,
        data: data,
        headers: {
            "content-type": "application/json",
        },
    })
};

atResourcesAPI.updateStory = (data, id) => {
    return axios({
        method: "PUT",
        url: AT_RESOURCES_SERVICE_URI + `/v1/story/` + id,
        data: data,
        headers: {
            "content-type": "application/json",
        },
    })
};

atResourcesAPI.deleteStory = (id) => {
    return axios({
        method: "DELETE",
        url: AT_RESOURCES_SERVICE_URI + `/v1/story/` + id,
        data: {},
        headers: {
            "content-type": "application/json",
        },
    })
};

module.exports = atResourcesAPI;