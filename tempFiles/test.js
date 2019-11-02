var request = require('request');
 var agentOptions;  

request({
    url: 'https://wssqa.amwaternp.net/selfservice-web/portalWebUser.do',
    //url: 'https://api.amwaternp.com/api/login-service-proxy/external-login?query=EC459C0FC9AF7C2D9DAD8BBA8C2A45AA',
    agentOptions: {
      rejectUnauthorized: false
    }
  }, function (err, resp, body) {
    console.log(body)
  });



