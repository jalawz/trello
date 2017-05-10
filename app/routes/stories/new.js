import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      story: this.store.createRecord('story'),
      tasks: this.store.findAll('task')
    });
  },

  actions: {
    saveStory(story) {
      let dueDate = new Date(story.get('dueDate'));
      story.set('dueDate', dueDate);
      story.save().then(() => this.transitionTo('stories'));
    }
  }
});
