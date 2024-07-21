import express from "express";
import emailController from "../../controllers/email.controller.js";

function EmailRouter(repository) {
  const routes = express.Router();
  const { AddEmail } = emailController(repository);
  routes.post("/addEmail", AddEmail); // Use AddEmail directly
  return routes;
}

export { EmailRouter };
