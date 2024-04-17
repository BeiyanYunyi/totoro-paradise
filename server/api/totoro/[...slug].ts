export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // console.log(body);

  // let headers = event.node.req.headers;
  // headers.referer = undefined;
  // headers['x-forwarded-for'] = undefined;
  // headers['x-forwarded-host'] = undefined;
  // headers['x-forwarded-proto'] = undefined;
  // headers['x-forwarded-port'] = undefined;
  // headers.origin = undefined;
  // headers['sec-ch-ua-mobile'] = undefined;
  // headers['sec-ch-ua'] = undefined;
  // headers['sec-ch-ua-platform'] = undefined;
  // headers['sec-fetch-dest'] = undefined;
  // headers['sec-fetch-mode'] = undefined;
  // headers['sec-fetch-site'] = undefined;
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    // "Content-Length": "0",
    Host: 'app.xtotoro.com',
    Connection: 'keep-alive',
    'Accept-Encoding': 'gzip, deflate, br',
    'User-Agent': 'TotoroSchool/1.2.14 (iPhone; iOS 17.4.1; Scale/3.00)',
    Cookie: event.node.req.headers.cookie,
    Accept: 'application/json',
    // 'sec-fetch-mode': undefined,
  };
  const path = event.path.replace('/api/totoro/', '/app/');
  // event.context.params.slug to get the route segment: 'bar/baz'
  return fetch(`https://app.xtotoro.com${path}`, {
    method: 'post',
    headers: { ...(headers as HeadersInit) },
    body,
  });
});
