import * as fs from "fs";

export default {
  getUsersWhiteList(): string[] {
    if (process.env.USERS_WHITELIST) {
      return process.env.USERS_WHITELIST.split(",");
    }
    const config = JSON.parse(
      fs.readFileSync("config/userConfig.json", "utf-8")
    );
    return config.usersWhiteList;
  },
};
