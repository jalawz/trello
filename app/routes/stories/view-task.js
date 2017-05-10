import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('task', params.task_id);
  },

  actions: {
    deleteTask(task) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        task.destroyRecord().then(() => this.transitionTo('stories'));
      }
    }
  }
});
