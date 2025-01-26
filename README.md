# Unhandled Exception in Node.js Server

This repository demonstrates an uncommon bug in Node.js where a server unexpectedly terminates due to unhandled exceptions.  The issue stems from a missing or improperly implemented `server.on('error')` event handler.

## Bug Description

The provided `server.js` demonstrates a basic HTTP server.  However, it lacks proper error handling, meaning any unhandled exception within the request handling logic will cause the server to crash without providing informative error messages.  This makes debugging difficult.

## Bug Solution

The `serverSolution.js` provides the corrected version, incorporating a robust `server.on('error')` event handler.  This handler intercepts and logs errors, ensuring the server remains operational and provides meaningful error information for debugging purposes.

## How to Reproduce the Bug

1. Clone the repository.
2. Navigate to the directory containing `server.js`.
3. Run the server using `node server.js`.
4. Attempt to trigger an unhandled exception (e.g., accessing a non-existent property).
5. Observe the server's termination without a meaningful error message.

## How to Implement the Solution

1. Replace `server.js` with `serverSolution.js`.
2. Run the server again using `node serverSolution.js`.
3. Attempt to trigger an unhandled exception again; now observe the error message logged to the console.

This example highlights the importance of comprehensive error handling in Node.js applications, particularly within long-running processes like HTTP servers.