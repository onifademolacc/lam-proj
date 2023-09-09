"use strict";

const fetchData = require("../service");

module.exports.handler = async (event) => await fetchData.searchAlbum(event);
