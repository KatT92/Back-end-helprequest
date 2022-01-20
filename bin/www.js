#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from "../app.js";

/**
 * Get port from environment and store in Express.
 */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on port" + PORT);
});

/**
 * Create HTTP server.
 */

/**
 * Listen on provided port, on all network interfaces.
 */

/**
 * Normalize a port into a number, string, or false.
 */

/**
 * Event listener for HTTP server "error" event.
 */
