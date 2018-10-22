'use strict';

const express = require('express');
const routes = require('./helloRoutes'); 

// Initialize the App Express
var App = express();

/**
 * This creates the module that we created in the step before.
 * In my case it is stored in the util folder.
 */
var Prometheus = require('./prometheus');  

/**
 * The below arguments start the counter functions
 */
App.use(Prometheus.requestCounters);  
App.use(Prometheus.responseCounters);

/**
 * Enable metrics endpoint
 */
Prometheus.injectMetricsRoute(App);

/**
 * Enable collection of default metrics
 */
Prometheus.startCollection();


/**
 * Initialize the server and routes
 */
routes(App);  

App.listen(3000, function () {
  console.log('Example restAPI listening on port 3000!');
});