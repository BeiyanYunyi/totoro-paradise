import minimist from "minimist";

interface Args {
  mac?: string;
  server?: boolean;
  host?: string;
}

export default minimist(process.argv, {
  string: ["mac", "host"],
  boolean: ["server"],
  alias: {
    m: "mac",
    s: "server",
    h: "host",
  },
}) as Args;
