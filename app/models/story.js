import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  dueDate: DS.attr('date'),
  tasks: DS.hasMany('task'),

  isValidTitle: Ember.computed.notEmpty('title'),
  isValidDate: Ember.computed.notEmpty('dueDate'),

  isValid: Ember.computed.and('isValidTitle', 'isValidDate')
});
