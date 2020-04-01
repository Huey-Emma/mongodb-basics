module.exports = class Intern {
  constructor(name, slackUsername, createdAt) {
    this._name = name;
    this._slackUsername = slackUsername;
    this._createdAt = new Date();
  }
};
