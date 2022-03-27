import "dotenv/config";

const server = (process.env === "staging") ? "localhost" : "localhost";

const port_Server = (process.env === "staging") ?  8000 : 3000;

export {port_Server, server}