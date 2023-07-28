const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuariosPath = "/api/usuarios";

    //Middlewares - Functions

    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    this.middlewares();
    //Routes of my app

    this.routes();
  }

  middlewares() {
    //Dirrectorio Publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routers/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Service run on port", this.port);
    });
  }
}

module.exports = Server;
