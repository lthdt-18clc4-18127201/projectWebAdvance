import siteRouter from "./siteRouter.js";

function route(app) {
  app.use("/", siteRouter);
  app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
}

export default route;
