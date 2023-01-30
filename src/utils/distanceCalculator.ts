const distanceBetweenPoints = (
  pointA: [number, number],
  pointB: [number, number]
) => {
  const d1 = 0.0174532925194329;
  let [d2, d3] = pointA;
  let [d4, d5] = pointB;
  d2 *= d1;
  d3 *= d1;
  d4 *= d1;
  d5 *= d1;
  const d6 = Math.sin(d2);
  const d7 = Math.sin(d3);
  const d8 = Math.cos(d2);
  const d9 = Math.cos(d3);
  const d10 = Math.sin(d4);
  const d11 = Math.sin(d5);
  const d12 = Math.cos(d4);
  const d13 = Math.cos(d5);
  const s11 = d9 * d8;
  const s12 = d9 * d6;
  const s13 = d7;
  const s21 = d13 * d12;
  const s22 = d13 * d10;
  const s23 = d11;
  const d14 = Math.sqrt(
    // eslint-disable-next-line no-restricted-properties
    (s11 - s21) * (s11 - s21) +
      (s12 - s22) * (s12 - s22) +
      (s13 - s23) * (s13 - s23)
  );
  return Math.asin(d14 / 2.0) * 1.2740015798544e7;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const distanceBetweenPointsGoogle = (
  pointA: [number, number],
  pointB: [number, number]
) => {
  let [lon1, lat1] = pointA;
  let [lon2, lat2] = pointB;
  // Based on http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf
  // using the "Inverse Formula" (section 4)
  const MAXITERS = 20;
  // Convert lat/long to radians
  lat1 *= Math.PI / 180.0;
  lat2 *= Math.PI / 180.0;
  lon1 *= Math.PI / 180.0;
  lon2 *= Math.PI / 180.0;
  const a = 6378137.0; // WGS84 major axis
  const b = 6356752.3142; // WGS84 semi-major axis
  const f = (a - b) / a;
  const aSqMinusBSqOverBSq = (a * a - b * b) / (b * b);
  const L = lon2 - lon1;
  let A = 0.0;
  const U1 = Math.atan((1.0 - f) * Math.tan(lat1));
  const U2 = Math.atan((1.0 - f) * Math.tan(lat2));
  const cosU1 = Math.cos(U1);
  const cosU2 = Math.cos(U2);
  const sinU1 = Math.sin(U1);
  const sinU2 = Math.sin(U2);
  const cosU1cosU2 = cosU1 * cosU2;
  const sinU1sinU2 = sinU1 * sinU2;
  let deltaSigma = 0.0;
  let cosSqAlpha = 0.0;
  let cos2SM = 0.0;
  let lambda = L; // initial guess
  let sigma = 0.0;
  for (let iter = 0; iter < MAXITERS; iter += 1) {
    const lambdaOrig = lambda;
    const cosLambda = Math.cos(lambda);
    const sinLambda = Math.sin(lambda);
    const t1 = cosU2 * sinLambda;
    const t2 = cosU1 * sinU2 - sinU1 * cosU2 * cosLambda;
    const sinSqSigma = t1 * t1 + t2 * t2; // (14)
    const sinSigma = Math.sqrt(sinSqSigma);
    const cosSigma = sinU1sinU2 + cosU1cosU2 * cosLambda; // (15)
    sigma = Math.atan2(sinSigma, cosSigma); // (16)
    const sinAlpha = sinSigma === 0 ? 0.0 : (cosU1cosU2 * sinLambda) / sinSigma; // (17)
    cosSqAlpha = 1.0 - sinAlpha * sinAlpha;
    cos2SM =
      cosSqAlpha === 0 ? 0.0 : cosSigma - (2.0 * sinU1sinU2) / cosSqAlpha; // (18)
    const uSquared = cosSqAlpha * aSqMinusBSqOverBSq; // defn
    A =
      1 +
      (uSquared / 16384.0) * // (3)
        (4096.0 + uSquared * (-768 + uSquared * (320.0 - 175.0 * uSquared)));
    const B =
      (uSquared / 1024.0) * // (4)
      (256.0 + uSquared * (-128.0 + uSquared * (74.0 - 47.0 * uSquared)));
    const C = (f / 16.0) * cosSqAlpha * (4.0 + f * (4.0 - 3.0 * cosSqAlpha)); // (10)
    const cos2SMSq = cos2SM * cos2SM;
    deltaSigma =
      B *
      sinSigma * // (6)
      (cos2SM +
        (B / 4.0) *
          (cosSigma * (-1.0 + 2.0 * cos2SMSq) -
            (B / 6.0) *
              cos2SM *
              (-3.0 + 4.0 * sinSigma * sinSigma) *
              (-3.0 + 4.0 * cos2SMSq)));
    lambda =
      L +
      (1.0 - C) *
        f *
        sinAlpha *
        (sigma +
          C *
            sinSigma *
            (cos2SM + C * cosSigma * (-1.0 + 2.0 * cos2SM * cos2SM))); // (11)
    const delta = (lambda - lambdaOrig) / lambda;
    if (Math.abs(delta) < 1.0e-12) {
      break;
    }
  }
  const distance = b * A * (sigma - deltaSigma);
  return distance;
};

const distanceOfLine = (line: [number, number][]) => {
  let distance = 0;
  for (let i = 0; i < line.length - 1; i += 1) {
    const pointA = line[i];
    const pointB = line[i + 1];
    distance += distanceBetweenPoints(pointA, pointB);
  }
  return distance;
};

export default distanceOfLine;
