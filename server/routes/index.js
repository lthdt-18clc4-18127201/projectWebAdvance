import siteRouter from "./siteRouter.js";
import authRoute from "./authRouter.js";
// const siteRouter = require("./siteRouter.js");
// const authRoute = require("./authRouter.js");

function route(app) {
  app.use("/", siteRouter);
  app.use("/auth", authRoute);
  app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
}

// module.exports = route;
export default route;

