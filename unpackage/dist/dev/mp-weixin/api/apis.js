"use strict";
const api_request = require("./request.js");
function apiGetAll() {
  return api_request.request({ url: "/all" });
}
function apiInsert(data) {
  return api_request.request({ url: "/add", method: "POST", data });
}
exports.apiGetAll = apiGetAll;
exports.apiInsert = apiInsert;
