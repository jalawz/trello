import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('task', params.task_id);
  },

  actions: {
    editTask(task) {
      let storyId = this.controller.get('model.story.id');
      task.save().then(() => this.transitionTo('stories.story', storyId));
    }
  }
});
