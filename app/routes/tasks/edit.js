import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('task', params.id);
  },

  actions: {
    saveTask(task) {
      let storyId = this.controller.get('storyId');
      let story = this.get('store').peekRecord('story', storyId);
      task.set('story', story);
      story.get('tasks').pushObject(task);
      task.save().then(function() {
        story.save();
      }).then(() => this.transitionTo('tasks'));
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
