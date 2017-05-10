import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('story', params.id, {include: 'tasks'});
  },

  actions: {
    deleteTask(task) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        task.destroyRecord();
      }
    }
  }
});
