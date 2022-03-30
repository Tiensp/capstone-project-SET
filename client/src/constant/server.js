

const server = "localhost";

const port_Server = 5000;

const SERVER_URL = process.env.REACT_APP_SERVER_URL || `http://${server}:${port_Server}`;

export {SERVER_URL}