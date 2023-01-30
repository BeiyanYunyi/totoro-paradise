import NodeRSA from "node-rsa";
import rsaKeys from "../data/rsaKeys";

const encryptRequestContent = (req: Record<string, unknown>): string => {
  const rsa = new NodeRSA(rsaKeys.privateKey);
  rsa.setOptions({ encryptionScheme: "pkcs1" });
  const reqStr = JSON.stringify(req);
  return rsa.encrypt(reqStr, "base64");
};
export default encryptRequestContent;
