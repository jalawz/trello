import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  story: DS.belongsTo('story'),
  
  isValid: Ember.computed.notEmpty('name')
});
