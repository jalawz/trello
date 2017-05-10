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
      let storyId = this.controller.get('storyId');
      console.log(s);
      // let story = this.get('store').peekRecord('story', storyId);
      // task.set('story', story);
      // story.get('tasks').pushObject(task);
      // task.save().then(function() {
      //   story.save();
      // }).then(() => this.transitionTo('tasks'));
    }
  }
});
