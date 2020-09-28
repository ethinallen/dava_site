const axios = require('axios');
const debug = require('debug')('auth');
const config = require('config');
const qs = require('qs');

async function awsCallTokenEndpoint(grantType, accessToken) {
  const data = {
    grant_type: grantType,
    client_id: config.cognito.clientId,
    code: accessToken,
    scope: 'profile',
    redirect_uri: config.cognito.redirectCallback,
  };

  const p = {
    method: 'post',
    url: `${config.cognito.domainUrl}/oauth2/token`,
    data: qs.stringify(data),

    auth: {
      username: config.cognito.clientId,
      password: config.cognito.secret,
    },
  };
  debug(`AWS oauth2/token request parameters: ${JSON.stringify(p)}`);
  const awsResponse = await axios(p);
  debug(`AWS oauth2/token response : ${JSON.stringify(awsResponse.data)}`);

  return awsResponse;
}
