import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    story: this.store.createRecord('story');
  },

  actions: {
    saveStory(story) {
      let dueDate = new Date(story.get('dueDate'));
      story.set('dueDate', dueDate);
      story.save().then(() => this.transitionTo('stories'));
    }
  }
});
