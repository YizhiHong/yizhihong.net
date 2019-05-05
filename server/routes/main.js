const index = require("./index");
const schema = require("./schema");
const users = require("./users");

module.exports = app => {
  app.use("/", index);
  app.use("/users", users);
  schema(app);
};
