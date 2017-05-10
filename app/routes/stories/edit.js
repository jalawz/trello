import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('story', params.id)
  },

  actions: {
    saveStory(story) {
      let dueDate = new Date(story.get('dueDate'));
      story.set('dueDate', dueDate);
      story.save().then(() => this.transitionTo('stories'));
    },

    willTransition(transition) {
      let model = this.controller.get('model');
      if(model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
