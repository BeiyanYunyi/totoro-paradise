import UserSession from "../classes/UserSession";
import wait from "../utils/wait";

class SessionController {
  sessions: UserSession[] = [];

  addSession(code: string) {
    this.sessions.push(new UserSession(code));
    wait(1000 * 60 * 10).then(() => {
      this.delSession(code);
    });
  }

  /** @param {string} codeOrToken code 或 token */
  getSession(codeOrToken: string) {
    const sessionInstance = this.sessions.find(
      (session) => session.code === codeOrToken || session.token === codeOrToken
    );
    if (sessionInstance) {
      return sessionInstance;
    }
    throw new Error("no session");
  }

  detectSessionExist(phoneNumber: string) {
    const sessionIfExist = this.sessions.find(
      (session) => session.phoneNumber === phoneNumber
    );
    if (sessionIfExist) {
      sessionIfExist.addLoginCount();
      if (sessionIfExist.loginCount >= 3) return true;
    }
    return false;
  }

  delSession(code: string) {
    this.sessions = this.sessions.filter((session) => session.code !== code);
  }
}

const sessionController = new SessionController();

export default sessionController;
