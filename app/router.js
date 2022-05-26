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
  this.route('edit-book');
  this.route('404', { path: '*path' });
});

export default Router;
