import siteRouter from "./siteRouter.js";
import authRoute from "./authRouter.js";

function route(app) {
  app.use("/", siteRouter);
  app.use("/auth", authRoute);
  app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
}

export default route;
