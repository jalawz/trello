import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('task', params.id);
  },

  actions: {
    saveTask(task) {
      task.save().then(() => this.transitionTo('tasks'));
    }
  }
});
