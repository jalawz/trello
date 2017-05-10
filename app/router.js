import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('stories', function() {
    this.route('story', {path: '/:id'});
    this.route('new');
    this.route('edit', {path: '/edit/:id'});
  });
  this.route('tasks', function() {
    this.route('new');
  });
});

export default Router;
