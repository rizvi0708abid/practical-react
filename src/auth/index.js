class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    console.log("inside login...", cb, this.authenticated);
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAutehnticated() {
    return this.authenticated;
  }
}

export default new Auth();
