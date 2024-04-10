import rsaKeys from '../data/rsaKeys';
import NodeRSA from './nodeRSA';

const encryptRequestContent = (req: Record<string, any>): string => {
  const rsa = new NodeRSA(rsaKeys.privateKey);
  rsa.setOptions({ encryptionScheme: 'pkcs1' });
  const reqStr = JSON.stringify(req);
  return rsa.encrypt(reqStr, 'base64');
};
export default encryptRequestContent;
