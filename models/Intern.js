class Intern {
  constructor(name, slackUsername) {
    this._name = name;
    this._slackUsername = slackUsername;
    this._createdAt = new Date();
  }
}

module.exports = {
  Intern,
};
