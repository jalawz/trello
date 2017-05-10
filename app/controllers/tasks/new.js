import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateValue(value) {
      console.log(value);
    }
  }
});
