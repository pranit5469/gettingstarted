var json = require('json-file');
var file = json.read('./pageObjects/login.page.json');

class login {

    get loginTextbox() { return $(file.get('login.selector.loginTextbox')); }
    get passwordTextbox() { return $(file.get('login.selector.passwordTextbox')); }
    get loginButton() { return $(file.get('login.selector.loginButton')); }
    get noThanksButton() { return $(file.get('login.selector.noThanksButton')); }

  }
  
  module.exports = new login();