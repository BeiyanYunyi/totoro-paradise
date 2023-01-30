import DefaultMiddleware from "../types/DefaultMiddleware";

const setHeader: DefaultMiddleware = (req, res, next) => {
  const dateNow = new Date();
  res.header({
    Server: "nginx/1.14.1",
    Date: dateNow.toUTCString(),
    "Content-Type": "application/json; charset\u003dUTF-8",
    "Transfer-Encoding": "chunked",
    Connection: "keep-alive",
    Vary: "Access-Control-Request-Headers",
  });
  next();
};

export default setHeader;
