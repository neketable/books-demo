import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('speakers');
  this.route('create-speaker');
  this.route('books');
  this.route('edit-book', { path: 'edit-book/:id'});
  this.route('404', { path: '*path' });
  this.route('edit-speaker', { path: 'edit-speaker/:id'});
  this.route('create-book');
  this.route('meeting', { path: 'meetings'});
  this.route('create-meeting');
  this.route('review');
  this.route('edit-meeting', { path: 'edit-meeting/:id'});
  this.route('create-review');
  this.route('edit-review', { path: 'edit-review/:id'});
  this.route('login');
  this.route('register');
});

export default Router;
