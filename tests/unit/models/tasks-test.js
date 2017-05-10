import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tasks', 'Unit | Model | tasks', {
  // Specify the other units that are required for this test.
  needs: ['model:story']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
