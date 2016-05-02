import Loopback from 'ember-simple-auth-loopback/authenticators/loopback';
import config from 'chatty/config/environment';

export default Loopback.extend({
  loginEndpoint: `https://chatty-tn-api.herokuapp.com/api/chatters/login?include=user`,
});
