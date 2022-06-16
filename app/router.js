import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('speakers', function() {
    this.route('detail', { path: '/:id'});
  });
  this.route('create-speaker');
  this.route('books');
  this.route('edit-book', { path: 'edit-book/:id'});
  this.route('404', { path: '*path' });
  this.route('edit-speaker', { path: 'edit-speaker/:id'});
  this.route('create-book');
});

export default Router;
