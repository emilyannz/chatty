import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll(`message`, { include: `chatter` });
  },
});

// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   session: Ember.inject.service(),
//
//   beforeModel() {
//     if (!this.get(`session.isAuthenticated`)) {
//       this.transitionTo(`public.login`);
//     }
//   },
//
//   model() {
//     return Ember.RSVP.hash({
//       messages: this.store.findAll(`message`),
//     });
//   },
// });
