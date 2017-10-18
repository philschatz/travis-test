const Octo = require('octokat')
const gh = new Octo()

gh.rateLimit.fetch().then(function(resp) {
  console.log('GitHub API Rate Limit: ' + JSON.stringify(resp.rate));
})
