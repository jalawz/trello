import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      task: this.store.createRecord('task'),
      story: this.store.findRecord('story', params.storyId)
    });
  },

  actions: {
    saveTask(task) {
      let story = this.controller.get('model.story');
      task.set('story', story);
      story.get('tasks').pushObject(task);
      task.save().then(function() {
        story.save();
      }).then(() => this.transitionTo('stories'));
    },

    willTransition() {
      let model = this.controller.get('model.task');

      if(model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
