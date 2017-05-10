import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      task: this.store.createRecord('task'),
      stories: this.store.findAll('story')
    });
  },

  actions: {
    saveTask(task) {
      let story = this.get('store').peekRecord('story', this.controller.get('storyId'));
      task.set('story', story);
      task.save().then(() => this.transitionTo('tasks'));
    }
  }
});
