const axios = require("axios");
const AT_RESOURCES_SERVICE_URI = process.env.AT_RESOURCES_SERVICE_URI;
console.log("AT_RESOURCES_SERVICE_URI: " + AT_RESOURCES_SERVICE_URI);
const atResources = {};

atResources.getAllStories = () => {
  return axios({
    method: "GET",
    url: AT_RESOURCES_SERVICE_URI + `/v1/story`,
    headers: {
      "content-type": "application/json",
    },
  }).catch(function (error) {
    console.log("Error: " + error.message);
  });
};

atResources.addStory = (data) => {
  return axios({
    method: "POST",
    url: AT_RESOURCES_SERVICE_URI + `/v1/story`,
    data: data,
    headers: {
      "content-type": "application/json",
    },
  }).catch(function (error) {
    console.log("Error: " + error.message);
  });
};

module.exports = atResources;