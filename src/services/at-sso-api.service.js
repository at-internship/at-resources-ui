const axios = require("axios");
const AT_RESOURCES_SERVICE_URI = process.env.AT_RESOURCES_SERVICE_URI;
console.log("AT_RESOURCES_SERVICE_URI: " + AT_RESOURCES_SERVICE_URI);
const ssoServiceAPI = {};

ssoServiceAPI.getAllStories = () => {
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

ssoServiceAPI.addStory = (data) => {
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

module.exports = ssoServiceAPI;