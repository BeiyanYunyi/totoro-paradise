import DefaultMiddleware from "../types/DefaultMiddleware";
import decryptRequestContent from "../utils/decryptRequestContent";

const getRawData: DefaultMiddleware = (req, res, next) => {
  let data = "";
  req.setEncoding("utf8");
  req.on("data", (chunk: string) => {
    data += chunk;
  });

  req.on("end", () => {
    req.body = decryptRequestContent(data);
    next();
  });
};

export default getRawData;
