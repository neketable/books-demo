import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  init(){
    this._super(...arguments);
    this.set('book', EmberObject.create());
    this.get('book').set('title', '');
    this.get('book').set('author', '');
    this.get('book').set('pages', '');
  },

  dataService: service('data'),

  actions: {
    async saveBook(book){
      await this.get('dataService').createBook(book);
      this.transitionToRoute('books');
    }
  }
});
