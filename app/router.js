import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('members', function() {
    this.route('login');
    this.route('signup');
  });
  this.route('room');
});

export default Router;
