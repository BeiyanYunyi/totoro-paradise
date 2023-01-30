import md5 from "md5";

const generateMac = (stuNumber: string) => {
  const md5Str = md5(stuNumber);
  const md5CharactorAry = Array.from(md5Str.toUpperCase().substring(0, 12));
  let num = false;
  let macStr = "";
  md5CharactorAry.forEach((charactor) => {
    if (num === true) {
      macStr = macStr.concat(`${charactor}:`);
      num = false;
    } else {
      macStr = macStr.concat(charactor);
      num = true;
    }
    return null;
  });
  return macStr.substring(0, 17);
};

export default generateMac;
