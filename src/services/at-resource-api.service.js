const axios = require("axios");

const AT_RESOURCES_SERVICE_URI = process.env.AT_RESOURCES_SERVICE_URI;
console.log("AT_UNIVERSITY_SERVICE_URI: " + AT_RESOURCES_SERVICE_URI);

const resourceServiceApi = {};

resourceServiceApi.getStoryList = () => {
    return axios({
      method: "GET",
      url: AT_RESOURCES_SERVICE_URI + `/v1/course`,
      headers: {
        "content-type": "application/json",
      },
    }).catch(function (error) {
      console.log("Error: " + error.message);
    });
  };

  module.exports = resourceServiceApi;