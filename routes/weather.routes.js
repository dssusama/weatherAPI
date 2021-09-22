module.exports = app => {
    const weather = require("../controller/weather.controller");
  
    var router = require("express").Router();
  
  
    // Retrieve all published Tutorials
    router.get("/weatherupdate", weather.getData);
  
    app.use('/', router);
  };