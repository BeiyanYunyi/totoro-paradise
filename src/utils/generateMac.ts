const generateMac = async (stuNumber: string) => {
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(stuNumber));
  const hashArray = Array.from(new Uint8Array(hash));
  const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
  return hashHex.substring(0, 32);
};

export default generateMac;
