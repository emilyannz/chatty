import Model from 'ember-data/model';

export default Model.extend({
  import Model from 'ember-data/model';
  import attr from 'ember-data/attr';
  import { hasMany } from 'ember-data/relationships';

  export default Model.extend({
    email: attr(),
    password: attr(),
    username: attr(),
    messages: hasMany(`message`)
  });
