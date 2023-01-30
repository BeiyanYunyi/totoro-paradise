import NodeRSA from "node-rsa";
import rsaKeys from "../data/rsaKeys";

const decryptRequestContent = (req: string): Record<string, unknown> => {
  const rsa = new NodeRSA(rsaKeys.privateKey);
  rsa.setOptions({ encryptionScheme: "pkcs1" });
  const reqStr = JSON.stringify(req);
  return JSON.parse(rsa.decrypt(reqStr, "utf8"));
};

export default decryptRequestContent;
