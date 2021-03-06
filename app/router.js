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
    this.route('add-task', {path: '/:story_id/add-task'})
    this.route('view-task', {path: '/:task_id/view-task'});
    this.route('edit-task', {path: '/:task_id/edit-task'});
  });
});

export default Router;
