const app = require("./app.js");

// Handling Uncaught Exception
process.on("uncaughtException", (error) => {
	console.log(`Error: ${error.mesage}`);
	console.log(`Shutting down the server due to unhandled Promise Rejection`);

	process.exit(1);
});

// Starting Server
const server = app.listen(process.env.PORT, () => console.log(`Server Running on Port: ${process.env.PORT}`));

// Handling Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to unhandled Promise Rejection`);

	server.close(() => process.exit(1));
});
