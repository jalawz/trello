import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('story');
  },

  actions: {
    saveStory(story) {
      story.save().then(() => this.transitionTo('stories'));
    }
  }
});
